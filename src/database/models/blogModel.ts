import {Model, Q} from '@nozbe/watermelondb'
import {field, children, lazy, action} from '@nozbe/watermelondb/decorators'
import {Associations} from '@nozbe/watermelondb/Model'
import {PostModel} from './postModel'

export class BlogModel extends Model {
  static table = 'blogs'

  static associations: Associations = {
    posts: {type: 'has_many', foreignKey: 'blog_id'},
  }

  @field('name') name!: string
  @children('posts') posts!: PostModel
  @lazy
  nastyComments = this.collections.get('comments').query(Q.on('posts', 'blog_id', this.id), Q.where('is_nasty', true))

  @action async moderateAll() {
    await this.nastyComments.destroyAllPermanently()
  }
}
