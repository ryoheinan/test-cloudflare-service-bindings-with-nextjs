import type { NextRequest } from 'next/server'
import type { BodyInit } from '@cloudflare/workers-types'

export const runtime = 'edge'

export async function GET(req: NextRequest) {
  if (process.env.INTERNAL_TOKEN) {
    try {
      const res = await process.env.SERVICE.fetch(req.url, {
        method: 'GET',
        headers: {
          'x-custom-token': process.env.INTERNAL_TOKEN,
        },
        body: req.body as BodyInit,
        redirect: req.redirect,
      })
      const data = await res.json()
      return Response.json({ data })
    } catch (e) {
      console.log(e)
      return new Response(JSON.stringify({ msg: 'Something went go wrong' }))
    }
  }
  return new Response(JSON.stringify({ msg: 'Something went go wrong' }))
}
