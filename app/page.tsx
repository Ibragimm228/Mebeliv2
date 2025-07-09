import type { Metadata } from "next"
import Script from "next/script"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Categories from "@/components/categories"
import FeaturedProducts from "@/components/featured-products"
import AboutUs from "@/components/about-us"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"
import Testimonials from "@/components/testimonials"
import LocalMap from "@/components/local-map"
import LocalAdvantages from "@/components/local-advantages"

export const metadata: Metadata = {
  title: "Купить мебель в Твери | Кухни от 45000₽ | Корпусная мебель | Мебельщик",
  description: "🏆 Купить мебель в Твери от производителя: ✅ кухни от 45000₽ ✅ шкафы-купе от 30000₽ ✅ корпусная мебель ✅ офисная мебель. 💯 Рассрочка 0% ⭐ 1000+ довольных клиентов 🚛 Доставка и установка ☎ +7 (915) 722-00-75",
  keywords: "купить мебель в твери, купить кухни в твери, корпусная мебель тверь, офисная мебель тверь, мебель на заказ тверь, кухни на заказ тверь, шкафы купе тверь, мебельная фабрика тверь",
  openGraph: {
    title: "Купить мебель в Твери | Кухни, корпусная мебель от производителя",
    description: "Производство и продажа мебели в Твери: кухни от 45000₽, шкафы-купе, корпусная мебель, офисная мебель. Бесплатный замер, рассрочка 0%, гарантия 2 года.",
    url: "https://mebelhik.ru",
    siteName: "Мебельщик Тверь - Купить мебель от производителя",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "https://mebelhik.ru/og-image.png",
        width: 1200,
        height: 630,
        alt: "Купить мебель в Твери от производителя",
      }
    ],
  },
}

export default function Home() {
  return (
    <>
      <Script id="schema-markup" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Мебельщик Тверь",
            "image": "https://mebelhik.ru/logo.svg",
            "description": "Производство и продажа мебели в Твери: кухонные гарнитуры от 45000₽, шкафы-купе от 30000₽, корпусная мебель, офисная мебель. Работаем с 2010 года. Более 1000 выполненных заказов.",
            "priceRange": "₽₽",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Авангардная ул., 25А",
              "addressLocality": "Тверь",
              "addressRegion": "Тверская область",
              "postalCode": "170100",
              "addressCountry": "RU"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 56.859611,
              "longitude": 35.911896
            },
            "url": "https://mebelhik.ru",
            "telephone": ["+7-915-722-00-75", "+7-903-630-29-09"],
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "20:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Saturday", "Sunday"],
                "opens": "10:00",
                "closes": "18:00"
              }
            ],
            "paymentAccepted": ["cash", "credit card"],
            "currenciesAccepted": "RUB",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "127"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Купить мебель в Твери",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Кухонные гарнитуры",
                    "description": "Купить кухни на заказ в Твери",
                    "priceRange": "от 45000 RUB"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Корпусная мебель",
                    "description": "Корпусная мебель на заказ в Твери",
                    "priceRange": "от 30000 RUB"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Офисная мебель",
                    "description": "Офисная мебель на заказ в Твери",
                    "priceRange": "от 25000 RUB"
                  }
                }
              ]
            }
          }
        `}
      </Script>
      <main className="min-h-screen">
        <Header />
        <Hero />
        <LocalAdvantages />
        <Categories />
        <FeaturedProducts />
        <AboutUs />
        <Testimonials />
        <LocalMap />
        <ContactForm />
        <Footer />
      </main>
    </>
  )
}
