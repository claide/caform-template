import Model from './Model'
import dayjs from 'dayjs'

export default class CostPartner extends Model {
  resource() {
    return 'cost/costs/partners'
  }

  get paymentMethodText() {
    if (this.payment_method === 1) {
      return 'Wiretransfer'
    } else if (this.payment_method === 2) {
      return 'Bitsafe'
    } else if (this.payment_method === 3) {
      return 'SEPA'
    } else if (this.payment_method === 4) {
      return 'ACH'
    }
  }

  get createdAt() {
    if (!this.created_at) {
      return ''
    }
    return dayjs(this.created_at).format('MMMM d, YYYY')
  }
}
