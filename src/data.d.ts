export interface Ad {
    id?: number;
    title?: string;
    link?: string;
    pic?: string;
    readme?: string;
    order_id?: number;
    create_time?: string;
    update_time?: string;
    classid?: number;
    status_id?: number;
}

export interface ArticleClass {
    classid?: number;
    classname?: string;
    parentid?: number;
    classcode?: string;
    readme?: string;
    template_list?: string;
    template_view?: string;
    is_show?: number;
    class_photo?: string;
    class_keyword?: string;
    class_description?: string;
}

export interface Blocker {
    id?: number;
    create_time?: string;
    update_time?: string;
    blockertype?: string;
    blockername?: string;
    blockerid?: string;
    blockercontent?: string;
    blockerdesc?: string;

}

export interface DiyClass {
    classid?: number;
    parentid: number;
    classcode?: string;
    classname?: string;
    readme?: string;
    class_photo?: string;
    class_keyword?: string;
    class_description?: string;
    is_show?: number;
}

export interface Diy {
    id?: number;
    template?: string;
    title?: string;
    keywords?: string;
    content?: string;
    create_time: string;
    update_time?: string;
    is_footer?: number;
    classid?: number;
    parentid?: number;
    description?: string;
}

export interface Ext {
    id?: number;
    is_choice?: number;
    is_use_img?: number;
    create_time?: string;
    name?: string;
    content?: string;
    type_id?: number;
    order_id?: number;
    classid?: number;
    update_time?: string;
}

export interface Friend {
    id?: number;
    class_id?: number;
    link_type?: number;
    is_show?: number;
    create_time?: string;
    name?: string;
    url?: string;
    logo?: string;
    user_id?: number;
    classid?: number;
    update_time?: string;
}

export interface Guest {
    id?: number;
    sex?: number;
    create_time?: string;
    reply_time?: string;
    is_passed?: number;
    is_private?: number;
    name?: string;
    oicq?: string;
    msn?: string;
    icq?: string;
    email?: string;
    images?: string;
    face?: string;
    ip?: string;
    title?: string;
    content?: string;
    reply_content?: string;
    reply_admin?: string;
    mobile?: string;
    type_id?: number;
    homepage?: string;
}

export interface Keywords {
    id?: number;
    keyword?: string;
    readme?: string;
    create_time?: string;
    type_id?: number;
    status_id?: number;
    update_time?: string;
    url?: string;
}

export interface Menu {
    classid?: number;
    parentid?: number;
    classcode?: string;
    classname?: string;
    readme?: string;
    is_show?: number;
    menu_type: number;
    is_system?: number;
    class_photo?: string;
    class_keyword?: string;
    class_description?: string;
    menu_classid?: number;
    link_url?: string;
}

export interface User {
    id?: number;
    sex?: number;
    valid_num?: number;
    question?: string;
    answer?: string;
    email?: string;
    mobile?: string;
    oicq?: string;
    msn?: string;
    icq?: string;
    weixin?: string;
    content?: string;
    photo?: string;
    address?: string;
    alipay?: string;
    balance?: string;
    score?: string;
    wx_openid?: string;
    province?: string;
    city?: string;
    user_name?: string;
    user_pwd?: string;
    nick_name?: string;
    true_name?: string;
    user_level?: number;
    is_lock?: number;
    last_login_time?: string;
    login_times?: string;
    home_page?: string;
    role_ids?: string;
    last_login_ip?: string;
    create_time?: string;
    update_time?: string;
    balance_update_time?: string;
    security_key?: string;
    points?: number;
}
/**
 * 网站配置
 */
export interface Config {
    id?: number;
    mail_object?: string;
    site_url?: string;
    templatedir?: string;
    mailserver?: string;
    sms_username?: string;
    sms_userpwd?: string;
    sms_interface_url?: string;
    sms_manage_url?: string;
    water_type?: number;
    water_img?: string;
    water_text?: string;
    water_text_font?: string;
    water_text_color?: string;
    water_text_size?: number;
    water_pos?: number;
    upload_max_width?: number;
    upload_max_height?: number;
    upload_img_type?: number;
    thum_type?: number;
    thum_width?: number;
    thum_height?: number;
    upload_allow_extend?: string;
    site_title?: string;
    sub_title?: string;
    site_state?: string;
    site_type?: string;
    diy_type?: string;
    site_username?: string;
    siet_email?: string;
    site_copyright?: string;
    site_description?: string;
    site_keywords?: string;
    site_close_text?: string;
    mail_username?: string;
    mail_password?: string;
    mail_domain?: string;
}
/**
 * 文章
 */
export interface Article {
    id?: number;
    is_italic?: number;
    is_url?: number;
    hits?: number;
    is_passed?: number;
    is_ontop?: number;
    is_recommended?: number;
    is_specials?: number;
    user_id?: number;
    title?: string;
    article_keywords?: string;
    keywords?: string;
    description?: string;
    author?: string;
    link_url?: string;
    template?: string;
    default_pic_url?: string;
    file_name?: string;
    property?: string;
    short_content?: string;
    content?: string;
    create_time?: string;
    update_time?: string;
    more_photo?: string;
    read_point?: number;
    tags?: string;
    classid?: number;
    title_color?: string;
    topic_classids?: string;
    copyfrom?: string;
    admin_id?: number;
    user_roleid?: string;
}