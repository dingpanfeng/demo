/*
 * @Author: 丁攀峰 allen@leanktech.com
 * @Date: 2023-08-22 10:28:57
 * @LastEditors: 丁攀峰 allen@leanktech.com
 * @LastEditTime: 2023-08-29 11:00:43
 * @FilePath: /demo/functions/index.js
 */
// 这个目录用于存放 Serverless 函数，这些函数通常用于处理特定的 API 请求
export function onRequest(context) {
    return new Response('Hello, world!,我functions，我改写下试试')
}
