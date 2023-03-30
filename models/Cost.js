import Model from './Model'
import dayjs from 'dayjs'

export default class Cost extends Model {
  // Set the resource route of the model
  resource() {
    return 'cost/costs'
  }

  get createdAt() {
    if (!this.created_at) {
      return ''
    }
    return dayjs(this.created_at).format('MMMM D, YYYY')
  }

  get statusText() {
    if (this.status === 1) {
      return 'Pending'
    } else if (this.status === 2) {
      return 'Approved'
    } else if (this.status === 3) {
      return 'Rejected'
    } else if (this.status === 4) {
      return 'Paid'
    } else if (this.status === 5) {
      return 'Payment Rejected'
    }
  }

  get statusColor() {
    if (this.status === 1) {
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
    } else if (this.status === 2) {
      return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300'
    } else if (this.status === 3) {
      return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
    } else if (this.status === 4) {
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
    } else if (this.status === 5) {
      return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
    }
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
}
