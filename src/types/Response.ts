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

export type ErrorCode =
  | 0
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
  | 10019
  | 10020
  | 10023
  | 10029
  | 10030
  | 10032
  | 10034
  | 10037
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
  | 11208
  | 11202
  | 11203
  | 11204
  | 11205
  | 11206
  | 11207
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
  | 99991400
  | 99991663
  | 99991664
  | 99991665
  | 99991666
  | number
