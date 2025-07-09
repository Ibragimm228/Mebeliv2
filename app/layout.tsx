import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"
import { Toaster } from "sonner"

const inter = Inter({ subsets: ["latin", "cyrillic"] })

export const metadata: Metadata = {
  title: "Мебель на заказ в Твери | Кухни, шкафы-купе, спальни | Мебельщик",
  description: "Производство и продажа мебели на заказ в Твери: кухонные гарнитуры, шкафы-купе, спальни, гостиные. ✓ Бесплатный замер ✓ Рассрочка ✓ Гарантия качества ☎ +7 (915) 722-00-75",
  keywords: "мебель Тверь, кухни Тверь, шкафы-купе Тверь, спальни Тверь, мебель на заказ Тверь, кухни на заказ Тверь, мебельная фабрика Тверь, мебельщик Тверь",
  authors: [{ name: "Мебельщик" }],
  creator: "Мебельщик",
  publisher: "Мебельщик",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  verification: {
    google: "verification_token",
    yandex: "verification_token",
  },
  alternates: {
    canonical: "https://mebelhik.ru",
  },
  openGraph: {
    title: "Мебельщик Тверь - Качественная мебель на заказ в Твери и Тверской области",
    description:
      "Широкий выбор мебели для дома и офиса в Твери. Собственное производство, доставка по Твери и Тверской области.",
    url: "https://mebelshik-tver.ru",
    siteName: "Мебельщик Тверь",
    locale: "ru_RU",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/logo.svg",
        type: "image/svg+xml",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      }
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      }
    ],
  },
  manifest: "/site.webmanifest",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <meta name="yandex-verification" content="verification_code" />
        <meta property="business:contact_data:street_address" content="Авангардная ул., 25А" />
        <meta property="business:contact_data:locality" content="Тверь" />
        <meta property="business:contact_data:region" content="Тверская область" />
        <meta property="business:contact_data:postal_code" content="170000" />
        <meta property="business:contact_data:country_name" content="Россия" />
        <meta property="business:contact_data:email" content="mebelshik69@mail.ru" />
        <meta property="business:contact_data:phone_number" content="+7 (915) 722-00-75" />
        <meta property="business:contact_data:website" content="https://mebelhik.ru" />
        <link rel="mask-icon" href="/logo.svg" color="#000000" />
        <link rel="canonical" href="https://mebelhik.ru" />
        <meta name="geo.region" content="RU-TVE" />
        <meta name="geo.placename" content="Тверь" />
        <meta name="geo.position" content="56.859611;35.911896" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="ICBM" content="56.859611, 35.911896" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Toaster />

        Яндекс.Метрика
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(101725436, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true,
                  webvisor:true
            });
          `}
        </Script>
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/101725436" style={{ position: "absolute", left: "-9999px" }} alt="" />
          </div>
        </noscript>
      </body>
    </html>
  )
}
