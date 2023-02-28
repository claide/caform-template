import Model from './Model'

export default class ApplicantCost extends Model {
  // Set the resource route of the model
  resource () {
    return 'cost/applicant/costs'
  }

  formData () {
    return {
      indices: true,
      nullsAsUndefineds: true
    }
  }
}
