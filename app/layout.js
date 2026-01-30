export const metadata = {
  title: '玉米图片搜索',
  description: '搜索网络上的玉米图片',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <body style={{ margin: 0, padding: 0, fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
