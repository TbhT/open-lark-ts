import { ImageColor } from './Enum'

export interface I18nText {
  text: string
  // 如果设置了，那么国际化中文环境会显示
  zh_ch: string
  // 如果设置了，那么国际化英文环境会显示
  en_us: string
  // 如果设置了，那么国际化日文环境会显示
  ja_jp: string
}

export interface MessageText {
  text: string
  zh_cn: string
  en_us: string
  ja_jp: string
  // 只能在富文本消息中起作用，最大显示行数
  lines: number
  // 只能在富文本消息中起作用，表示为 unescape 解码
  un_escape: boolean
}

// 富文本的at消息
export interface MessageAt {
  // open_id 或者 employee_id
  user_id: string
  // 用户名
  text: string
}

// 富文本的图片消息
export interface MessageImage {
  // 图片的唯一标识，可以通过图片上传接口获得: https://lark-open.bytedance.net/document/ukTMukTMukTM/uEDO04SM4QjLxgDN
  image_key: string
  // 图片的宽
  height: number
  // 图片的高
  width: number
}

export interface MessageLink {
  text: string
  // 默认的链接地址，如果这个没有写，从下面三个取一个
  href: string
  un_escape: boolean

  // 以下配置只在 card 有效
  zh_cn: string
  en_us: string
  ja_jp: string
  // PC 端的链接地址
  pc_href: string
  // iOS 端的链接地址
  ios_href: string
  // Android 端的链接地址
  android_href: string
}

export interface CardURL {
  // 默认的链接地址，如果这个没有写，从下面三个取一个
  href: string
  // PC 端的链接地址
  pc_href: string
  // iOS 端的链接地址
  ios_href: string
  // Android 端的链接地址
  android_href: string
}

export interface CardHeader {
  // 显示的默认的文本内容,如果设置了 i18n 内容，会优先显示 i18n 里面对应的语种内容
  title: string
  zh_ch: string
  en_us: string
  ja_jp: string
  // 标题前图标的颜色。可选范围：[orange, red, yellow, gray, blue, green] 默认为 red
  image_color: ImageColor
  // 指定文本最大显示行数，0 表示不限行数
  lines: number
}

export interface CardButton {
  text: string
  // 发送 post 请求
  method: string
  // 请求或者跳转的地址
  url: string
  // 标题的 i18n
  text_i18n: I18nText
  // 点击按钮以后显示的默认的文本内容，仅在 method 是 post 或 get 时候才有效
  triggered_text: string
  // 为 true 时，请求参数会带上 open_id 或者 employee_id，仅在 method 是 post 时候才有效
  need_user_info: boolean
  // 为 true 时，请求参数会带上 open_message_id，仅在 method 是 post 时候才有效
  need_message_info: boolean
  // 开发者自定义的请求参数，仅在 method 是 post 时候才有效
  parameter: unknown
  // 可包含 pc_url, ios_url, android_url, 仅在 method 是 jump 时候才有效. 如果配置了该字段, 则在相应端上优先使用指定的链接
  open_url: CardURL
  // 配置是否点击成功后，需要将其它按钮隐藏，仅在 method 是 post 或 get 时候才有效
  hide_others: boolean
}

export interface CardAction {
  buttons: CardButton[]
  changeable: boolean
}
