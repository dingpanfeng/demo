/*
 * @Author: 丁攀峰 allen@leanktech.com
 * @Date: 2023-08-22 10:25:32
 * @LastEditors: 丁攀峰 allen@leanktech.com
 * @LastEditTime: 2023-08-22 10:32:30
 * @FilePath: /demo/functions/apps/[[catchall]].js
 */

export function onRequest(context) {
    return new Response(`走到这了嘛catchall, ${JSON.stringify(context.params.catchall)}`)
}
