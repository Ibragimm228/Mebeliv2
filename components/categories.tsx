import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const categories = [
  {
    id: 1,
    title: "Мебель для гостиной",
    description: "Диваны, кресла, журнальные столики и тумбы под ТВ в Твери",
    image: "/holl-furniture.png?height=300&width=400",
    link: "/living-room",
  },
  {
    id: 2,
    title: "Мебель для спальни",
    description: "Кровати, шкафы, комоды и прикроватные тумбочки в Твери",
    image: "/bedroom-furniture.png?height=300&width=400",
    link: "/bedroom",
  },
  {
    id: 3,
    title: "Кухонная мебель",
    description: "Кухонные гарнитуры, столы, стулья и барные стойки в Твери",
    image: "/kitchen-furniture.png?height=300&width=400",
    link: "/kitchen",
  },
  {
    id: 4,
    title: "Офисная мебель",
    description: "Рабочие столы, кресла, шкафы и стеллажи для офисов в Твери",
    image: "/office-furniture.jpeg?height=300&width=400",
    link: "/office",
  },
]

export default function Categories() {
  return (
    <section id="categories" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Каталог мебели в Твери
            </h2>
            <p className="max-w-[800px] text-gray-600 md:text-lg lg:text-lg dark:text-gray-400">
              Широкий выбор мебели для любого помещения в Твери и Тверской области. 
              Индивидуальный подход к каждому клиенту.
            </p>
          </div>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          itemScope
          itemType="http://schema.org/ItemList"
        >
          {categories.map((category, index) => (
            <Card
              key={category.id}
              className="group overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800"
              itemScope
              itemType="http://schema.org/Product"
              itemProp="itemListElement"
            >
              <div className="relative h-[240px] overflow-hidden">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={`${category.title} в Твери`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  itemProp="image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100" itemProp="name">
                  {category.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-5 leading-relaxed text-sm" itemProp="description">
                  {category.description}
                </p>
                <Link
                  href={category.link}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group/link"
                  itemProp="url"
                >
                  Узнать подробнее
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
                <meta itemProp="position" content={`${index + 1}`} />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}