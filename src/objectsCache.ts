import { SettingsData } from "./settings"

const ms = require('ms')
const moment = require('moment')

interface CacheItem {
    updateTime: number,
    data: unknown,
    isError: boolean,
}
interface Cache {
    [key: string]: CacheItem
}

let cache: Cache = {}

export default {

    add<T>(key: string, object: T, isError = false): CacheItem {
        cache[key] = {
            updateTime: Date.now(),
            data: object,
            isError: isError,
        }
        return cache[key]
    },

    get(key: string): CacheItem {
        if (key in cache && cache[key].updateTime + ms(SettingsData.cacheTime) > Date.now()) {
            return cache[key]
        }
        return null
    },

    getTime(key: string): string {
        if (key in cache) {
            return moment(cache[key].updateTime).format('llll')
        }
        return null
    },

    delete(key: string): void {
        if (key in cache) {
            delete cache[key]
        }
    },

    clear(): void {
        cache = {}
    },

    dumpKeysAndSummaries(): { [key: string]: string } {
        const keysAndSummaries: any = {}
        // Simple assumption: JIRA ticket key includes '-' at position > 0
        const filteredKeys = Object.keys(cache).filter((key) => key.indexOf('-') > 0)
        for (let key of filteredKeys) {
            keysAndSummaries[key] = (cache[key]?.data as any)?.fields?.summary
        }
        return keysAndSummaries
    }
}
