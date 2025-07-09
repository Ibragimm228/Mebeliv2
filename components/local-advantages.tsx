"use client"

import { CheckCircle, Truck, Clock, CreditCard } from "lucide-react"
import { useRef, useEffect, useState } from "react"

interface SquaresProps {
  direction?: "right" | "left" | "up" | "down" | "diagonal"
  speed?: number
  borderColor?: string
  squareSize?: number
  hoverFillColor?: string
  className?: string
}

function Squares({
  direction = "right",
  speed = 1,
  borderColor = "#333",
  squareSize = 40,
  hoverFillColor = "#222",
  className,
}: SquaresProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const requestRef = useRef<number | undefined>(undefined)
  const numSquaresX = useRef<number | undefined>(undefined)
  const numSquaresY = useRef<number | undefined>(undefined)
  const gridOffset = useRef({ x: 0, y: 0 })
  const [hoveredSquare, setHoveredSquare] = useState<{
    x: number
    y: number
  } | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.style.background = "#060606"

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      numSquaresX.current = Math.ceil(canvas.width / squareSize) + 1
      numSquaresY.current = Math.ceil(canvas.height / squareSize) + 1
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const startX = Math.floor(gridOffset.current.x / squareSize) * squareSize
      const startY = Math.floor(gridOffset.current.y / squareSize) * squareSize

      ctx.lineWidth = 0.5

      for (let x = startX; x < canvas.width + squareSize; x += squareSize) {
        for (let y = startY; y < canvas.height + squareSize; y += squareSize) {
          const squareX = x - (gridOffset.current.x % squareSize)
          const squareY = y - (gridOffset.current.y % squareSize)

          if (
            hoveredSquare &&
            Math.floor((x - startX) / squareSize) === hoveredSquare.x &&
            Math.floor((y - startY) / squareSize) === hoveredSquare.y
          ) {
            ctx.fillStyle = hoverFillColor
            ctx.fillRect(squareX, squareY, squareSize, squareSize)
          }

          ctx.strokeStyle = borderColor
          ctx.strokeRect(squareX, squareY, squareSize, squareSize)
        }
      }

      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.sqrt(Math.pow(canvas.width, 2) + Math.pow(canvas.height, 2)) / 2,
      )
      gradient.addColorStop(0, "rgba(6, 6, 6, 0)")
      gradient.addColorStop(1, "#060606")

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    const updateAnimation = () => {
      const effectiveSpeed = Math.max(speed, 0.1)

      switch (direction) {
        case "right":
          gridOffset.current.x =
            (gridOffset.current.x - effectiveSpeed + squareSize) % squareSize
          break
        case "left":
          gridOffset.current.x =
            (gridOffset.current.x + effectiveSpeed + squareSize) % squareSize
          break
        case "up":
          gridOffset.current.y =
            (gridOffset.current.y + effectiveSpeed + squareSize) % squareSize
          break
        case "down":
          gridOffset.current.y =
            (gridOffset.current.y - effectiveSpeed + squareSize) % squareSize
          break
        case "diagonal":
          gridOffset.current.x =
            (gridOffset.current.x - effectiveSpeed + squareSize) % squareSize
          gridOffset.current.y =
            (gridOffset.current.y - effectiveSpeed + squareSize) % squareSize
          break
      }

      drawGrid()
      requestRef.current = requestAnimationFrame(updateAnimation)
    }

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const mouseX = event.clientX - rect.left
      const mouseY = event.clientY - rect.top

      const startX = Math.floor(gridOffset.current.x / squareSize) * squareSize
      const startY = Math.floor(gridOffset.current.y / squareSize) * squareSize

      const hoveredSquareX = Math.floor(
        (mouseX + gridOffset.current.x - startX) / squareSize,
      )
      const hoveredSquareY = Math.floor(
        (mouseY + gridOffset.current.y - startY) / squareSize,
      )

      setHoveredSquare({ x: hoveredSquareX, y: hoveredSquareY })
    }

    const handleMouseLeave = () => {
      setHoveredSquare(null)
    }


    window.addEventListener("resize", resizeCanvas)
    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("mouseleave", handleMouseLeave)

    resizeCanvas()
    requestRef.current = requestAnimationFrame(updateAnimation)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("mouseleave", handleMouseLeave)
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [direction, speed, borderColor, hoverFillColor, hoveredSquare, squareSize])

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full border-none block ${className}`}
    />
  )
}

export default function LocalAdvantages() {
  return (
    <section className="py-8 md:py-12 relative overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Squares
          direction="diagonal"
          speed={0.5}
          borderColor="#333"
          squareSize={50}
          hoverFillColor="#1a1a1a"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-white">
              Почему выбирают нас в Твери
            </h2>
            <p className="max-w-[900px] text-gray-300 md:text-lg">
              Мы предлагаем лучшие условия для покупки мебели в Твери и Тверской области
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="group relative bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-lg shadow-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            <div className="flex flex-col items-center text-center space-y-3 relative z-10">
              <CheckCircle className="h-10 w-10 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
              <h3 className="text-lg font-semibold text-white group-hover:text-blue-100 transition-colors duration-300">
                Собственное производство в Твери
              </h3>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                Мы производим мебель на собственной фабрике в Твери, что позволяет контролировать качество и сроки
              </p>
            </div>
          </div>

          <div className="group relative bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-lg shadow-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-t from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            <div className="flex flex-col items-center text-center space-y-3 relative z-10">
              <Truck className="h-10 w-10 text-green-400 group-hover:text-green-300 transition-colors duration-300" />
              <h3 className="text-lg font-semibold text-white group-hover:text-green-100 transition-colors duration-300">
                Быстрая доставка по Твери
              </h3>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                Доставляем мебель по Твери и области собственным транспортом.
              </p>
            </div>
          </div>

          <div className="group relative bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-lg shadow-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            <div className="flex flex-col items-center text-center space-y-3 relative z-10">
              <Clock className="h-10 w-10 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300" />
              <h3 className="text-lg font-semibold text-white group-hover:text-yellow-100 transition-colors duration-300">
                Изготовление от 7 дней
              </h3>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                Благодаря налаженному производству в Твери, мы изготавливаем мебель в кратчайшие сроки
              </p>
            </div>
          </div>

          <div className="group relative bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-lg shadow-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            <div className="flex flex-col items-center text-center space-y-3 relative z-10">
              <CreditCard className="h-10 w-10 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
              <h3 className="text-lg font-semibold text-white group-hover:text-purple-100 transition-colors duration-300">
                Удобная оплата
              </h3>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                Принимаем наличный и безналичный расчёт. (Отсрочку не даём)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}