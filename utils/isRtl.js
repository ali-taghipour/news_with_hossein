const RTL_LANG = ['fa', 'ar'];

export default function isRtl(locale) {
    return RTL_LANG.includes(locale);
}
