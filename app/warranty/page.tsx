import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Гарантия на мебель | 2 года гарантии | Мебельщик Тверь",
  description: "✅ Гарантия 2 года на всю мебель от производителя ⭐ Бесплатное сервисное обслуживание ⚡ Быстрое устранение неисправностей 🛠️ Качественные комплектующие ☎ +7 (915) 722-00-75",
  keywords: "гарантия на мебель Тверь, гарантийное обслуживание мебели Тверь, ремонт мебели Тверь, сервисное обслуживание мебели Тверь, гарантийный ремонт Тверь",
  openGraph: {
    title: "Гарантия на мебель 2 года | Мебельщик Тверь",
    description: "Гарантия 2 года на всю мебель от производителя. Бесплатное сервисное обслуживание. Быстрое устранение неисправностей.",
    url: "https://mebelhik.ru/warranty",
    type: "website",
  },
}

export default function WarrantyPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Гарантия на мебель</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Условия гарантии</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Гарантийный срок 2 года на всю мебель</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Бесплатный выезд мастера при гарантийном случае</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Ремонт или замена деталей в течение 5-7 рабочих дней</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Гарантия на установленную фурнитуру и механизмы</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Что входит в гарантию</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Целостность конструкции и материалов</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Работа фурнитуры и механизмов</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Качество сборки и установки</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Отсутствие производственных дефектов</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-12">
          <h2 className="text-2xl font-semibold mb-4">Как получить гарантийное обслуживание</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-2">📞</div>
              <h3 className="font-semibold mb-2">1. Свяжитесь с нами</h3>
              <p>Позвоните по телефону +7 (915) 722-00-75 или оставьте заявку на сайте</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">👨‍🔧</div>
              <h3 className="font-semibold mb-2">2. Визит мастера</h3>
              <p>Наш специалист приедет и осмотрит мебель</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🛠️</div>
              <h3 className="font-semibold mb-2">3. Ремонт</h3>
              <p>Выполним ремонт или замену деталей в кратчайшие сроки</p>
            </div>
          </div>
        </div>
      </div>

      <Script id="warranty-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WarrantyPromise",
            "name": "Гарантия на мебель от Мебельщик Тверь",
            "description": "2 года гарантии на всю мебель с бесплатным сервисным обслуживанием",
            "durationOfWarranty": "P2Y",
            "warrantyScope": "Гарантия распространяется на целостность конструкции, работу фурнитуры и механизмов, качество сборки и установки",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Мебельщик Тверь",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Авангардная ул., 25А",
                "addressLocality": "Тверь",
                "addressRegion": "Тверская область",
                "postalCode": "170100",
                "addressCountry": "RU"
              },
              "telephone": "+7 (915) 722-00-75",
              "email": "mebelshik69@mail.ru"
            }
          }
        `}
      </Script>
      <ContactForm />
      <Footer />
    </main>
  )
}
