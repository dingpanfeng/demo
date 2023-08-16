export default function handleRequest(request) {
  return new Response('Hello, world!', {
    headers: { 'content-type': 'text/plain' },
  })
}