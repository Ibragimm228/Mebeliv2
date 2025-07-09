"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

interface FormData {
  name: string
  phone: string
  message: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Что-то пошло не так")
      }

      toast.success("Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.")
      setFormData({ name: "", phone: "", message: "" })
    } catch (error) {
      toast.error("Ошибка при отправке заявки. Пожалуйста, попробуйте позже.")
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-12 md:py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Свяжитесь с нами</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Оставьте заявку, и мы перезвоним вам в ближайшее время
            </p>
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 mt-8">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="text-lg font-semibold">Телефон</h3>
                <p className="text-gray-500 dark:text-gray-400">+7 (915) 722-00-75</p>
                <p className="text-gray-500 dark:text-gray-400">+7 (903) 630-29-09</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="text-gray-500 dark:text-gray-400">mebelshik69@mail.ru</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="text-lg font-semibold">Адрес</h3>
                <p className="text-gray-500 dark:text-gray-400">г. Тверь, Авангардная ул., 25А</p>
                <p className="text-gray-500 dark:text-gray-400">Пн-Пт: 9:00-20:00</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Input name="name" placeholder="Ваше имя" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="space-y-2">
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Ваш телефон"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Textarea
                  name="message"
                  placeholder="Сообщение (необязательно)"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  "Отправка..."
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" /> Заказать звонок
                  </>
                )}
              </Button>
            </form>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Нажимая на кнопку, вы соглашаетесь с нашей политикой конфиденциальности
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
