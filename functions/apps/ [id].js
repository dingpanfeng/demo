/*
 * @Author: 丁攀峰 allen@leanktech.com
 * @Date: 2023-08-22 10:24:50
 * @LastEditors: 丁攀峰 allen@leanktech.com
 * @LastEditTime: 2023-08-22 10:40:17
 * @FilePath: /demo/functions/apps/ [id].js
 */
// https://developers.cloudflare.com/pages/platform/functions/routing/
export function onRequest(context) {
    return new Response(`走到这了嘛[id], ${JSON.stringify(context.params.id)}`)
}
