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
    return dayjs(this.created_at).format('MMMM D, YYYY')
  }

  get totalUsd() {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    const amount = this.total_usd ? (this.total_usd / 100) : 0

    return formatter.format(amount)
  }

  get totalEur() {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'EUR',
    });

    const amount = this.total_eur ? (this.total_eur / 100) : 0

    return formatter.format(amount)
  }

  get totalGbp() {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'GBP',
    });

    const amount = this.total_gbp ? (this.total_gbp / 100) : 0

    return formatter.format(amount)
  }
}
