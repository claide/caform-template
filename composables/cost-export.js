export const useCostExport = (url, filters = {}) => {
  let requestUrl = `${url}&`;

  if (filters.status) {
    requestUrl = requestUrl + `filter[status]=${filters.status}`
  }

  if (filters.payment_method) {
    requestUrl = requestUrl + `&filter[payment_method]=${filters.payment_method}`
  }

  return requestUrl
}
