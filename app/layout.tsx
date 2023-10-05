export const metadata = {
  title: 'Nutri Care',
  description:
    'Tu nutricionista en linea, nutricionista online, nutricionista quito, nutricionista latinoamerica, nutricionista ecuador',
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
