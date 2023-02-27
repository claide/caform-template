import Model from './Model'
import dayjs from 'dayjs'

export default class CostCategory extends Model {
  resource() {
    return 'cost/costs/categories'
  }

  get createdAt() {
    if (!this.created_at) {
      return ''
    }
    return dayjs(this.created_at).format('MMMM d, YYYY')
  }
}
