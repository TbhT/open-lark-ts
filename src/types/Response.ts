import { UserAccessTokenData, UserInfo } from './Code'

export interface CommonResponse {
  code: ErrorCode
  msg: string
}

export interface UploadImageResponse extends CommonResponse {
  data: { image_key: string }
}

export interface AppAccessTokenResponse extends CommonResponse {
  app_access_token: string
  expire: number
  // 已废弃
  tenant_access_token?: string
}

export interface TenantAccessTokenResponse extends CommonResponse {
  tenant_access_token: string
  expire: number
}

export interface UserAccessTokenResponse extends CommonResponse {
  data: UserAccessTokenData
}

export interface AuthResponse {
  code: string
  state: string
}

export interface UserInfoResponse extends CommonResponse {
  data: UserInfo
}

export interface ContactScopeResponse extends CommonResponse {
  data: {
    authed_departments: string[]
    authed_employee_ids: string[]
    authed_open_ids: string[]
  }
}

export interface OpenId2LarkIdResponse extends CommonResponse {
  user_id: string
}

export interface LarkId2OpenIdResponse extends CommonResponse {
  open_id: string
}

export interface MessageId2OpenIdResponse extends CommonResponse {
  open_message_id: string
}

export interface OpenId2MessageIdResponse extends CommonResponse {
  message_id: string
}

export interface DepartmentId2OpenIdResponse extends CommonResponse {
  open_department_id: string
}

export interface OpenId2DepartmentIdResponse extends CommonResponse {
  department_id: string
}

export interface ChatId2OpenIdResponse extends CommonResponse {
  open_chat_id: string
}

export interface OpenId2ChatIdResponse extends CommonResponse {
  chat_id: string
}

export interface LarkId2EmployeeIdResponse extends CommonResponse {
  employee_id: string
}

export interface EmployeeId2LarkIdResponse extends CommonResponse {
  user_id: string
}

export interface CreateChatResponse extends CommonResponse {
  data: {
    chat_id: string
    invalid_open_ids: string[]
    invalid_user_ids: string[]
  }
}

export interface GroupInfo {
  avatar: string
  description: string
  chat_id: string
  name: string
  owner_open_id: string
  owner_user_id?: string
}

export interface ChatListResponse extends CommonResponse {
  data: {
    has_more: boolean
    page_token: string
    groups: GroupInfo[]
  }
}

export interface ChatInfoResponse extends CommonResponse {
  data: {
    avatar: string
    chat_id: string
    description: string
    i18n_names: {
      [key: string]: string
    }
  }
}

export interface UpdateChatResponse extends CommonResponse {
  data: {
    chat_id: string
  }
}

export interface ModifyUserToChatResponse extends CommonResponse {
  data: {
    invalid_open_ids: string[]
    invalid_user_ids: string[]
  }
}

export interface BotInfoResponse extends CommonResponse {
  bot: {
    activate_status: number
    app_name: string
    avatar_url: string
    ip_white_list: string
    open_id: string
  }
}

export interface UserChatIdResponse extends CommonResponse {
  data: {
    chat_id: string
  }
}

export interface UserIdResponse extends CommonResponse {
  data: {
    open_id: string
    user_id: string
  }
}

export interface BasicUserInfoResponse extends CommonResponse {
  data: {
    avatar: string
    name: string
    open_id: string
    user_id: string
    email: string
  }
}

export interface SendMessageBatchResponse extends CommonResponse {
  data: {
    invalid_department_ids: string[]
    invalid_open_ids: string[]
    invalid_user_ids: string[]
    message_id: string
  }
}

export interface SendMessageResponse extends CommonResponse {
  data: {
    message_id: string
  }
}

interface ReadMessageUser {
  open_id: string
  timestamp: string
  user_id: string
}

export interface ReadMessageResponse extends CommonResponse {
  data: {
    read_users: ReadMessageUser[]
  }
}

export interface UrgentMessageResponse {
  code: ErrorCode
  invalid_open_ids: string[]
}

/**
 * 云文档
 */
export interface CreateDriveDirResponse extends CommonResponse {
  data: {
    url: string
    revision: number
    token: string
  }
}

export interface GetDriveDirInfoResponse extends CommonResponse {
  data: {
    id: string
    name: string
    token: string
    createUid: string
    editUid: string
    parentId: string
    ownUid: string
  }
}

export interface GetDriveDirFilesInfoResponse extends CommonResponse {
  data: {
    parentToken: string
    children: {
      [key: string]: {
        token: string
        name: string
        type: 'doc' | 'sheet' | 'folder'
      }
    }
  }
}

/**
 * @doc https://open.feishu.cn/document/ukTMukTMukTM/ugjM14COyUjL4ITN
 */
