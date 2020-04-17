import axios, { AxiosInstance } from 'axios'
import {
  ID_OPEN_TO_LARK,
  ID_LARK_TO_OPEN,
  ID_MESSAGE_TO_OPEN,
  ID_OPEN_TO_MESSAGE,
  ID_DEPARTMENT_TO_OPEN,
  ID_OPEN_TO_DEPARTMENT,
  ID_CHAT_TO_OPEN,
  ID_OPEN_TO_CHAT,
  ID_LARK_TO_EMPLOYEE,
  ID_EMPLOYEE_TO_LARK
} from '../Constants'
import {
  OpenId2LarkIdResponse,
  LarkId2OpenIdResponse,
  MessageId2OpenIdResponse,
  OpenId2MessageIdResponse,
  DepartmentId2OpenIdResponse,
  OpenId2DepartmentIdResponse,
  ChatId2OpenIdResponse,
  OpenId2ChatIdResponse,
  LarkId2EmployeeIdResponse,
  EmployeeId2LarkIdResponse
} from '../types/Response'

const Headers = (tenantAccessToken: string): object => ({
  headers: {
    'content-type': 'application/json',
    Authorization: `Bearer ${tenantAccessToken}`
  }
})

export async function openId2LarkId({
  openId,
  instance,
  tenantAccessToken
}: {
  openId: string
  instance?: AxiosInstance
  tenantAccessToken: string
}): Promise<OpenId2LarkIdResponse> {
  let $instance: AxiosInstance | undefined = instance

  if (!$instance) {
    $instance = axios.create(Headers(tenantAccessToken))
  }

  const { data } = await $instance.post<OpenId2LarkIdResponse>(
    ID_OPEN_TO_LARK,
    {
      open_id: openId
    }
  )

  return data
}

export async function larkId2OpenId({
  larkId,
  instance,
  tenantAccessToken
}: {
  larkId: string
  instance?: AxiosInstance
  tenantAccessToken: string
}): Promise<LarkId2OpenIdResponse> {
  let $instance: AxiosInstance | undefined = instance

  if (!$instance) {
    $instance = axios.create(Headers(tenantAccessToken))
  }

  const { data } = await $instance.post<LarkId2OpenIdResponse>(
    ID_LARK_TO_OPEN,
    {
      lark_id: larkId
    }
  )

  return data
}

export async function messageId2OpenMessageId({
  messageId,
  instance,
  tenantAccessToken
}: {
  messageId: string
  instance?: AxiosInstance
  tenantAccessToken: string
}): Promise<MessageId2OpenIdResponse> {
  let $instance: AxiosInstance | undefined = instance

  if (!$instance) {
    $instance = axios.create(Headers(tenantAccessToken))
  }

  const { data } = await $instance.post<MessageId2OpenIdResponse>(
    ID_MESSAGE_TO_OPEN,
    {
      message_id: messageId
    }
  )

  return data
}

export async function openMessageId2MessageId({
  openMessageId,
  instance,
  tenantAccessToken
}: {
  openMessageId: string
  instance?: AxiosInstance
  tenantAccessToken: string
}): Promise<OpenId2MessageIdResponse> {
  let $instance: AxiosInstance | undefined = instance

  if (!$instance) {
    $instance = axios.create(Headers(tenantAccessToken))
  }

  const { data } = await $instance.post<OpenId2MessageIdResponse>(
    ID_OPEN_TO_MESSAGE,
    {
      open_message_id: openMessageId
    }
  )

  return data
}

export async function departmentId2OpenDepartmentId({
  departmentId,
  instance,
  tenantAccessToken
}: {
  departmentId: string
  instance?: AxiosInstance
  tenantAccessToken: string
}): Promise<DepartmentId2OpenIdResponse> {
  let $instance: AxiosInstance | undefined = instance

  if (!$instance) {
    $instance = axios.create(Headers(tenantAccessToken))
  }

  const { data } = await $instance.post<DepartmentId2OpenIdResponse>(
    ID_DEPARTMENT_TO_OPEN,
    {
      department_id: departmentId
    }
  )

  return data
}

export async function openDepartmentId2DepartmentId({
  openDepartmentId,
  instance,
  tenantAccessToken
}: {
  openDepartmentId: string
  instance?: AxiosInstance
  tenantAccessToken: string
}): Promise<OpenId2DepartmentIdResponse> {
  let $instance: AxiosInstance | undefined = instance

  if (!$instance) {
    $instance = axios.create(Headers(tenantAccessToken))
  }

  const { data } = await $instance.post<OpenId2DepartmentIdResponse>(
    ID_OPEN_TO_DEPARTMENT,
    {
      open_department_id: openDepartmentId
    }
  )

  return data
}

export async function chatId2OpenChatId({
  chatId,
  instance,
  tenantAccessToken
}: {
  chatId: string
  instance?: AxiosInstance
  tenantAccessToken: string
}): Promise<ChatId2OpenIdResponse> {
  let $instance: AxiosInstance | undefined = instance

  if (!$instance) {
    $instance = axios.create(Headers(tenantAccessToken))
  }

  const { data } = await $instance.post<ChatId2OpenIdResponse>(
    ID_CHAT_TO_OPEN,
    {
      chat_id: chatId
    }
  )

  return data
}

export async function openChatId2ChatId({
  openChatId,
  instance,
  tenantAccessToken
}: {
  openChatId: string
  instance?: AxiosInstance
  tenantAccessToken: string
}): Promise<OpenId2ChatIdResponse> {
  let $instance: AxiosInstance | undefined = instance

  if (!$instance) {
    $instance = axios.create(Headers(tenantAccessToken))
  }

  const { data } = await $instance.post<OpenId2ChatIdResponse>(
    ID_OPEN_TO_CHAT,
    {
      open_chat_id: openChatId
    }
  )

  return data
}

export async function larkId2EmployeeId({
  larkId,
  instance,
  tenantAccessToken
}: {
  larkId: string
  instance?: AxiosInstance
  tenantAccessToken: string
}): Promise<LarkId2EmployeeIdResponse> {
  let $instance: AxiosInstance | undefined = instance

  if (!$instance) {
    $instance = axios.create(Headers(tenantAccessToken))
  }

  const { data } = await $instance.post<LarkId2EmployeeIdResponse>(
    ID_LARK_TO_EMPLOYEE,
    {
      lark_id: larkId
    }
  )

  return data
}

export async function employeeId2LarkId({
  employeeId,
  instance,
  tenantAccessToken
}: {
  employeeId: string
  instance?: AxiosInstance
  tenantAccessToken: string
}): Promise<EmployeeId2LarkIdResponse> {
  let $instance: AxiosInstance | undefined = instance

  if (!$instance) {
    $instance = axios.create(Headers(tenantAccessToken))
  }

  const { data } = await $instance.post<EmployeeId2LarkIdResponse>(
    ID_EMPLOYEE_TO_LARK,
    {
      employee_id: employeeId
    }
  )

  return data
}
