import { Card, CardContent } from "@/components/ui/card"

const cases = [
  {
    title: "Строительство жилого комплекса",
    category: "Строительство",
    image: "https://cdn.poehali.dev/projects/4082f7c2-e468-4e3b-800c-0af92c4ab89c/files/59b6ad9e-ae1d-44dd-8057-7a21827af883.jpg",
    description:
      "Обеспечили строительный объект электропитанием на 3 месяца. Два генератора по 15 кВт работали в круглосуточном режиме без сбоев.",
    tags: ["Строительство", "15 кВт", "3 месяца"],
  },
  {
    title: "Доставка на объект",
    category: "Логистика и сервис",
    image: "https://cdn.poehali.dev/projects/4082f7c2-e468-4e3b-800c-0af92c4ab89c/files/1867e931-2aa8-408f-9efa-b03e858070e5.jpg",
    description:
      "Доставляем генераторы в любую точку Калининграда в течение 2 часов. Привезём, установим, подключим и объясним правила эксплуатации.",
    tags: ["Доставка", "Установка", "Калининград"],
  },
  {
    title: "Открытый концерт на набережной",
    category: "Мероприятия",
    image: "https://cdn.poehali.dev/projects/4082f7c2-e468-4e3b-800c-0af92c4ab89c/files/337ceca4-d30d-4f52-af9f-2b9469a06739.jpg",
    description:
      "Питание сцены, звука и света для летнего open-air мероприятия. Генератор 20 кВт отработал 12 часов без единого перебоя.",
    tags: ["Мероприятие", "20 кВт", "Open-air"],
  },
  {
    title: "Дачный посёлок без электричества",
    category: "Частный сектор",
    image: "https://cdn.poehali.dev/projects/4082f7c2-e468-4e3b-800c-0af92c4ab89c/files/59b6ad9e-ae1d-44dd-8057-7a21827af883.jpg",
    description:
      "Аренда компактного генератора на лето для загородного дома. Тихая работа, экономичный расход топлива, простое управление.",
    tags: ["Дача", "3 кВт", "Сезонная аренда"],
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Наши объекты</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Строительство, мероприятия, дача или офис — мы обеспечиваем электропитанием объекты любого масштаба в Калининграде.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((item, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-primary font-semibold mb-2">{item.category}</p>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
