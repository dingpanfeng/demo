/*
 * @Author: 丁攀峰 allen@leanktech.com
 * @Date: 2023-08-31 14:59:23
 * @LastEditors: 丁攀峰 allen@leanktech.com
 * @LastEditTime: 2023-08-31 14:59:34
 * @FilePath: /demo/functions/apps/[[catchall]].js
 */
export function onRequest(context) {
    return new Response(JSON.stringify(context.params.catchall))
  }