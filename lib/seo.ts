export const seo = {
  title: 'mrxirzzz | 开发者、学生党、细节控、技术发烧友',
  description:
    '一名在读研究生，热爱Web、Linux、AI等相关技术。Sometimes ever, sometimes never.',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://blog.mrxir.cloud'
      : 'http://localhost:3000'
  ),
} as const
