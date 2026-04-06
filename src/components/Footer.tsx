import { Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">⚡ ГенераторПрокат</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Аренда бензиновых генераторов в Калининграде. Доставка по городу, работаем 24/7.
            </p>
            <p className="text-xs text-muted-foreground">© 2026 ГенераторПрокат. Все права защищены.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  О компании
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Услуги
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Тарифы
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-3">
              <a href="tel:+79316000634" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                +7 (931) 600-06-34
              </a>
              <a href="mailto:aetasmeamarina@mail.ru" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                aetasmeamarina@mail.ru
              </a>
              <a href="https://t.me/marina_is_love" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <span>✈️</span>
                @marina_is_love
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}