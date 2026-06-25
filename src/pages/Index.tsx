import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

const publishers = [
  { id: "ast", label: "АСТ" },
  { id: "eksmo", label: "Эксмо" },
  { id: "mahaon", label: "Махаон" },
]

const projects = {
  ast: [
    {
      title: "Выдающиеся звери (BEASTARS)",
      description:
        "Манга Пару Итагаки о мире антропоморфных животных, где хищники и травоядные пытаются мирно сосуществовать. Главный герой — застенчивый серый волк Легоси, который влюбляется в маленькую белую крольчиху Харуко. Серия затрагивает темы предрассудков, самоидентификации и поиска своего места в обществе.",
      volumes: "22 тома",
      language: "Японский",
      tags: ["Сёнэн", "Фэнтези", "Драма"],
      image: "https://cdn.poehali.dev/projects/dff8357b-9ae4-4567-904f-0c2710af2a8a/files/5d414535-fb5b-4119-b51b-deaa5f7252de.jpg",
      publisher: "АСТ",
    },
  ],
  eksmo: [
    {
      title: "Крутой учитель Онидзука (GTO)",
      description:
        "Культовая манга Тору Фудзисавы о бывшем байкере и хулигане Экиити Онидзуке, который стал школьным учителем. Несмотря на сомнительное прошлое, он оказывается лучшим педагогом для трудных подростков благодаря своей искренности и нестандартному подходу. Серия стала классикой жанра и получила несколько экранизаций.",
      volumes: "25 томов",
      language: "Японский",
      tags: ["Сёнэн", "Комедия", "Школа"],
      image: "https://cdn.poehali.dev/projects/dff8357b-9ae4-4567-904f-0c2710af2a8a/files/701a9580-2b55-4dc6-bba1-6024567c168d.jpg",
      publisher: "Эксмо",
    },
    {
      title: "BECK",
      description:
        "Манга Харольда Сакуиси о становлении рок-группы глазами обычного школьника Коюки. Встреча с харизматичным музыкантом Рюске меняет его жизнь навсегда — вместе они создают группу BECK и пробиваются на музыкальную сцену. Реалистичное изображение мира рок-музыки, дружбы и взросления.",
      volumes: "34 тома",
      language: "Японский",
      tags: ["Сёнэн", "Музыка", "Слайс-оф-лайф"],
      image: "https://cdn.poehali.dev/projects/dff8357b-9ae4-4567-904f-0c2710af2a8a/files/49bc3de0-9a1b-4fe9-9cc0-a97eab735115.jpg",
      publisher: "Эксмо",
    },
    {
      title: "GACHIAKUTA",
      description:
        "Манга Дзюн Кагуры о мире, разделённом на небесный город и подземную свалку. Юный Руди, несправедливо обвинённый в убийстве, оказывается выброшен в Бездну — гигантскую свалку, где выжить помогает способность превращать мусор в оружие. Динамичный экшен с глубокими социальными темами.",
      volumes: "выходит (8+ томов)",
      language: "Японский",
      tags: ["Сёнэн", "Экшен", "Фэнтези"],
      image: "https://cdn.poehali.dev/projects/dff8357b-9ae4-4567-904f-0c2710af2a8a/files/a75bf3c3-11ae-439c-a4a2-3cbf35aebd99.jpg",
      publisher: "Эксмо",
    },
  ],
  mahaon: [
    {
      title: "Из рыцаря в леди",
      description:
        "Романтическая фэнтези-манхва по роману Сон Херим. Главная героиня Аселла — лучший рыцарь королевства, всю жизнь скрывавшая свой пол. После неожиданного превращения ей приходится учиться быть женщиной, параллельно распутывая придворные интриги. Изящная история о силе духа, женской идентичности и любви.",
      volumes: "выходит",
      language: "Корейский",
      tags: ["Манхва", "Романтика", "Фэнтези"],
      image: "https://cdn.poehali.dev/projects/dff8357b-9ae4-4567-904f-0c2710af2a8a/files/51ebe781-31bc-4c21-9697-d064d00c57bd.jpg",
      publisher: "Махаон",
    },
  ],
}

