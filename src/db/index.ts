import { JsonDB } from "node-json-db"
import { Config } from "node-json-db/dist/lib/JsonDBConfig"

export const resolveData = <T>(data: T): Promise<T> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(data)
    }, 500)
  })

export class DBSingleton extends JsonDB {
  static instance: JsonDB
  constructor(config: Config) {
    super(config)
  }
  static getInstance(config: Config): JsonDB {
    if (!DBSingleton.instance) {
      DBSingleton.instance = new JsonDB(config)
    }
    return DBSingleton.instance
  }
}

export const db = DBSingleton.getInstance(new Config("myDB", true, false, "/"))
