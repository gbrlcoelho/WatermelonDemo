import {Database} from '@nozbe/watermelondb'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'
import migrations from './migrations/migrations'
import {BlogModel} from './models/blogModel'
import {CommentModel} from './models/commentModel'
import {PostModel} from './models/postModel'
import schemas from './schemas'

const adapter = new SQLiteAdapter({
  schema: schemas,
  migrations: migrations,
  dbName: 'WatermelonDemo',
})

export const database = new Database({
  adapter,
  modelClasses: [BlogModel, PostModel, CommentModel],
})
