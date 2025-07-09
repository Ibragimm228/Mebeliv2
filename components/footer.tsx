import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8 md:py-12" itemScope itemType="http://schema.org/WPFooter">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-primary">Мебельщик Тверь</span>
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Качественная мебель для дома и офиса в Твери и Тверской области по доступным ценам
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <nav className="space-y-4" aria-label="Каталог продукции">
            <h3 className="text-lg font-semibold">Каталог</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/living-room"
                  className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary inline-block"
                  aria-label="Перейти в раздел мебели для гостиной"
                >
                  Мебель для гостиной
                </Link>
              </li>
              <li>
                <Link
                  href="/bedroom"
                  className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary inline-block"
                  aria-label="Перейти в раздел мебели для спальни"
                >
                  Мебель для спальни
                </Link>
              </li>
              <li>
                <Link
                  href="/kitchen"
                  className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary inline-block"
                  aria-label="Перейти в раздел кухонной мебели"
                >
                  Кухонная мебель
                </Link>
              </li>
              <li>
                <Link
                  href="/office"
                  className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary inline-block"
                  aria-label="Перейти в раздел офисной мебели"
                >
                  Офисная мебель
                </Link>
              </li>
            </ul>
          </nav>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Информация</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#about"
                  className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                >
                  О компании
                </Link>
              </li>
              <li>
                <Link
                  href="/delivery"
                  className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                >
                  Доставка и оплата
                </Link>
              </li>
              <li>
                <Link
                  href="/warranty"
                  className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                >
                  Гарантия
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                >
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Контакты</h3>
            <ul className="space-y-2">
              <li className="text-gray-500 dark:text-gray-400">г. Тверь, Авангардная ул., 25А

Заволжский район</li>
              <li className="text-gray-500 dark:text-gray-400">+7 (915) 722-00-75</li>
              <li className="text-gray-500 dark:text-gray-400">mebelshik69@mail.ru</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-8">
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            © {new Date().getFullYear()} Мебельщик Тверь. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  )
}
