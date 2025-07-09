import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"
import Script from "next/script"
import LivingRoomWorks from "@/components/living-room-works"

export const metadata: Metadata = {
  title: "Мебель для гостиной на заказ в Твери | Стенки от 40000₽ | Мебельщик",
  description: "🏠 Мебель для гостиной на заказ в Твери: стенки от 40000₽, диваны от 35000₽, журнальные столики от 15000₽. ✅ Бесплатный дизайн-проект ✅ Рассрочка 0% ✅ Гарантия 2 года ⚡ Доставка по Твери ☎ +7 (915) 722-00-75",
  keywords: "гостиная Тверь, мебель для гостиной Тверь, стенки Тверь, горки Тверь, диваны Тверь, журнальные столики Тверь, тумбы под тв Тверь, мягкая мебель Тверь, модульные стенки Тверь, гостиные под ключ Тверь",
  openGraph: {
    title: "Мебель для гостиной на заказ в Твери | Мебельщик",
    description: "Изготовление мебели для гостиной в Твери: стенки от 40000₽, диваны, журнальные столики. Бесплатный замер и дизайн-проект. Гарантия 2 года.",
    url: "https://mebelhik.ru/living-room",
    type: "website",
  },
}

export default function LivingRoomPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <LivingRoomWorks />
      <Script id="living-room-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Мебель для гостиной на заказ в Твери",
            "description": "Изготовление мебели для гостиной любой сложности: стенки, горки, диваны, журнальные столики. Современный дизайн и качественные материалы.",
            "brand": {
              "@type": "Brand",
              "name": "Мебельщик Тверь"
            },
            "offers": {
              "@type": "AggregateOffer",
              "lowPrice": "15000",
              "highPrice": "120000",
              "priceCurrency": "RUB",
              "offerCount": "30",
              "offers": [
                {
                  "@type": "Offer",
                  "name": "Стенки для гостиной",
                  "price": "40000",
                  "priceCurrency": "RUB",
                  "availability": "https://schema.org/InStock"
                },
                {
                  "@type": "Offer",
                  "name": "Диваны",
                  "price": "35000",
                  "priceCurrency": "RUB",
                  "availability": "https://schema.org/InStock"
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "52"
            }
          }
        `}
      </Script>
      <ContactForm />
      <Footer />
    </main>
  )
}
