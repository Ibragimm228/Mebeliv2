import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Мебель для гостиной - Мебельщик Тверь",
  description:
    "Широкий выбор мебели для гостиной: диваны, кресла, журнальные столики и тумбы под ТВ. Качественные материалы, современный дизайн.",
}

export default function LivingRoomLayout({
  children,
}: {
  children: ReactNode
}) {
  return <>{children}</>
} 