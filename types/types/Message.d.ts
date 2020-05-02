import { ImageColor } from './Enum';
export interface I18nText {
    text: string;
    zh_ch: string;
    en_us: string;
    ja_jp: string;
}
export interface MessageText {
    text: string;
    zh_cn: string;
    en_us: string;
    ja_jp: string;
    lines: number;
    un_escape: boolean;
}
export interface MessageAt {
    user_id: string;
    text: string;
}
export interface MessageImage {
    image_key: string;
    height: number;
    width: number;
}
export interface MessageLink {
    text: string;
    href: string;
    un_escape: boolean;
    zh_cn: string;
    en_us: string;
    ja_jp: string;
    pc_href: string;
    ios_href: string;
    android_href: string;
}
export interface CardURL {
    href: string;
    pc_href: string;
    ios_href: string;
    android_href: string;
}
export interface CardHeader {
    title: string;
    zh_ch: string;
    en_us: string;
    ja_jp: string;
    image_color: ImageColor;
    lines: number;
}
export interface CardButton {
    text: string;
    method: string;
    url: string;
    text_i18n: I18nText;
    triggered_text: string;
    need_user_info: boolean;
    need_message_info: boolean;
    parameter: unknown;
    open_url: CardURL;
    hide_others: boolean;
}
export interface CardAction {
    buttons: CardButton[];
    changeable: boolean;
}
