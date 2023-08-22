/*
 * @Author: 丁攀峰 allen@leanktech.com
 * @Date: 2023-08-22 10:49:44
 * @LastEditors: 丁攀峰 allen@leanktech.com
 * @LastEditTime: 2023-08-22 10:49:47
 * @FilePath: /demo/_worker.js
 */
// 超级模式
export default {
    async fetch(request, env) {
        const url = new URL(request.url)
        if (url.pathname.startsWith('/api/')) {
            // TODO: Add your custom /api/* logic here.
            return new Response('Ok,_worker.js 超级模式')
        }
        // Otherwise, serve the static assets.
        // Without this, the Worker will error and no assets will be served.
        return env.ASSETS.fetch(request)
    }
}
