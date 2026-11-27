import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // 送信完了ページは検索結果に出さない
      disallow: ['/contact/thanks', '/serviceguide/thanks'],
    },
    sitemap: 'https://numphoto.com/sitemap.xml',
  }
}
