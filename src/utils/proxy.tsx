
export const getLinkForProxy = (link :string) =>{

    const proxyUrl = 'https://petlly-proxy.herokuapp.com/'
    const pos = link.lastIndexOf('/')
    const subString = link.substring(pos+1, link.length)
    return proxyUrl+subString
}