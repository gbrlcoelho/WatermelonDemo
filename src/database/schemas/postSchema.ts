import {tableSchema} from '@nozbe/watermelondb/Schema'

export const postSchema = tableSchema({
  name: 'posts',
  columns: [
    {name: 'title', type: 'string'},
    {name: 'subtitle', type: 'string'},
    {name: 'body', type: 'string'},
    {name: 'blog_id', type: 'string', isIndexed: true},
  ],
})
