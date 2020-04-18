import axios, { AxiosInstance } from 'axios'
import { GET_CONTACT_SCOPE } from '../Constants'
import { ContactScopeResponse } from '../types/Response'

// 获取通讯录授权范围
export async function getContactScope({
  tenantAccessToken,
  instance
}: {
  tenantAccessToken: string
  instance?: AxiosInstance
}): Promise<ContactScopeResponse> {
  let $instance: AxiosInstance | undefined = instance

  if (!$instance) {
    $instance = axios.create({
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${tenantAccessToken}`
      }
    })
  }

  const { data } = await $instance.get<ContactScopeResponse>(GET_CONTACT_SCOPE)

  return data
}

// todo: 批量获取用户信息

// todo: 获取部门用户列表

// todo: 获取部门用户详情

// todo: 新增用户

// todo: 删除用户

// todo: 更新用户信息

// todo: 获取角色列表

// todo: 获取角色成员列表

// todo: 使用手机号或邮箱获取用户 ID

// todo: 使用统一 ID 获取用户 ID

// todo: 搜索用户
