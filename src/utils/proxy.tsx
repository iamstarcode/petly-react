
export const getLinkForProxy = (link: string) => {
    const pos = link.lastIndexOf(':')
    const subString = link.substring(pos + 1, link.length)
    return 'https://' + subString

}
