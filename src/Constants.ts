const baseURI = 'https://open.feishu.cn/open-apis'

/** @internal */
export const UPLOAD_PATH = `${baseURI}/image/v4/put/`

/** @internal */
export const GET_IMAGE_PATH = `${baseURI}/image/v4/get`

// *企业自建应用
/** @internal */
export const GET_APP_ACCESS_TOKEN = `${baseURI}/auth/v3/app_access_token/internal/`

// *应用商店应用
/** @internal */
export const GET_APP_ACCESS_TOKEN_APP_STORE = `${baseURI}/auth/v3/app_access_token/`

// *企业自建应用
/** @internal */
export const GET_TENANT_ACCESS_TOKEN = `${baseURI}/auth/v3/tenant_access_token/internal/`

// *应用商店应用
/** @internal */
export const GET_TENANT_ACCESS_TOKEN_APP_STORE = `${baseURI}/auth/v3/tenant_access_token/`

/** @internal */
export const GET_APP_TICKET = `${baseURI}/auth/v3/app_ticket/resend/`

/** @internal */
export const GET_AUTH = `${baseURI}/authen/v1/index`

/** @internal */
export const GET_USER_ACCESS_TOKEN = `${baseURI}/authen/v1/access_token`

/** @internal */
export const REFRESH_USER_ACCESS_TOKEN = `${baseURI}/authen/v1/user_info`

/** @internal */
export const GET_USER_INFO = `${baseURI}/authen/v1/user_info`

/** @internal */
export const GET_CONTACT_SCOPE = `${baseURI}/contact/v1/scope/get`

/** @internal */
export const ID_OPEN_TO_LARK = `${baseURI}/exchange/v3/openid2uid/`

/** @internal */
export const ID_LARK_TO_OPEN = `${baseURI}/exchange/v3/uid2openid/`

/** @internal */
export const ID_MESSAGE_TO_OPEN = `${baseURI}/exchange/v3/mid2omid/`

/** @internal */
export const ID_OPEN_TO_MESSAGE = `${baseURI}/exchange/v3/omid2mid/`

/** @internal */
export const ID_DEPARTMENT_TO_OPEN = `${baseURI}/exchange/v3/did2odid/`

/** @internal */
export const ID_OPEN_TO_DEPARTMENT = `${baseURI}/exchange/v3/odid2did/`

/** @internal */
export const ID_CHAT_TO_OPEN = `${baseURI}/exchange/v3/cid2ocid/`

/** @internal */
export const ID_OPEN_TO_CHAT = `${baseURI}/exchange/v3/ocid2cid/`

/** @internal */
export const ID_LARK_TO_EMPLOYEE = `${baseURI}/exchange/v3/uid2eid/`

/** @internal */
export const ID_EMPLOYEE_TO_LARK = `${baseURI}/exchange/v3/eid2uid/`

/** @internal */
export const CREATE_CHAT = `${baseURI}/chat/v4/create/`

/** @internal */
export const CHAT_LIST = `${baseURI}/chat/v4/list`

/** @internal */
export const CHAT_INFO = `${baseURI}/chat/v4/info`

/** @internal */
export const UPDATE_CHAT = `${baseURI}/chat/v4/update/`

/** @internal */
export const ADD_USER_TO_CHAT = `${baseURI}/chat/v4/chatter/add/`

/** @internal */
export const REMOVE_USER_FROM_CHAT = `${baseURI}/chat/v4/chatter/delete/`

/** @internal */
export const DISCARD_CHAT = `${baseURI}/chat/v4/disband`

/** @internal */
export const GET_BOT_INFO = `${baseURI}/bot/v3/info/`

/** @internal */
export const ADD_BOT_TO_CHAT = `${baseURI}/bot/v4/add`

/** @internal */
export const REMOVE_BOT_FROM_CHAT = `${baseURI}/bot/v4/remove`

/** @internal */
export const GET_USER_CHAT_ID = `${baseURI}/chat/v4/p2p/id`

/** @internal */
export const GET_USER_ID = `${baseURI}/user/v4/email2id`

/** @internal */
export const GET_USER_BASE_INFO = `${baseURI}/user/v4/info`

/** @internal */
export const SEND_MESSAGE_BATCH = `${baseURI}/message/v4/batch_send/`

/** @internal */
export const SEND_MESSAGE = `${baseURI}/message/v4/send/`

/** @internal */
export const RECALL_MESSAGE = `${baseURI}/message/v4/recall/`

/** @internal */
export const READ_MESSAGE = `${baseURI}/message/v4/read_info/`

/** @internal */
export const URGENT_MESSAGE = `${baseURI}/message/v4/urgent/`

/** @internal */
export const REFRESH_CARD_MESSAGE = `${baseURI}/interactive/v1/card/update/`