export type ErrorCode =
  | 1002
  | 2200
  | 4000
  | 4002
  | 4003
  | 4004
  | 4005
  | 4006
  | 5000
  | 10001
  | 10002
  | 10003
  | 10004
  | 10005
  | 10009
  | 10010
  | 10012
  | 10013
  | 10014
  | 10015
  | 10016
  | 10017
  | 10019
  | 10020
  | 10023
  | 10029
  | 10030
  | 10032
  | 10034
  | 10037
  | 10100
  | 10400
  | 10500
  | 11000
  | 11001
  | 11100
  | 11101
  | 11102
  | 11103
  | 11104
  | 11105
  | 11106
  | 11200
  | 11201
  | 11202
  | 11203
  | 11204
  | 11205
  | 11206
  | 11207
  | 11208
  | 11209
  | 11210
  | 11211
  | 11212
  | 11213
  | 11214
  | 11215
  | 11216
  | 11217
  | 11218
  | 11219
  | 11220
  | 11221
  | 11222
  | 11223
  | 11224
  | 11225
  | 11226
  | 11227
  | 11228
  | 11229
  | 11230
  | 11231
  | 11232
  | 11233
  | 11234
  | 11235
  | 11236
  | 11237
  | 11238
  | 11239
  | 11240
  | 11241
  | 11242
  | 11244
  | 11245
  | 11246
  | 11247
  | 11248
  | 11249
  | 11251
  | 11252
  | 11310
  | 12001
  | 12002
  | 12008
  | 12011
  | 12015
  | 12016
  | 12018
  | 18017
  | 18033
  | 18034
  | 18035
  | 18053
  | 18054
  | 18113
  | 20001
  | 20005
  | 20007
  | 30005
  | 40001
  | 40002
  | 40003
  | 40004
  | 40006
  | 40007
  | 40008
  | 40009
  | 40012
  | 40013
  | 40014
  | 40021
  | 40031
  | 40032
  | 40040
  | 40041
  | 40042
  | 40051
  | 40052
  | 40053
  | 40054
  | 40101
  | 40102
  | 40103
  | 40104
  | 40105
  | 40106
  | 40107
  | 40108
  | 40109
  | 40110
  | 40111
  | 40112
  | 40113
  | 40114
  | 40115
  | 40116
  | 40117
  | 40118
  | 40119
  | 40120
  | 40121
  | 40122
  | 40123
  | 40124
  | 40125
  | 40126
  | 40127
  | 40128
  | 40129
  | 40130
  | 40131
  | 40132
  | 40133
  | 40134
  | 40135
  | 40136
  | 40137
  | 40138
  | 40139
  | 40140
  | 40141
  | 40142
  | 40143
  | 40144
  | 40151
  | 40152
  | 40153
  | 40154
  | 40155
  | 40156
  | 40157
  | 40158
  | 40159
  | 40160
  | 40161
  | 40162
  | 40163
  | 40164
  | 40170
  | 40171
  | 40172
  | 40173
  | 40174
  | 40175
  | 40180
  | 40181
  | 40182
  | 40183
  | 40184
  | 40185
  | 40186
  | 40187
  | 41002
  | 41003
  | 41004
  | 41005
  | 41007
  | 41009
  | 41010
  | 41011
  | 41013
  | 41014
  | 41028
  | 41031
  | 41032
  | 41034
  | 41035
  | 41041
  | 41045
  | 41050
  | 41052
  | 42005
  | 43005
  | 43007
  | 43008
  | 43011
  | 47009
  | 50006
  | 55001
  | 60001
  | 60002
  | 60003
  | 60004
  | 60005
  | 60006
  | 60007
  | 60008
  | 60009
  | 60010
  | 60011
  | 60012
  | 60013
  | 65001
  | 90201
  | 90202
  | 90203
  | 90204
  | 90205
  | 90206
  | 90207
  | 90208
  | 90209
  | 90210
  | 90211
  | 90212
  | 90213
  | 90214
  | 90215
  | 90216
  | 90217
  | 90218
  | 90219
  | 90221
  | 90222
  | 90223
  | 90224
  | 90226
  | 90227
  | 90228
  | 91001
  | 91002
  | 91003
  | 91004
  | 91005
  | 91201
  | 91202
  | 91203
  | 91204
  | 91205
  | 91401
  | 91402
  | 91403
  | 93001
  | 93002
  | 93003
  | 93004
  | 93006
  | 95006
  | 95007
  | 95009
  | 95013
  | 95017
  | 95018
  | 95020
  | 95024
  | 95025
  | 95026
  | 95050
  | 95051
  | 95201
  | 95202
  | 95203
  | 95204
  | 95205
  | 95206
  | 95207
  | 95208
  | 95209
  | 96001
  | 96002
  | 96201
  | 96401
  | 100001
  | 100002
  | 100003
  | 100004
  | 100005
  | 105001
  | 105002
  | 121004
  | 154000
  | 154001
  | 190002
  | 190003
  | 190005
  | 191001
  | 191002
  | 193001
  | 193003
  | 230003
  | 230016
  | 232002
  | 232011
  | 232014
  | 232016
  | 1000001
  | 1000002
  | 1000003
  | 1000004
  | 1000005
  | 1000007
  | 1001001
  | 1001002
  | 1001004
  | 1001501
  | 1001502
  | 1001901
  | 1001902
  | 1001903
  | 1001999
  | 1002000
  | 1003001
  | 1003003
  | 1004000
  | 1004004
  | 1050001
  | 1050002
  | 1050004
  | 1050005
  | 1050006
  | 1050007
  | 1050008
  | 1050009
  | 1050011
  | 1050012
  | 1050019
  | 1051002
  | 1061041
  | 1069301
  | 1069302
  | 1069303
  | 1069304
  | 1069305
  | 1069306
  | 1069307
  | 1069308
  | 1069399
  | 1103003
  | 1103008
  | 99991201
  | 99991301
  | 99991400
  | 99991401
  | 99991611
  | 99991612
  | 99991621
  | 99991622
  | 99991631
  | 99991632
  | 99991641
  | 99991642
  | 99991643
  | 99991644
  | 99991661
  | 99991662
  | 99991663
  | 99991664
  | 99991665
  | 99991666
  | 99991667
  | 99991668
  | 99991669
  | 99991670
  | 99991671
  | 99991672
  | 99991681
  | 99991691
  | 99991692
  | 99991693
  | 99992360
  | 99992354
  | 99992402
