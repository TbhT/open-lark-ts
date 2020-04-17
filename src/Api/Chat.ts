import axios, { AxiosInstance } from 'axios'
import { I18NType } from '../types/Enum'
import { CreateChatResponse } from '../types/Response'
import { CREATE_CHAT } from '../Constants'

const Headers = (tenantAccessToken: string) => ({
  headers: {
    'content-type': 'application/json',
    Authorization: `Bearer ${tenantAccessToken}`
  }
})

type createChatParams = {
  name?: string
  description?: string
  i18n_names?: { [key: string]: string }
  only_owner_add?: boolean
  share_allowed?: boolean
  only_owner_at_all?: boolean
  only_owner_edit?: boolean
  instance?: AxiosInstance
  tenantAccessToken: string
} & ({ open_ids: string[] } | { user_ids: string[] })

export async function createChat(
  params: createChatParams
): Promise<CreateChatResponse> {
  let $instance: AxiosInstance | undefined = params.instance

  if (!$instance) {
    $instance = axios.create(Headers(params.tenantAccessToken))
  }

  const { data } = await $instance.post<CreateChatResponse>(CREATE_CHAT, {
    name: params.name || '',
    description: params.description || '',
    i18n_names: params.i18n_names,
    only_owner_add:
      params.only_owner_add === undefined ? false : params.only_owner_add,
    share_allowed:
      params.share_allowed === undefined ? true : params.share_allowed,
    only_owner_at_all:
      params.only_owner_at_all === undefined ? false : params.only_owner_at_all,
    only_owner_edit:
      params.only_owner_edit === undefined ? false : params.only_owner_edit
  })

  return data
}
