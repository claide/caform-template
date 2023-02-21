export const useAdminPages = (page) => {
  switch (page) {
    case '/admin':
      return '/admin'
    case '/admin/categories':
      return '/admin/categories'
    case '/admin/partners':
      return '/admin/partners'
    case '/admin/settings':
      return '/admin/partners'
  }
}
