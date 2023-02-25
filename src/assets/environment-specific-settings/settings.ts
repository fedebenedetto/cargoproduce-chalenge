import * as settingsJson from './settings.json'

interface Settings {
    mock: boolean,
    production: boolean,
    develop:boolean,
    apiUrl: string,
    token?: string
}

export const config = settingsJson as Settings