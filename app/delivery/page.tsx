import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Доставка мебели в Твери | Бесплатная доставка | Мебельщик",
  description: "🚛 Бесплатная доставка мебели по Твери ✅ Подъем на этаж ✅ Сборка и установка ⚡ Доставка в день заказа 📦 Бережная упаковка ☎ +7 (915) 722-00-75",
  keywords: "доставка мебели Тверь, сборка мебели Тверь, установка мебели Тверь, подъем мебели Тверь, бесплатная доставка мебели Тверь",
  openGraph: {
    title: "Доставка мебели в Твери | Мебельщик",
    description: "Бесплатная доставка мебели по Твери. Профессиональная сборка и установка. Подъем на этаж.",
    url: "https://mebelhik.ru/delivery",
    type: "website",
  },
}

export default function DeliveryPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Доставка и сборка мебели</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Условия доставки</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Бесплатная доставка по Твери</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Доставка в день заказа или в удобное для вас время</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Подъем на этаж включен в стоимость</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Бережная упаковка и транспортировка</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Сборка и установка</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Профессиональная сборка мебели</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Установка и настройка фурнитуры</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Вывоз упаковки после сборки</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Проверка качества работы</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-12">
          <h2 className="text-2xl font-semibold mb-4">Зоны доставки</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-2">🏠</div>
              <h3 className="font-semibold mb-2">Тверь</h3>
              <p>Бесплатная доставка в день заказа</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🏘️</div>
              <h3 className="font-semibold mb-2">Пригород</h3>
              <p>Доставка в радиусе 30 км - 500₽</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🚛</div>
              <h3 className="font-semibold mb-2">Область</h3>
              <p>Стоимость рассчитывается индивидуально</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">График доставки</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Рабочие дни</h3>
              <p>Понедельник - Пятница: 9:00 - 20:00</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Выходные</h3>
              <p>Суббота - Воскресенье: 10:00 - 18:00</p>
            </div>
          </div>
        </div>
      </div>

      <Script id="delivery-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "DeliveryService",
            "name": "Доставка мебели от Мебельщик Тверь",
            "description": "Бесплатная доставка мебели по Твери с подъемом на этаж и сборкой",
            "areaServed": {
              "@type": "City",
              "name": "Тверь"
            },
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
            },
            "hoursAvailable": [
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
            ]
          }
        `}
      </Script>
      <ContactForm />
      <Footer />
    </main>
  )
}
