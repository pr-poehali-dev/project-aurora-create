import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Truck, Clock, Wrench, Shield, Phone } from "lucide-react"

const services = [
  {
    icon: Zap,
    title: "Генераторы 1–5 кВт",
    description:
      "Компактные бензиновые генераторы для дома, дачи и небольших мероприятий. Подходят для освещения, зарядки оборудования и работы бытовой техники. Тихие и экономичные модели.",
  },
  {
    icon: Zap,
    title: "Генераторы 5–15 кВт",
    description:
      "Мощные агрегаты для строительных площадок, торговых павильонов и загородных объектов. Обеспечат стабильное питание инструментов и оборудования.",
  },
  {
    icon: Zap,
    title: "Генераторы 15–30 кВт",
    description:
      "Промышленные генераторы для масштабных мероприятий, крупных строек и производственных нужд. Трёхфазное и однофазное питание.",
  },
  {
    icon: Truck,
    title: "Доставка по городу",
    description:
      "Привезём и установим генератор в любую точку Калининграда. Быстро, аккуратно, профессионально. Заберём по окончании срока аренды.",
  },
  {
    icon: Wrench,
    title: "Техническая поддержка",
    description:
      "Наш специалист поможет с подключением и настройкой оборудования на месте. При любых вопросах в процессе аренды — на связи 24/7.",
  },
  {
    icon: Clock,
    title: "Аренда от 1 дня",
    description:
      "Гибкие сроки аренды — от одного дня до нескольких месяцев. Чем дольше срок, тем выгоднее цена. Без залога при безналичном расчёте.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mx-auto block w-fit">
          Наши услуги
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Что мы <span className="text-primary">предлагаем</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
          Широкий парк бензиновых генераторов для любых задач — с доставкой, подключением и поддержкой 24/7.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
