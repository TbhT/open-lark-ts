const baseURI = 'https://open.feishu.cn/open-apis'

export const UPLOAD_PATH = `${baseURI}/image/v4/put/`

export const GET_IMAGE_PATH = `${baseURI}/image/v4/get`

// *企业自建应用
export const GET_APP_ACCESS_TOKEN = `${baseURI}/auth/v3/app_access_token/internal/`

// *应用商店应用
export const GET_APP_ACCESS_TOKEN_APP_STORE = `${baseURI}/auth/v3/app_access_token/`

// *企业自建应用
export const GET_TENANT_ACCESS_TOKEN = `${baseURI}/auth/v3/tenant_access_token/internal/`

// *应用商店应用
export const GET_TENANT_ACCESS_TOKEN_APP_STORE = `${baseURI}/auth/v3/tenant_access_token/`

export const GET_APP_TICKET = `${baseURI}/auth/v3/app_ticket/resend/`

export const GET_AUTH = `${baseURI}/authen/v1/index`

export const GET_USER_ACCESS_TOKEN = `${baseURI}/authen/v1/access_token`

export const REFRESH_USER_ACCESS_TOKEN = `${baseURI}/authen/v1/user_info`

export const GET_USER_INFO = `${baseURI}/authen/v1/user_info`
