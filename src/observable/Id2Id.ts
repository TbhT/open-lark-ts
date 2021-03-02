import { RxHR } from '@akanass/rx-http-request'
import { Observable } from 'rxjs'
import {
  ChatId2OpenIdResponse,
  DepartmentId2OpenIdResponse,
  EmployeeId2LarkIdResponse,
  LarkId2EmployeeIdResponse,
  LarkId2OpenIdResponse,
  OpenId2ChatIdResponse,
  OpenId2DepartmentIdResponse,
  OpenId2LarkIdResponse,
  OpenId2MessageIdResponse
} from '@/types/Response'
import { ID_LARK_TO_OPEN, ID_OPEN_TO_LARK } from '@/Constants'

export function openId2LarkId({
  openId,
  tenantAccessToken
}: {
  openId: string
  tenantAccessToken: string
}) {
  return new Observable<OpenId2LarkIdResponse>(subscriber =>
    RxHR.post<OpenId2LarkIdResponse>(ID_OPEN_TO_LARK, {
      headers: {
        Authorization: `Bearer ${tenantAccessToken}`
      },
      json: true,
      body: {
        open_id: openId
      }
    }).subscribe(
      data => subscriber.next(data.body),
      error => subscriber.error(error),
      () => subscriber.complete()
    )
  )
}

export function larkId2OpenId({
  larkId,
  tenantAccessToken
}: {
  larkId: string
  tenantAccessToken: string
}) {
  return new Observable<LarkId2OpenIdResponse>(subscriber =>
    RxHR.post<LarkId2OpenIdResponse>(ID_LARK_TO_OPEN, {
      headers: {
        Authorization: `Bearer ${tenantAccessToken}`
      },
      json: true,
      body: {
        user_id: larkId
      }
    }).subscribe(
      data => subscriber.next(data.body),
      error => subscriber.error(error),
      () => subscriber.complete()
    )
  )
}

export function messageId2OpenMessageId({
  messageId,
  tenantAccessToken
}: {
  messageId: string
  tenantAccessToken: string
}) {
  return new Observable<LarkId2OpenIdResponse>(subscriber =>
    RxHR.post<LarkId2OpenIdResponse>(ID_LARK_TO_OPEN, {
      headers: {
        Authorization: `Bearer ${tenantAccessToken}`
      },
      json: true,
      body: {
        message_id: messageId
      }
    }).subscribe(
      data => subscriber.next(data.body),
      error => subscriber.error(error),
      () => subscriber.complete()
    )
  )
}

export function openMessageId2MessageId({
  openMessageId,
  tenantAccessToken
}: {
  openMessageId: string
  tenantAccessToken: string
}) {
  return new Observable<OpenId2MessageIdResponse>(subscriber =>
    RxHR.post<OpenId2MessageIdResponse>(ID_LARK_TO_OPEN, {
      headers: {
        Authorization: `Bearer ${tenantAccessToken}`
      },
      json: true,
      body: {
        open_message_id: openMessageId
      }
    }).subscribe(
      data => subscriber.next(data.body),
      error => subscriber.error(error),
      () => subscriber.complete()
    )
  )
}

export function departmentId2OpenDepartmentId({
  departmentId,
  tenantAccessToken
}: {
  departmentId: string
  tenantAccessToken: string
}) {
  return new Observable<DepartmentId2OpenIdResponse>(subscriber =>
    RxHR.post<DepartmentId2OpenIdResponse>(ID_LARK_TO_OPEN, {
      headers: {
        Authorization: `Bearer ${tenantAccessToken}`
      },
      json: true,
      body: {
        department_id: departmentId
      }
    }).subscribe(
      data => subscriber.next(data.body),
      error => subscriber.error(error),
      () => subscriber.complete()
    )
  )
}

export function openDepartmentId2DepartmentId({
  openDepartmentId,
  tenantAccessToken
}: {
  openDepartmentId: string
  tenantAccessToken: string
}) {
  return new Observable<OpenId2DepartmentIdResponse>(subscriber =>
    RxHR.post<OpenId2DepartmentIdResponse>(ID_LARK_TO_OPEN, {
      headers: {
        Authorization: `Bearer ${tenantAccessToken}`
      },
      json: true,
      body: {
        open_department_id: openDepartmentId
      }
    }).subscribe(
      data => subscriber.next(data.body),
      error => subscriber.error(error),
      () => subscriber.complete()
    )
  )
}

export function chatId2OpenChatId({
  chatId,
  tenantAccessToken
}: {
  chatId: string
  tenantAccessToken: string
}) {
  return new Observable<ChatId2OpenIdResponse>(subscriber =>
    RxHR.post<ChatId2OpenIdResponse>(ID_LARK_TO_OPEN, {
      headers: {
        Authorization: `Bearer ${tenantAccessToken}`
      },
      json: true,
      body: {
        chat_id: chatId
      }
    }).subscribe(
      data => subscriber.next(data.body),
      error => subscriber.error(error),
      () => subscriber.complete()
    )
  )
}

export function openChatId2ChatId({
  openChatId,
  tenantAccessToken
}: {
  openChatId: string
  tenantAccessToken: string
}) {
  return new Observable<OpenId2ChatIdResponse>(subscriber =>
    RxHR.post<OpenId2ChatIdResponse>(ID_LARK_TO_OPEN, {
      headers: {
        Authorization: `Bearer ${tenantAccessToken}`
      },
      json: true,
      body: {
        open_chat_id: openChatId
      }
    }).subscribe(
      data => subscriber.next(data.body),
      error => subscriber.error(error),
      () => subscriber.complete()
    )
  )
}

export function larkId2EmployeeId({
  larkId,
  tenantAccessToken
}: {
  larkId: string
  tenantAccessToken: string
}) {
  return new Observable<LarkId2EmployeeIdResponse>(subscriber =>
    RxHR.post<LarkId2EmployeeIdResponse>(ID_LARK_TO_OPEN, {
      headers: {
        Authorization: `Bearer ${tenantAccessToken}`
      },
      json: true,
      body: {
        user_id: larkId
      }
    }).subscribe(
      data => subscriber.next(data.body),
      error => subscriber.error(error),
      () => subscriber.complete()
    )
  )
}

export function employeeId2LarkId({
  employeeId,
  tenantAccessToken
}: {
  employeeId: string
  tenantAccessToken: string
}) {
  return new Observable<EmployeeId2LarkIdResponse>(subscriber =>
    RxHR.post<EmployeeId2LarkIdResponse>(ID_LARK_TO_OPEN, {
      headers: {
        Authorization: `Bearer ${tenantAccessToken}`
      },
      json: true,
      body: {
        employee_id: employeeId
      }
    }).subscribe(
      data => subscriber.next(data.body),
      error => subscriber.error(error),
      () => subscriber.complete()
    )
  )
}
