import { ApprovalTaskTypeStatus, ApprovalTaskStatus, ApprovalTaskTypeStatusV2, ApprovalTaskStatusV2, ApprovalInstanceStatus, ApprovalInstanceStatusV2 } from './Enum';
export interface ApprovalNode {
    name: string;
    need_approver: boolean;
    node_id: string;
    node_type: number;
}
export interface ApprovalFormField {
    id: string;
    type: string;
    name: string;
    value: unknown;
    customId: string;
    placeholder: string;
    required: boolean;
    printable: boolean;
    displayCondition: string;
    displayCondStatus: boolean;
    option: unknown;
    ext: unknown;
    edited: boolean;
    useExternalData: boolean;
    key: string;
    token: string;
    externalUrl: string;
}
export interface ApprovalForm {
    fields: ApprovalFormField[];
}
export interface ApprovalDefinition {
    definition_name: string;
    nodes: ApprovalNode[];
    form: ApprovalForm;
}
export interface ApprovalComment {
    id: string;
    employee_id: string;
    content: string;
    create_time: number;
}
export interface ApprovalTask {
    id: string;
    employee_id: string;
    type: ApprovalTaskTypeStatus;
    status: ApprovalTaskStatus;
    start_time: number;
    end_time: number;
}
export interface ApprovalTaskV2 {
    id: string;
    employee_id: string;
    type: ApprovalTaskTypeStatusV2;
    status: ApprovalTaskStatusV2;
    start_time: number;
    end_time: number;
}
export interface ApprovalInstance {
    definition_code: string;
    start_time: number;
    end_time: number;
    employee_id: string;
    department_id: string;
    status: ApprovalInstanceStatus;
    task_list: ApprovalTask[];
    comment_list: ApprovalComment[];
    form_list: ApprovalFormField[];
}
export interface ApprovalInstanceV2 {
    approval_code: string;
    approval_name: string;
    start_time: number;
    end_time: number;
    user_id: string;
    department_id: string;
    status: ApprovalInstanceStatusV2;
    task_list: ApprovalTaskV2[];
    comment_list: ApprovalComment[];
    form_list: ApprovalFormField[];
}
