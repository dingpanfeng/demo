/*
 * @Author: 丁攀峰 allen@leanktech.com
 * @Date: 2023-08-22 10:49:44
 * @LastEditors: 丁攀峰 allen@leanktech.com
 * @LastEditTime: 2023-08-29 10:55:04
 * @FilePath: /demo/_worker.js
 */
// 超级模式
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

class ContentHandler {
    element(element) {
        element.setInnerContent('这是通过 _worker.js 超级模式动态生成的内容')
    }
}

export default {
    async fetch(request, env) {
        const url = new URL(request.url)
        const rewriter = new HTMLRewriter().on('div#dynamic-content', new ContentHandler())

        if (url.pathname.startsWith('/apps/')) {
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
          </body>
          </html>
        `
            const init = {
                headers: { 'content-type': 'text/html;charset=UTF-8' }
            }
            const response = new Response(html, init)

            // 使用 HTMLRewriter 修改 Response 内容
            return rewriter.transform(response)
        } else {
            // Otherwise, serve the static assets.
            const response = await env.ASSETS.fetch(request)
            return rewriter.transform(response)
        }
    }
}