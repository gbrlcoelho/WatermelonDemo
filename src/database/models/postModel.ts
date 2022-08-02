import {Model} from '@nozbe/watermelondb'
import {field, relation, children, action} from '@nozbe/watermelondb/decorators'
import {Associations} from '@nozbe/watermelondb/Model'

export class PostModel extends Model {
  static table = 'posts'
  static associations: Associations = {
    blogs: {type: 'belongs_to', key: 'blog_id'},
    comments: {type: 'has_many', foreignKey: 'post_id'},
  }

  @field('title') title!: string
  @field('subtitle') subtitle!: string
  @field('body') body!: string
  @relation('blogs', 'blog_id') blog!: string
  @children('comments') comments!: string

  @action async addComment(body: string) {
    return this.collections.get('comments').create((comment: any) => {
      comment.post.set(this)
      comment.body = body
    })
  }
}
