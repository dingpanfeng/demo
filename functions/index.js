/*
 * @Author: 丁攀峰 allen@leanktech.com
 * @Date: 2023-08-16 22:41:25
 * @LastEditors: 丁攀峰 allen@leanktech.com
 * @LastEditTime: 2023-08-16 22:41:32
 * @FilePath: /demo/functions/index.js
 */
export default function handleRequest(request) {
    return new Response('Hello, world!,fuck啊啊啊啊', {
      headers: { 'content-type': 'text/plain' },
    })
  }