export default function Portfolio() {
  const [activePublisher, setActivePublisher] = useState("ast")

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-slate-900">MangaStudio</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors">О студии</a>
              <a href="#services" className="text-slate-600 hover:text-slate-900 transition-colors">Услуги</a>
              <a href="#projects" className="text-slate-600 hover:text-slate-900 transition-colors">Работы</a>
              <a href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Принимаем заказы издательств</Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Перевод и вёрстка <span className="text-blue-600">манги</span> под ключ для издательств
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Профессиональная локализация комиксов и манги: перевод, редактура, вёрстка и
                художественное оформление. Готовим тома к печати в едином стиле и точно в срок.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Обсудить заказ
                  <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Смотреть работы
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Languages" className="h-6 w-6" />
                    <span className="font-semibold">Точный литературный перевод</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="LayoutTemplate" className="h-6 w-6" />
                    <span className="font-semibold">Вёрстка под печать</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Brush" className="h-6 w-6" />
                    <span className="font-semibold">Художественное оформление</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">О студии</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Команда переводчиков, редакторов и верстальщиков, влюблённых в мангу и комиксы
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Делаем мангу понятной русскому читателю</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Мы берём на себя полный цикл локализации: от перевода с японского, корейского и
                английского до финальной вёрстки и подготовки макета к типографии. Сохраняем стиль
                автора, чистим и ретушируем оригинальные страницы, подбираем шрифты под звуки и реплики.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Языки</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Японский</Badge>
                    <Badge variant="secondary">Корейский</Badge>
                    <Badge variant="secondary">Английский</Badge>
                    <Badge variant="secondary">Китайский</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Инструменты</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Photoshop</Badge>
                    <Badge variant="secondary">InDesign</Badge>
                    <Badge variant="secondary">Clip Studio</Badge>
                    <Badge variant="secondary">Illustrator</Badge>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/dff8357b-9ae4-4567-904f-0c2710af2a8a/files/1bf8602e-b956-468a-9f29-534b63fe4440.jpg"
                alt="Рабочее место студии локализации манги"
                className="rounded-2xl shadow-lg w-full max-w-[400px] h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Услуги</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Полный цикл локализации манги и комиксов для издательств
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Languages" className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Перевод и редактура</CardTitle>
                <CardDescription>Литературный перевод с сохранением авторского стиля и тщательная редактура текста.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>* Перевод с японского, корейского, английского</li>
                  <li>* Литературная и техническая редактура</li>
                  <li>* Адаптация ономатопеи и звуков</li>
                  <li>* Корректура и вычитка</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="LayoutTemplate" className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Вёрстка и тайпсеттинг</CardTitle>
                <CardDescription>Аккуратная вёрстка реплик и звуков, подготовка макета к печати.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>* Тайпсеттинг реплик в баблы</li>
                  <li>* Подбор и установка шрифтов</li>
                  <li>* Клининг и ретушь страниц</li>
                  <li>* Допечатная подготовка PDF</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Brush" className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Художественное оформление</CardTitle>
                <CardDescription>Оформление обложек, вкладок и переводных звуков в стиле оригинала.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>* Дизайн обложек и суперобложек</li>
                  <li>* Перерисовка звуков и надписей</li>
                  <li>* Цветокоррекция иллюстраций</li>
                  <li>* Оформление бонусных страниц</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Наши работы</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Тайтлы, которые мы локализовали для ведущих российских издательств
            </p>
          </div>

          {/* Publisher Tabs */}
          <div className="flex gap-2 mb-10 justify-center flex-wrap">
            {publishers.map((pub) => (
              <button
                key={pub.id}
                onClick={() => setActivePublisher(pub.id)}
                className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all ${
                  activePublisher === pub.id
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {pub.label}
              </button>
            ))}
          </div>

          {/* Project Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects[activePublisher as keyof typeof projects].map((project) => (
              <Card key={project.title} className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="relative h-56 bg-gradient-to-r from-blue-500 to-purple-600">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg leading-snug">{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">{project.description}</p>
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <div className="flex items-center gap-1.5">
                      <Icon name="BookOpen" className="h-3.5 w-3.5" />
                      <span>{project.volumes}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Icon name="Languages" className="h-3.5 w-3.5" />
                      <span>{project.language}</span>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800 text-xs">{project.publisher}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Обсудим ваш тираж</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Готовы взяться за локализацию вашей серии? Расскажите о проекте — рассчитаем сроки и стоимость.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Связаться со студией</h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                Будь то один том или многотомная серия — мы возьмём на себя перевод, вёрстку и
                оформление, чтобы вы получили готовый к печати макет.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Icon name="Mail" className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-slate-300">hello@mangastudio.ru</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Icon name="Send" className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Telegram</p>
                    <p className="text-slate-300">@mangastudio</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Icon name="Phone" className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Телефон</p>
                    <p className="text-slate-300">+7 (900) 000-00-00</p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Оставить заявку</CardTitle>
                <CardDescription className="text-slate-300">
                  Расскажите о серии, и мы рассчитаем условия локализации.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Имя</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Иван"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Издательство</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Название"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="ivan@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">О проекте</label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Название серии, язык оригинала, количество томов, нужные услуги..."
                  />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Отправить заявку
                  <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="font-bold text-xl text-white mb-4 md:mb-0">MangaStudio</div>
            <p className="text-center md:text-right">
              2024 MangaStudio. Перевод, вёрстка и оформление манги для издательств.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
