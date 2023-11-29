import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <script src="https://kit.fontawesome.com/b415374d50.js"></script>
      <body>{children}</body>
    </html>
  )
}
