/*
 * @Author: 丁攀峰 allen@leanktech.com
 * @Date: 2023-08-22 10:49:44
 * @LastEditors: 丁攀峰 allen@leanktech.com
 * @LastEditTime: 2023-08-31 15:56:50
 * @FilePath: /demo/_worker.js
 */
// 超级模式,
/* export default {
    async fetch(request, env) {
        const url = new URL(request.url)
        if (url.pathname.startsWith('/api/')) {
            // TODO: Add your custom /api/* logic here.
            return new Response('Ok,_worker.js 超级模式')
        }
        // Otherwise, serve the static assets.
        // env.ASSETS.fetch(request) 来获取静态资源。env.ASSETS 是一个特殊的绑定，用于访问 Cloudflare Pages 项目中的静态资源
        return env.ASSETS.fetch(request)
    }
} */

import ContentHandler from './contentHandler'
import { template } from './underscore'
let json = require('./_routes.json')
export default {
    async fetch(request, env) {
        const url = new URL(request.url)
        const pathname = url.pathname
        // 使用正则表达式匹配
        const regex = /\/apps\/(.*)/
        const match = pathname.match(regex)
        const rewriter = new HTMLRewriter().on('div#dynamic-content', new ContentHandler())
        if (match && match[1]) {
            const kv_res = await env.KV.get(match[1])
            const sql = 'SELECT * from sloppyware_app_info'
            const sql1 = 'SELECT * FROM sloppyware_app_info WHERE app_package = ?1'
            const d1_res = await env.DB.prepare(sql1).bind(match[1]).all()
            // 创建一个包含基础 HTML 结构的新 Response 对象
            const html = `
                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <title>动态内容</title>
                    </head>
                    <body>
                        <div id="dynamic-content"></div>
                        <h1>KV</h1>
                        <div>${kv_res}</div>
                        <h1>D1</h1>
                        <pre>${JSON.stringify(d1_res, null, 2)}</pre>
                        <h1>other</h1>
                        <pre>${template}</pre>
                    </body>
                    </html>
                `
            const compiled = _.template(html);
            const init = {
                headers: { 'content-type': 'text/html;charset=UTF-8' }
            }
            const response = new Response(compiled(), init)

            // 使用 HTMLRewriter 修改 Response 内容
            return rewriter.transform(response)
        } else {
            // Otherwise, serve the static assets.
            const response = await env.ASSETS.fetch(request)
            return rewriter.transform(response)
        }
    }
}
