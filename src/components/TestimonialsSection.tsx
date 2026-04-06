import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Взяли генератор на 3 недели для строительства дома за городом. Доставили быстро, всё объяснили. Ни одного сбоя за всё время — отличный сервис!",
    name: "Алексей",
    role: "Строительство частного дома",
  },
  {
    quote:
      "Организовывали летний фестиваль на открытой площадке. Ребята привезли мощный генератор, подключили звук и свет — всё прошло без единой заминки. Буду обращаться ещё.",
    name: "Марина",
    role: "Организатор мероприятий",
  },
  {
    quote:
      "На даче отключили электричество на несколько дней. Позвонил в 8 утра, уже к 10 часам привезли генератор. Очень оперативно и по разумной цене.",
    name: "Сергей",
    role: "Владелец загородного дома",
  },
  {
    quote:
      "Арендуем генераторы для строительных объектов уже второй год. Постоянные скидки, гибкие условия, техника всегда в отличном состоянии. Рекомендую коллегам.",
    name: "Дмитрий",
    role: "Прораб строительной компании",
  },
]

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5

    const scroll = () => {
      scrollPosition += scrollSpeed

      if (scrollContainer.scrollWidth && scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Что говорят наши клиенты
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed">
          Доверие клиентов — наша главная ценность. Работаем честно, быстро и всегда готовы помочь.
        </p>

        <div className="relative">
          <div ref={scrollRef} className="flex gap-6 overflow-x-hidden" style={{ scrollBehavior: "auto" }}>
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card key={index} className="flex-shrink-0 w-[90vw] sm:w-[450px] border-none shadow-lg">
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-base sm:text-lg mb-6 leading-relaxed text-pretty min-h-[120px]">
                    {testimonial.quote}
                  </p>
                  <div>
                    <p className="font-semibold text-lg">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
