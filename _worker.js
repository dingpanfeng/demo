/*
 * @Author: 丁攀峰 allen@leanktech.com
 * @Date: 2023-08-22 10:40:47
 * @LastEditors: 丁攀峰 allen@leanktech.com
 * @LastEditTime: 2023-08-22 10:43:02
 * @FilePath: /demo/_worker.js
 */

export function onRequest(context) {
    return new Response('Hello, world!,我_worker.js高级模式')
}
