"use client"

import Image from "next/image"
import { useState } from "react"
import { ImageModal } from "@/components/ui/image-modal"

const officeWorks = [
  { id: 1, image: "/images/office.jpg" },
  { id: 2, image: "/images/office1.jpg" },
  { id: 3, image: "/images/office2.jpg" },
  { id: 4, image: "/images/office3.jpg" },
]

export default function OfficeWorks() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prevIndex) => 
        prevIndex !== null ? (prevIndex + 1) % officeWorks.length : null
      )
    }
  }

  const handlePrev = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prevIndex) =>
        prevIndex !== null ? (prevIndex - 1 + officeWorks.length) % officeWorks.length : null
      )
    }
  }

  const openModal = (index: number) => {
    setSelectedImageIndex(index)
  }

  const closeModal = () => {
    setSelectedImageIndex(null)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container px-4 w-full max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
          <div className="w-full md:w-[320px] lg:w-[370px] shrink-0 flex flex-col justify-start">
            <h2 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white leading-tight text-left">
              Офисная мебель на<br />заказ в Твери
            </h2>
            <p className="text-xl text-gray-500 text-left">
              Изготовление офисной мебели: рабочие места, кабинеты руководителя, переговорные, ресепшн. Эргономичные решения для вашего бизнеса. Рассрочка 0%.
            </p>
          </div>
          <div className="flex-1 flex justify-center md:justify-end items-start">
            <div className="relative w-full aspect-[4/3] min-h-[260px] md:min-h-[340px] lg:min-h-[400px] max-h-[440px] rounded-xl overflow-hidden shadow-lg">
              <img
                src={officeWorks[0].image}
                alt=""
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {officeWorks.map((work, index) => (
            <div
              key={work.id}
              className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => openModal(index)}
            >
              <Image
                src={work.image}
                alt=" Купить мебель в Твери | Кухни от 45000 ₽ | Корпусная мебель | Мебельщик | мебель | Мебель | Гостинная | Кухня | Спальни | Шкафы | Купе | Мебель для дома "
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
        {selectedImageIndex !== null && (
          <ImageModal
            isOpen={selectedImageIndex !== null}
            onClose={closeModal}
            src={officeWorks[selectedImageIndex].image}
            alt={`Офисная мебель ${selectedImageIndex + 1}`}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        )}
      </div>
    </section>
  )
} 