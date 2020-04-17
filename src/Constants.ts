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

export const GET_CONTACT_SCOPE = `${baseURI}/contact/v1/scope/get`

export const ID_OPEN_TO_LARK = `${baseURI}/exchange/v3/openid2uid/`

export const ID_LARK_TO_OPEN = `${baseURI}/exchange/v3/uid2openid/`

export const ID_MESSAGE_TO_OPEN = `${baseURI}/exchange/v3/mid2omid/`

export const ID_OPEN_TO_MESSAGE = `${baseURI}/exchange/v3/omid2mid/`

export const ID_DEPARTMENT_TO_OPEN = `${baseURI}/exchange/v3/did2odid/`

export const ID_OPEN_TO_DEPARTMENT = `${baseURI}/exchange/v3/odid2did/`

export const ID_CHAT_TO_OPEN = `${baseURI}/exchange/v3/cid2ocid/`

export const ID_OPEN_TO_CHAT = `${baseURI}/exchange/v3/ocid2cid/`

export const ID_LARK_TO_EMPLOYEE = `${baseURI}/exchange/v3/uid2eid/`

export const ID_EMPLOYEE_TO_LARK = `${baseURI}/exchange/v3/eid2uid/`
