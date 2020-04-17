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

const Headers = {
  headers: {
    'content-type': 'application/json'
  }
}

export async function openId2LarkId({
  openId,
  instance
}: {
  openId: string
  instance: AxiosInstance
}): Promise<OpenId2LarkIdResponse> {
  let $instance: AxiosInstance | undefined = instance

  if (!$instance) {
    $instance = axios.create(Headers)
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
  instance
}: {
  larkId: string
  instance: AxiosInstance
}): Promise<LarkId2OpenIdResponse> {
  let $instance: AxiosInstance | undefined = instance

  if (!$instance) {
    $instance = axios.create(Headers)
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
  instance
}: {
  messageId: string
  instance: AxiosInstance
}): Promise<MessageId2OpenIdResponse> {
  let $instance: AxiosInstance | undefined = instance

  if (!$instance) {
    $instance = axios.create(Headers)
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
  instance
}: {
  openMessageId: string
  instance: AxiosInstance
}): Promise<OpenId2MessageIdResponse> {
  let $instance: AxiosInstance | undefined = instance

  if (!$instance) {
    $instance = axios.create(Headers)
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
  instance
}: {
  departmentId: string
  instance: AxiosInstance
}): Promise<DepartmentId2OpenIdResponse> {
  let $instance: AxiosInstance | undefined = instance

  if (!$instance) {
    $instance = axios.create(Headers)
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
  instance
}: {
  openDepartmentId: string
  instance: AxiosInstance
}): Promise<OpenId2DepartmentIdResponse> {
  let $instance: AxiosInstance | undefined = instance

  if (!$instance) {
    $instance = axios.create(Headers)
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
  instance
}: {
  chatId: string
  instance: AxiosInstance
}): Promise<ChatId2OpenIdResponse> {
  let $instance: AxiosInstance | undefined = instance

  if (!$instance) {
    $instance = axios.create(Headers)
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
  instance
}: {
  openChatId: string
  instance: AxiosInstance
}): Promise<OpenId2ChatIdResponse> {
  let $instance: AxiosInstance | undefined = instance

  if (!$instance) {
    $instance = axios.create(Headers)
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
  instance
}: {
  larkId: string
  instance: AxiosInstance
}): Promise<LarkId2EmployeeIdResponse> {
  let $instance: AxiosInstance | undefined = instance

  if (!$instance) {
    $instance = axios.create(Headers)
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
  instance
}: {
  employeeId: string
  instance: AxiosInstance
}): Promise<EmployeeId2LarkIdResponse> {
  let $instance: AxiosInstance | undefined = instance

  if (!$instance) {
    $instance = axios.create(Headers)
  }

  const { data } = await $instance.post<EmployeeId2LarkIdResponse>(
    ID_EMPLOYEE_TO_LARK,
    {
      employee_id: employeeId
    }
  )

  return data
}
