export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

import "../styles/tailwind.css";
import "../styles/slick.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="overflow-y-scroll no-scrollbar">{children}</body>
    </html>
  )
}
