/*
 * @Author: 丁攀峰 allen@leanktech.com
 * @Date: 2023-08-22 10:24:50
 * @LastEditors: 丁攀峰 allen@leanktech.com
 * @LastEditTime: 2023-08-31 15:11:50
 * @FilePath: /demo/functions/apps/[id].js
 */
// https://developers.cloudflare.com/pages/platform/functions/routing/
export async function onRequest(context) {
    let id = context.params.id
    const kv_res = await context.env.KV.get(id)
    // const sql = 'SELECT * from sloppyware_app_info'
    const sql1 = 'SELECT * FROM sloppyware_app_info WHERE app_package = ?1'
    const d1_res = await context.env.DB.prepare(sql1).bind(id).all()
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
                <h1>D1</h1>
                <pre>${JSON.stringify(json, null, 2)}</pre>
            </body>
            </html>
`
    return new Response(html, {
        headers: {
            'content-type': 'text/html;charset=UTF-8'
        }
    })
}
