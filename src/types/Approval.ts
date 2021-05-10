import {
  ApprovalTaskTypeStatus,
  ApprovalTaskStatus,
  ApprovalTaskTypeStatusV2,
  ApprovalTaskStatusV2,
  ApprovalInstanceStatus,
  ApprovalInstanceStatusV2
} from './Enum'

// 审批节点对象
export interface ApprovalNode {
  name: string
  need_approver: boolean
  node_id: string
  node_type: number
}

// 审批表单字段对象
export interface ApprovalFormField {
  // 控件 ID
  id: string
  // 控件类型
  type: string
  // 控件名称
  name: string
  // 表单值
  value: unknown

  // 下面这些在获取审批实例的时候不会返回
  customId: string
  placeholder: string
  required: boolean
  printable: boolean
  displayCondition: string
  displayCondStatus: boolean
  option: unknown
  ext: unknown
  edited: boolean
  useExternalData: boolean
  key: string
  token: string
  externalUrl: string
}

// 审批表单对象
export interface ApprovalForm {
  fields: ApprovalFormField[]
}

// 审批定义对象
export interface ApprovalDefinition {
  definition_name: string
  nodes: ApprovalNode[]
  form: ApprovalForm
}

// 审批中的评论对象
export interface ApprovalComment {
  // 评论 ID
  id: string
  // 用户ID
  employee_id: string
  //   评论详情
  content: string
  // 创建时间
  create_time: number
}

// 审批任务对象
export interface ApprovalTask {
  // 任务 ID
  id: string
  // 用户ID
  employee_id: string
  // 任务类型
  type: ApprovalTaskTypeStatus
  // 任务状态
  status: ApprovalTaskStatus
  // 创建时间
  start_time: number
  // 结束时间
  end_time: number
}

export interface ApprovalTaskV2 {
  // 任务 ID
  id: string
  // 用户ID
  employee_id: string
  // 任务类型
  type: ApprovalTaskTypeStatusV2
  // 任务状态
  status: ApprovalTaskStatusV2
  //     创建时间
  start_time: number
  //   结束时间
  end_time: number
}

// 审批实例对象
export interface ApprovalInstance {
  // 审批定义唯一标识
  definition_code: string
  // 审批定义名称
  start_time: number
  // 创建时间（毫秒）
  end_time: number
  //   用户ID
  employee_id: string
  // 部门ID
  department_id: string
  // 实例状态
  status: ApprovalInstanceStatus
  // 任务列表
  task_list: ApprovalTask[]
  // 评论列表
  comment_list: ApprovalComment[]
  // 表单列表
  form_list: ApprovalFormField[]
}

// 审批实例对象
export interface ApprovalInstanceV2 {
  // 审批定义唯一标识
  approval_code: string
  // 审批定义名称
  approval_name: string
  // 创建时间（毫秒）
  start_time: number
  // 结束时间（毫秒）（未结束为0）
  end_time: number
  //   用户ID
  user_id: string
  //   部门ID
  department_id: string
  // 实例状态
  status: ApprovalInstanceStatusV2
  // 任务列表
  task_list: ApprovalTaskV2[]
  //   评论列表
  comment_list: ApprovalComment[]
  // 表单列表
  form_list: ApprovalFormField[]
}
