"use client"

import { useEffect } from "react"
import Image from "next/image"
import { MapPin, Phone, Clock, Mail } from "lucide-react"

export default function LocalMap() {
  useEffect(() => {
    // Загружаем API Яндекс Карт
    const script = document.createElement("script")
    script.src = "https://api-maps.yandex.ru/2.1/?apikey=ваш_API_ключ&lang=ru_RU"
    script.async = true
    script.onload = () => {
      // @ts-ignore
      window.ymaps.ready(() => {
        // @ts-ignore
        const map = new window.ymaps.Map("map", {
          center: [56.833210, 35.875532], // Координаты для Авангардная ул., 25А, Тверь
          zoom: 16,
        })

        // @ts-ignore
        const placemark = new window.ymaps.Placemark(
          [56.833210, 35.875532],
          {
            balloonContent: "Мебельщик Тверь",
            hintContent: "Авангардная ул., 25А, Тверь",
          },
          {
            preset: "islands#redFurnitureIcon",
          }
        )

        map.geoObjects.add(placemark)
        map.behaviors.disable("scrollZoom")
      })
    }
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Наш адрес в Твери</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Приглашаем вас посетить наш выставочный зал в Твери
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="text-lg font-semibold">Адрес</h3>
                <p className="text-gray-500 dark:text-gray-400">г. Тверь, Авангардная ул., 25А</p>
                <p className="text-gray-500 dark:text-gray-400">Заволжский район</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="text-lg font-semibold">Телефоны</h3>
                <p className="text-gray-500 dark:text-gray-400">+7 (915) 722-00-75 (отдел продаж)</p>
                <p className="text-gray-500 dark:text-gray-400">+7 (903) 630-29-09 (служба доставки)</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="text-lg font-semibold">Режим работы</h3>
                <p className="text-gray-500 dark:text-gray-400">Пн-Пт: 9:00-20:00</p>
                <p className="text-gray-500 dark:text-gray-400">Сб-Вс: 10:00-18:00</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="text-gray-500 dark:text-gray-400">mebelshik69@mail.ru</p>
              </div>
            </div>
          </div>

          <div id="map" className="h-[400px] rounded-lg overflow-hidden" />
        </div>
      </div>
    </section>
  )
}
