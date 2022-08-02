import {tableSchema} from '@nozbe/watermelondb/Schema'

export const blogSchema = tableSchema({
  name: 'blogs',
  columns: [{name: 'name', type: 'string'}],
})
