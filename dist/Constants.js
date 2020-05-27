"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseURI = 'https://open.feishu.cn/open-apis';
exports.UPLOAD_PATH = `${baseURI}/image/v4/put/`;
exports.GET_IMAGE_PATH = `${baseURI}/image/v4/get`;
// *企业自建应用
exports.GET_APP_ACCESS_TOKEN = `${baseURI}/auth/v3/app_access_token/internal/`;
// *应用商店应用
exports.GET_APP_ACCESS_TOKEN_APP_STORE = `${baseURI}/auth/v3/app_access_token/`;
// *企业自建应用
exports.GET_TENANT_ACCESS_TOKEN = `${baseURI}/auth/v3/tenant_access_token/internal/`;
// *应用商店应用
exports.GET_TENANT_ACCESS_TOKEN_APP_STORE = `${baseURI}/auth/v3/tenant_access_token/`;
exports.GET_APP_TICKET = `${baseURI}/auth/v3/app_ticket/resend/`;
exports.GET_AUTH = `${baseURI}/authen/v1/index`;
exports.GET_USER_ACCESS_TOKEN = `${baseURI}/authen/v1/access_token`;
exports.REFRESH_USER_ACCESS_TOKEN = `${baseURI}/authen/v1/user_info`;
exports.GET_USER_INFO = `${baseURI}/authen/v1/user_info`;
exports.GET_CONTACT_SCOPE = `${baseURI}/contact/v1/scope/get`;
exports.ID_OPEN_TO_LARK = `${baseURI}/exchange/v3/openid2uid/`;
exports.ID_LARK_TO_OPEN = `${baseURI}/exchange/v3/uid2openid/`;
exports.ID_MESSAGE_TO_OPEN = `${baseURI}/exchange/v3/mid2omid/`;
exports.ID_OPEN_TO_MESSAGE = `${baseURI}/exchange/v3/omid2mid/`;
exports.ID_DEPARTMENT_TO_OPEN = `${baseURI}/exchange/v3/did2odid/`;
exports.ID_OPEN_TO_DEPARTMENT = `${baseURI}/exchange/v3/odid2did/`;
exports.ID_CHAT_TO_OPEN = `${baseURI}/exchange/v3/cid2ocid/`;
exports.ID_OPEN_TO_CHAT = `${baseURI}/exchange/v3/ocid2cid/`;
exports.ID_LARK_TO_EMPLOYEE = `${baseURI}/exchange/v3/uid2eid/`;
exports.ID_EMPLOYEE_TO_LARK = `${baseURI}/exchange/v3/eid2uid/`;
exports.CREATE_CHAT = `${baseURI}/chat/v4/create/`;
exports.CHAT_LIST = `${baseURI}/chat/v4/list`;
exports.CHAT_INFO = `${baseURI}/chat/v4/info`;
exports.UPDATE_CHAT = `${baseURI}/chat/v4/update/`;
exports.ADD_USER_TO_CHAT = `${baseURI}/chat/v4/chatter/add/`;
exports.REMOVE_USER_FROM_CHAT = `${baseURI}/chat/v4/chatter/delete/`;
exports.DISCARD_CHAT = `${baseURI}/chat/v4/disband`;
exports.GET_BOT_INFO = `${baseURI}/bot/v3/info/`;
exports.ADD_BOT_TO_CHAT = `${baseURI}/bot/v4/add`;
exports.REMOVE_BOT_FROM_CHAT = `${baseURI}/bot/v4/remove`;
exports.GET_USER_CHAT_ID = `${baseURI}/chat/v4/p2p/id`;
exports.GET_USER_ID = `${baseURI}/user/v4/email2id`;
exports.GET_USER_BASE_INFO = `${baseURI}/user/v4/info`;
exports.SEND_MESSAGE_BATCH = `${baseURI}/message/v4/batch_send/`;
exports.SEND_MESSAGE = `${baseURI}/message/v4/send/`;
exports.RECALL_MESSAGE = `${baseURI}/message/v4/recall/`;
exports.READ_MESSAGE = `${baseURI}/message/v4/read_info/`;
exports.URGENT_MESSAGE = `${baseURI}/message/v4/urgent/`;
exports.REFRESH_CARD_MESSAGE = `${baseURI}/interactive/v1/card/update/`;
