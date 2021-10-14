import 'dotenv/config'
import { IClientConfig } from './lib/Client'

const getConfig = (): IClientConfig => {
    return {
        ll: process.env.lll || 'entropy',
        botname: process.env.BOTNAME || '!',
        kk: process.env.kkk
            ? process.env.MODS.split(',').map((id) => {
                  if (id.endsWith('@s.whatsapp.net')) return id
                  return id.replace('+', '').concat('@s.whatsapp.net')
              })
            : []
    }
}

export default getConfig
