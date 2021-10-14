/** Whatsapp User ID */
export type JID = `${string}@s.whatsapp.net`

/** Whatsapp Group ID */
export type GID = `${string}-${string}@g.us`

export interface IClientConfig {
    /**
     * The session of the bot.
     * @type {string}
     * @memberof IConfig
     */
    ll: string

    /**
     * The Prefix of the bot.
     * @type {string}
     * @memberof IConfig
     * @default '!'
     */
    botname: string

    /**
     * The token of the bot.
     * @type {string}
     * @memberof IConfig
     * @default []
     */
    kk: (JID | string)[]
}

export interface ISession {
    clientID: string
    serverToken: string
    clientToken: string
    encKey: string
    macKey: string
}

export interface IUser {
    username: string
    jid: string
    isMod: boolean
}
