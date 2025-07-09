"use client";

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { useState, useEffect } from "react"

const testimonials = [
  {
    id: 1,
    name: "Анна Иванова",
    location: "Тверь, Центральный район",
    rating: 5,
    text: "Заказывала кухонный гарнитур. Очень довольна качеством и сроками изготовления. Доставили вовремя, собрали аккуратно. Рекомендую всем в Твери!",
    image: "/ava.png?height=100&width=100",
    date: "15.03.2023",
  },
  {
    id: 3,
    name: "Елена Смирнова",
    location: "Конаково, Тверская область",
    rating: 4,
    text: "Заказывала спальный гарнитур. Несмотря на то, что живу не в Твери, а в области, доставили быстро. Качеством довольна, буду обращаться еще.",
    image: "/ava.png?height=100&width=100",
    date: "10.07.2023",
  },
  {
    id: 4,
    name: "Дмитрий Козлов",
    location: "Тверь, Заволжский район",
    rating: 5,
    text: "Заказывал офисную мебель для компании в Твери. Все сделали в срок, качество на высоте. Отдельное спасибо за индивидуальный подход!",
    image: "/ava.png?height=100&width=100",
    date: "25.09.2023",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
        setIsAnimating(false)
      }, 300)
    }
  }

  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
        setIsAnimating(false)
      }, 300)
    }
  }


  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextTestimonial, 5000)
      return () => clearInterval(interval)
    }
  }, [currentIndex, isPaused])

  const getCardStyle = (index: number) => {
    const diff = (index - currentIndex + testimonials.length) % testimonials.length
    
    if (diff === 0) {
      return {
        transform: 'translateX(0%) scale(1) rotateY(0deg)',
        opacity: 1,
        zIndex: 30,
        filter: 'blur(0px)',
      }
    } else if (diff === 1) {
      return {
        transform: 'translateX(60%) scale(0.85) rotateY(-25deg)',
        opacity: 0.7,
        zIndex: 20,
        filter: 'blur(1px)',
      }
    } else if (diff === testimonials.length - 1) {
      return {
        transform: 'translateX(-60%) scale(0.85) rotateY(25deg)',
        opacity: 0.7,
        zIndex: 20,
        filter: 'blur(1px)',
      }
    } else {
      return {
        transform: 'translateX(0%) scale(0.7) rotateY(0deg)',
        opacity: 0,
        zIndex: 10,
        filter: 'blur(2px)',
      }
    }
  }

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-white">
              Отзывы наших клиентов
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Что говорят о нас жители Твери и Тверской области
            </p>
          </div>
        </div>

        <div 
          className="relative max-w-5xl mx-auto h-[450px] perspective-1000"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all hover:scale-110 group"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all hover:scale-110 group"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
          </button>
          <div className="relative h-full flex items-center justify-center">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.id}
                className={`absolute w-full max-w-2xl transition-all duration-500 ease-out preserve-3d cursor-pointer
                  ${isAnimating ? '' : 'hover:scale-105'}
                  bg-white dark:bg-gray-800 shadow-2xl border-0`}
                style={getCardStyle(index)}
                onClick={() => index !== currentIndex && setCurrentIndex(index)}
                itemScope
                itemType="http://schema.org/Review"
              >
                <CardContent className="p-8 md:p-10">
                  <Quote className="absolute top-6 right-6 w-16 h-16 text-gray-100 dark:text-gray-700" />
                  
                  <div className="relative">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="relative flex-shrink-0">
                        <div className="relative h-20 w-20 rounded-full overflow-hidden ring-4 ring-gray-100 dark:ring-gray-700 shadow-xl">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                            itemProp="author"
                          />
                        </div>

                        {index === currentIndex && (
                          <div className="absolute inset-0 rounded-full bg-blue-400 dark:bg-blue-600 animate-ping opacity-20"></div>
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-1" itemProp="author">
                          {testimonial.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-3" itemProp="locationCreated">
                          {testimonial.location}
                        </p>
                        
                        <div className="flex gap-1" itemProp="reviewRating" itemScope itemType="http://schema.org/Rating">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 transition-all duration-300 ${
                                i < testimonial.rating 
                                  ? "fill-yellow-400 text-yellow-400" 
                                  : "fill-gray-200 text-gray-200 dark:fill-gray-600 dark:text-gray-600"
                              } ${index === currentIndex ? 'animate-star-pulse' : ''}`}
                              style={{ animationDelay: `${i * 100}ms` }}
                            />
                          ))}
                          <meta itemProp="ratingValue" content={testimonial.rating.toString()} />
                          <meta itemProp="bestRating" content="5" />
                        </div>
                      </div>
                    </div>

                    <blockquote className="relative">
                      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed italic" itemProp="reviewBody">
                        "{testimonial.text}"
                      </p>
                    </blockquote>

                    <div className="mt-6 flex items-center justify-between">
                      <p className="text-sm text-gray-500 dark:text-gray-400" itemProp="datePublished">
                        {testimonial.date}
                      </p>
                      

                      <div className="flex gap-2">
                        {testimonials.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              idx === currentIndex 
                                ? 'w-8 bg-gray-800 dark:bg-white' 
                                : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                            }`}
                            aria-label={`Go to testimonial ${idx + 1}`}
                          />
                        ))}
                      </div>
                    </div>

                    <meta itemProp="itemReviewed" content="Мебельщик Тверь" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>


        <div className="max-w-2xl mx-auto mt-12">
          <div className="h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div 
              className={`h-full bg-gray-800 dark:bg-white transition-all ${isPaused ? '' : 'animate-progress'}`}
              style={{ animationDuration: '5s' }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        @keyframes star-pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }
        .animate-star-pulse {
          animation: star-pulse 1.5s ease-in-out infinite;
        }
        @keyframes progress {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
        .animate-progress {
          animation: progress linear infinite;
        }
      `}</style>
    </section>
  )
}