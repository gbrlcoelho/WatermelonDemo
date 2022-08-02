import {appSchema} from '@nozbe/watermelondb/Schema'
import {blogSchema} from './blogSchema'
import {commentSchema} from './commentSchema'
import {postSchema} from './postSchema'

export default appSchema({
  version: 1,
  tables: [blogSchema, postSchema, commentSchema],
})
