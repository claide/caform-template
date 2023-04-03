import Model from './Model'
import dayjs from 'dayjs'
import { readableCurrency } from "@/utils/currency";

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
    return readableCurrency(this.total_usd, 'USD')
  }

  get totalEur() {
    return readableCurrency(this.total_eur, 'EUR')
  }

  get totalGbp() {
    return readableCurrency(this.total_gbp, 'GBP')
  }
}
