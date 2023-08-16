export default function handleRequest(request) {
    return new Response('Hello, World!', {
      headers: { 'content-type': 'text/plain' },
    });
  }
  