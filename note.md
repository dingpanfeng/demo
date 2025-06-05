<!--
 * @Author: 丁攀峰 dingpanfeng@ronsafe.cn
 * @Date: 2023-12-10 22:03:11
 * @LastEditors: 丁攀峰 dingpanfeng@ronsafe.cn
 * @LastEditTime: 2025-06-05 16:05:47
 * @FilePath: /demo/note.md
-->
环境变量
开发 Worker 或 Pages 函数时，.dev.vars在项目的根目录中创建一个文件来定义运行wrangler dev或时将使用的变量wrangler pages dev，而不是在 和[vars]中使用其他环境wrangler.toml。这适用于本地和远程开发模式。

该文件的格式应类似于dotenv文件，例如KEY=VALUE.

SECRET_KEY=value

# Top-level configuration
# 部署 Worker至少需要name、main和键。compatibility_date
name = "my-worker"
main = "src/index.js"
compatibility_date = "2022-07-12"

workers_dev = false
route = { pattern = "example.org/*", zone_name = "example.org" }

ip  选修的

本地开发服务器监听的IP地址。默认为localhost.
port  选修的

本地开发服务器侦听的端口。默认为8787.
local_protocol  选修的

本地开发服务器侦听请求的协议。默认为http.
upstream_protocol  选修的

本地开发服务器转发请求的协议。默认为https.
host  选修的

转发请求的主机，默认为第一个routeWorker的主机

[dev]
ip = "192.168.1.1"
port = 8080
local_protocol = "http"

kv_namespaces = [
  { binding = "<MY_NAMESPACE>", id = "<KV_ID>" }
]
# --env wrangler wrangler deploy --env staging

[env.staging]
name = "my-worker-staging"
route = { pattern = "staging.example.org/*", zone_name = "example.org" }
# KV 命名空间 
kv_namespaces = [
  { binding = "<MY_NAMESPACE>", # 必需的 用于引用 KV 命名空间的绑定名称
   id = "<STAGING_KV_ID>" }, # 必需的 KV命名空间的ID
   preview_id = "<STAGING_KV_ID>" } # 选修的 期间使用的KV命名空间的ID wrangler dev
]
# D1数据库绑定
[[d1_databases]]
binding = "PROD_DB" #必需的  用于引用 D1 数据库的绑定名称
database_name = "test-db"  # 必须得 数据库的名称
database_id = "c020574a-5623-407b-be0c-cd192bab9545" # 必须得 数据库ID


环境变量
开发 Worker 或 Pages 函数时，.dev.vars在项目的根目录中创建一个文件来定义运行wrangler dev或时将使用的变量wrangler pages dev，而不是在 和[vars]中使用其他环境wrangler.toml。这适用于本地和远程开发模式。

该文件的格式应类似于dotenv文件，例如KEY=VALUE.


考虑使用Cloudflare Pages来托管静态应用程序，而不是 Workers 站点。
[site]
bucket = "./public"
include = ["upload_dir"]
exclude = ["ignore_dir"]


https://yyhsong.github.io/iDataV/