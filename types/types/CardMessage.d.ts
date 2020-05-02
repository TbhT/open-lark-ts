/**
 * 内容模块
 */
interface BaseContentModule {
    tag: 'div';
    extra?: Element;
}
interface TextContentModule extends BaseContentModule {
    text: TextObject;
}
interface FieldContentModule extends BaseContentModule {
    field: FieldObject;
}
export declare type ContentModule = TextContentModule | FieldContentModule;
/**
 * 分割线模块
 */
export interface DividerModule {
    tag: 'hr';
}
/**
 * 图片模块
 */
export interface ImageModule {
    tag: 'img';
    img_key: string;
    alt: TextObject;
    title?: TextObject;
}
/**
 * 交互模块
 */
export interface InteractiveModule {
    tag: 'action';
    actions: Element[];
    layout?: 'bisected' | 'trisection' | 'flow';
}
/**
 * 备注模块
 */
export interface NoteModule {
    tag: 'note';
    elements: (TextObject | ImageElement)[];
}
/**
 * 所有的模块
 */
export declare type AllModules = ContentModule | DividerModule | ImageModule | InteractiveModule;
/**
 * text 对象
 */
interface BaseTextObject {
    content: string;
}
interface PlainTextObject extends BaseTextObject {
    tag: 'plain_text';
    lines?: number;
}
interface I18NPlainTextObject {
    tag: 'plain_text';
    i18n: {
        zh_cn: string;
        en_us: string;
        ja_jp: string;
    };
    lines?: number;
}
interface LarkMdObject extends BaseTextObject {
    tag: 'lark_md';
}
export declare type TextObject = PlainTextObject | LarkMdObject;
/**
 * field 对象
 */
export interface FieldObject {
    is_short: boolean;
    text: TextObject;
}
/**
 * url 对象
 * todo: 互斥类型
 */
export interface UrlObject {
    url: string;
    android_url: string;
    ios_url: string;
    pc_url: string;
}
/**
 * option 对象
 */
interface BaseOptionObject {
    text?: TextObject;
    value: string;
}
interface OverflowOptionObject extends BaseOptionObject {
    url?: string;
    multi_url?: UrlObject;
}
export declare type OptionObject = BaseOptionObject | OverflowOptionObject;
/**
 * confirm 对象
 */
export interface ConfirmObject {
    title: PlainTextObject;
    text: PlainTextObject;
}
/**
 * image 元素
 */
export interface ImageElement {
    tag: 'img';
    img_key: string;
    alt: TextObject;
}
/**
 * button 元素
 * ```javascript
 *   {
     "tag":"button",
     "text":{
         "tag":"lark_md",
         "content":"default style"
     },
     "type":"default",
     "value":{
         "key":"value"
     }
 }
 * ```
 */
export interface ButtonElement {
    tag: 'button';
    text: TextObject;
    url?: string;
    multi_url?: UrlObject;
    type?: 'default' | 'primary' | 'danger';
    value?: Record<string, string>;
    confirm?: ConfirmObject;
}
/**
 * selectMenu 元素
 */
export interface SelectMenuElement {
    tag: 'select_static' | 'select_person';
    placeholder?: TextObject;
    initial_option?: string;
    options?: OptionObject[];
    value?: Record<string, string>;
    confirm?: ConfirmObject;
}
/**
 * overflow 元素
 */
export interface OverflowElement {
    tag: 'overflow';
    options: OptionObject[];
    value?: Record<string, string>;
    confirm?: ConfirmObject;
}
/**
 * date picker 元素
 */
export interface DatePickerElement {
    tag: 'date_picker' | 'picker_time ' | 'picker_datetime';
    initial_date?: string;
    initial_time?: string;
    initial_datetime?: string;
    placeholder?: string;
    value?: Record<string, string>;
    confirm?: ConfirmObject;
}
export declare type Element = ImageElement | OverflowElement | SelectMenuElement | ButtonElement | DatePickerElement;
export interface CardHeader {
    title: I18NPlainTextObject | PlainTextObject;
}
declare type TemplateColor = 'blue' | 'wathet' | 'turquoise' | 'green' | 'yellow' | 'orange' | 'red' | 'carmine' | 'violet' | 'purple' | 'indigo' | 'grey';
export interface CardHeaderInner extends CardHeader {
    template?: TemplateColor;
}
export interface CardContentElements {
    elements: AllModules[];
}
export interface I18NCardContentElements {
    i18n_elements: {
        en_us: AllModules[];
        zh_cn: AllModules[];
        ja_jp: AllModules[];
    };
}
/**
 * 卡片的结构体
 */
export interface CardMessage {
    config?: {
        wide_screen_mode: boolean;
    };
    card_link?: CardLink;
    header?: CardHeader | CardHeaderInner;
    elements?: CardContentElements | I18NCardContentElements;
}
export interface CardLink {
    url: string;
    pc_url?: string;
    ios_url?: string;
    android_url?: string;
}
export {};
