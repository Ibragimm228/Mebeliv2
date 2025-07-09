"use client"

import { useState } from "react"
import Image from "next/image"
import { ImageModal } from "@/components/ui/image-modal"


const furnitureCategories = {
  all: {
    title: "Мебель на заказ в Твери",
    description: "Полный каталог наших работ: кухни, гостиные, спальни, шкафы-купе и другая мебель на заказ. Современный дизайн и качественные материалы. Рассрочка 0%.",
    images: [
      { id: 1, image: "/images/kitchen5.jpg", category: "living" },
      { id: 2, image: "/images/kitchen3.jpg", category: "kitchen" },
      { id: 3, image: "/images/kitchen4.jpg", category: "kitchen" },
      { id: 4, image: "/images/kitchen6.jpg", category: "kitchen" },
      { id: 5, image: "/images/living.jpg", category: "bedroom" },
      { id: 6, image: "/images/living1.jpg", category: "bedroom" },
      { id: 7, image: "/images/living2.jpg", category: "bedroom" },
      { id: 8, image: "/images/sharf2.jpg", category: "closets" },
      { id: 9, image: "/images/kitchen.jpg", category: "kitchen" },
      { id: 10, image: "/images/kitchen1.jpg", category: "kitchen" },
      { id: 11, image: "/images/kitchen2.jpg", category: "kitchen" },
      { id: 12, image: "/images/sharf.jpg", category: "closets" },
    ]
  },
  living: {
    title: "Мебель для гостиной на заказ в Твери",
    description: "Изготовление мебели для гостиной любой сложности: стенки, горки, диваны, журнальные столики. Современный дизайн и качественные материалы. Рассрочка 0%.",
    images: [
      { id: 1, image: "/images/kitchen5.jpg" },
      { id: 2, image: "/images/kitchen6.jpg" },
    ]
  },
  kitchen: {
    title: "Кухни на заказ в Твери",
    description: "Современные кухонные гарнитуры по индивидуальным размерам. Качественная фурнитура, столешницы из искусственного камня, встроенная техника.",
    images: [
      { id: 9, image: "/images/kitchen.jpg" },
      { id: 10, image: "/images/kitchen1.jpg" },
      { id: 11, image: "/images/kitchen2.jpg" },
      { id: 12, image: "/images/kitchen3.jpg" },
      { id: 13, image: "/images/kitchen4.jpg" },
      { id: 14, image: "/images/kitchen6.jpg" },
      { id: 15, image: "/images/kitchen7.jpg" },
      { id: 16, image: "/images/kitchen8.jpg" },
    ]
  },
  bedroom: {
    title: "Спальни на заказ в Твери",
    description: "Уютные спальные гарнитуры: кровати, шкафы-купе, комоды, туалетные столики. Создаем комфортное пространство для отдыха.",
    images: [
      { id: 15, image: "/images/living.jpg" },
      { id: 16, image: "/images/living1.jpg" },
      { id: 17, image: "/images/living2.jpg" },
      { id: 18, image: "/images/living3.jpg" },
    ]
  },
  closets: {
    title: "Шкафы-купе на заказ в Твери",
    description: "Встроенные и корпусные шкафы-купе любых размеров. Зеркальные, стеклянные двери, внутреннее наполнение под ваши потребности.",
    images: [
      { id: 19, image: "/images/sharf.jpg" },
      { id: 20, image: "/images/sharf1.jpg" },
      { id: 21, image: "/images/sharf2.jpg" },
      { id: 22, image: "/images/sharf3.jpg" },
      { id: 23, image: "/images/sharf4.jpg" },
      { id: 24, image: "/images/sharf5.jpg" },
      { id: 25, image: "/images/sharf6.jpg" },
      { id: 26, image: "/images/sharf7.jpg" },
    ]
  }
}

type CategoryKey = keyof typeof furnitureCategories

const categoryButtons = [
  { key: 'all' as CategoryKey, label: 'Все' },
  { key: 'living' as CategoryKey, label: 'Гостиная' },
  { key: 'kitchen' as CategoryKey, label: 'Кухни' },
  { key: 'bedroom' as CategoryKey, label: 'Спальни' },
  { key: 'closets' as CategoryKey, label: 'Шкафы-купе' },
]

export default function OurWorks() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('all')

  const currentCategory = furnitureCategories[activeCategory]
  const images = currentCategory.images

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prevIndex) => 
        prevIndex !== null ? (prevIndex + 1) % images.length : null
      )
    }
  }

  const handlePrev = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prevIndex) =>
        prevIndex !== null ? (prevIndex - 1 + images.length) % images.length : null
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
    <>
      <section id="featured-products" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container px-4 w-full max-w-7xl mx-auto">
          <div className="max-w-7xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row items-start gap-7 mb-8">
              <div className="w-full md:w-[320px] lg:w-[350px] shrink-0 flex flex-col justify-start">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white leading-tight text-left">
                  {currentCategory.title}
                </h2>
                <p className="text-lg md:text-xl text-gray-500 text-left">
                  {currentCategory.description}
                </p>
              </div>
              <div className="flex-1 flex justify-center md:justify-end items-start">
                <div className="relative w-full aspect-[4/3] min-h-[280px] md:min-h-[360px] lg:min-h-[420px] max-h-[460px] rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={currentCategory.images[0].image}
                    alt=""
                    className="object-cover w-full h-full rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
            {categoryButtons.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-medium text-sm md:text-base transition-all duration-300 hover:scale-105 ${
                  activeCategory === category.key
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-md'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
            {currentCategory.images.map((work, index) => (
              <div
                key={work.id}
                className="group relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => openModal(index)}
              >
                <Image
                  src={work.image}
                  alt={`${currentCategory.title} ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg 
                      className="w-8 h-8 text-white" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <svg className="w-10 h-10 text-primary mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="12" x2="12" y2="7" />
                <line x1="12" y1="12" x2="16" y2="12" />
              </svg>
              <span className="font-bold text-xl text-gray-900 dark:text-white">10 лет</span>
              <span className="text-sm text-gray-500">на рынке</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <svg className="w-10 h-10 text-primary mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"/>
                <path d="M8 12l2 2 4-4"/>
              </svg>
              <span className="font-bold text-xl text-gray-900 dark:text-white">1000+</span>
              <span className="text-sm text-gray-500">выполненных заказов</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <svg className="w-10 h-10 text-primary mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="3" y="7" width="18" height="13" rx="2"/>
                <path d="M16 3v4M8 3v4"/>
              </svg>
              <span className="font-bold text-xl text-gray-900 dark:text-white">Производство</span>
              <span className="text-sm text-gray-500">в Твери</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <svg className="w-10 h-10 text-primary mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 8v4l3 3"/>
                <circle cx="12" cy="12" r="10"/>
              </svg>
              <span className="font-bold text-xl text-gray-900 dark:text-white">2 года</span>
              <span className="text-sm text-gray-500">гарантия</span>
            </div>
          </div>
        </div>
      </section>

      {selectedImageIndex !== null && (
        <ImageModal
          isOpen={selectedImageIndex !== null}
          onClose={closeModal}
          src={images[selectedImageIndex].image}
          alt={`Увеличенное изображение ${selectedImageIndex + 1}`}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </>
  )
}