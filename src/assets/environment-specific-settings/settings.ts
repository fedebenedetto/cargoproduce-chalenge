import * as settingsJson from './settings.json'

interface Urls {
    task: string
}
interface Settings {
    mock: boolean,
    production: boolean,
    develop: boolean,
    apiUrl: string,
    token?: string,
    urls: Urls
}

export const config = settingsJson as Settings