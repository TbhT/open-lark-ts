export const Headers = (
  tenantAccessToken: string,
  accessToken = true
): {
  [key: string]: string
} => {
  const headers: {
    [key: string]: string
  } = {
    'content-type': 'application/json'
  }

  if (accessToken) {
    headers.Authorization = `Bearer ${tenantAccessToken}`
    return headers
  }

  return headers
}

export default Headers
