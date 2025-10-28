import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen wood-texture">
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-background/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="font-script text-3xl text-foreground">Карина Бахрова</div>
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-wider"
              >
                ГЛАВНАЯ
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-wider"
              >
                ОБО МНЕ
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-wider"
              >
                УСЛУГИ
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-wider"
              >
                ПОРТФОЛИО
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-wider"
              >
                КОНТАКТЫ
              </button>
            </div>
            <div className="flex gap-4">
              <Icon name="Facebook" size={20} className="text-foreground hover:text-primary cursor-pointer transition-colors" />
              <Icon name="Twitter" size={20} className="text-foreground hover:text-primary cursor-pointer transition-colors" />
              <Icon name="Instagram" size={20} className="text-foreground hover:text-primary cursor-pointer transition-colors" />
              <Icon name="Youtube" size={20} className="text-foreground hover:text-primary cursor-pointer transition-colors" />
              <Icon name="Mail" size={20} className="text-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://cdn.poehali.dev/projects/9846e494-419c-4a9b-a3eb-35dadb666347/files/4a35d3f4-550d-485e-ab92-7f625e90507c.jpg"
            alt="Workspace"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background"></div>
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <h1 className="text-8xl md:text-9xl font-bold mb-6 tracking-tight leading-none">
              Я ГРАФИЧЕСКИЙ
              <br />
              ДИЗАЙНЕР
            </h1>
            <p className="font-script text-4xl md:text-5xl text-primary mb-8">
              Создаю прекрасные вещи
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed font-light">
              Привет! Я Карина Бахрова — молодой графический дизайнер. Я не люблю клише и обыденность, поэтому всё, что я создаю, имеет свой уникальный характер и настроение. Превращаю идеи в красивые визуальные решения, которые запоминаются.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-sm uppercase tracking-widest">
              УЗНАТЬ БОЛЬШЕ
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-32 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <div className="mb-12">
                <img 
                  src="https://cdn.poehali.dev/files/6c231365-c43d-4568-a76c-5f59283222cf.jpg"
                  alt="Карина Бахрова"
                  className="w-64 h-64 object-cover rounded-lg shadow-2xl"
                />
              </div>
              <h2 className="text-6xl font-bold mb-8 uppercase tracking-tight">
                МОИ
                <br />
                НАВЫКИ
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Я работаю в профессиональных программах для графического дизайна, которые позволяют создавать проекты любой сложности — от логотипов до масштабных брендинговых систем.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Постоянно развиваюсь и изучаю новые инструменты, чтобы предлагать клиентам современные и эффективные решения.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center">Программы</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
                {[
                  { name: 'Adobe Photoshop', icon: 'Image' },
                  { name: 'Adobe Illustrator', icon: 'PenTool' },
                  { name: 'CorelDRAW', icon: 'Palette' },
                  { name: 'Figma', icon: 'Layers' },
                  { name: 'Adobe InDesign', icon: 'FileText' },
                  { name: 'Canva', icon: 'Sparkles' },
                ].map((tool, index) => (
                  <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:scale-105 transition-all group text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon name={tool.icon as any} size={32} className="text-primary" />
                    </div>
                    <p className="font-semibold text-sm">{tool.name}</p>
                  </Card>
                ))}
              </div>
              <h3 className="text-2xl font-bold mb-6 text-center">Мои качества</h3>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { name: 'Внимание к деталям', icon: 'Eye', description: 'Тщательная проработка каждого элемента дизайна' },
                  { name: 'Творческое видение', icon: 'Lightbulb', description: 'Нестандартный подход к решению задач' },
                  { name: 'Тайм-менеджмент', icon: 'Clock', description: 'Соблюдение сроков и эффективное планирование' },
                  { name: 'Эмпатия', icon: 'Heart', description: 'Понимание потребностей и пожеланий клиента' },
                  { name: 'Идейность', icon: 'Sparkles', description: 'Генерация свежих и оригинальных концепций' },
                ].map((quality, index) => (
                  <Card key={index} className="p-4 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name={quality.icon as any} size={24} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-bold text-base">{quality.name}</p>
                        <p className="text-sm text-muted-foreground">{quality.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold mb-6 uppercase tracking-tight">МОИ УСЛУГИ</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Предоставляю полный спектр дизайнерских услуг для вашего бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'Stamp', title: 'Логотип', description: 'Создание уникального и запоминающегося логотипа, который отражает суть вашего бренда.' },
              { icon: 'FileText', title: 'Дизайн полиграфии', description: 'Сертификаты, визитки, буклеты, флаеры и другие печатные материалы с профессиональным дизайном.' },
              { icon: 'Package', title: 'Дизайн упаковки', description: 'Разработка привлекательной упаковки, которая выделяет ваш продукт на полке.' },
              { icon: 'Monitor', title: 'Баннеры', description: 'Яркие и эффективные баннеры для веб-сайтов, соцсетей и наружной рекламы.' },
              { icon: 'Image', title: 'Афиши и плакаты', description: 'Креативные афиши и плакаты для мероприятий, концертов и промо-кампаний.' },
              { icon: 'Presentation', title: 'Презентации', description: 'Стильные презентации для бизнеса, которые убеждают и впечатляют.' },
              { icon: 'Palette', title: 'Иллюстрации', description: 'Авторские иллюстрации для любых целей: от книг до рекламных кампаний.' },
              { icon: 'Sparkles', title: 'Индивидуальные заказы', description: 'Готова воплотить в жизнь ваши уникальные идеи и нестандартные проекты.' },
            ].map((service, index) => (
              <Card key={index} className="p-8 text-center bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:shadow-xl transition-all group">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon name={service.icon as any} size={40} className="text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-32 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold mb-6 uppercase tracking-tight">ПОРТФОЛИО</h2>
            <p className="text-muted-foreground text-lg">Избранные работы из моего портфолио</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { img: 'https://cdn.poehali.dev/projects/9846e494-419c-4a9b-a3eb-35dadb666347/files/4a35d3f4-550d-485e-ab92-7f625e90507c.jpg', title: 'Дизайн рабочего пространства', category: 'Интерьер / Фотография' },
              { img: 'https://cdn.poehali.dev/projects/9846e494-419c-4a9b-a3eb-35dadb666347/files/4fb342cc-4a6b-408a-b8a9-db516a382255.jpg', title: 'Креативная студия', category: 'Веб-дизайн / Брендинг' },
              { img: 'https://cdn.poehali.dev/projects/9846e494-419c-4a9b-a3eb-35dadb666347/files/cafb4c6b-640a-47fe-8327-adda6762b68b.jpg', title: 'Профессиональный портрет', category: 'Фотография / Брендинг' },
              { img: 'https://cdn.poehali.dev/projects/9846e494-419c-4a9b-a3eb-35dadb666347/files/4a35d3f4-550d-485e-ab92-7f625e90507c.jpg', title: 'Современное рабочее место', category: 'Веб-дизайн / UI/UX' },
            ].map((item, index) => (
              <Card key={index} className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img 
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.category}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-6xl font-bold mb-6 uppercase tracking-tight">СВЯЗАТЬСЯ СО МНОЙ</h2>
              <p className="text-muted-foreground text-lg">
                Обсудим ваш проект и воплотим его в жизнь
              </p>
            </div>
            <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-border/50">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 uppercase tracking-wider">Имя</label>
                    <Input placeholder="Ваше имя" className="bg-background/50" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 uppercase tracking-wider">Email</label>
                    <Input type="email" placeholder="your@email.com" className="bg-background/50" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 uppercase tracking-wider">Тема</label>
                  <Input placeholder="О чём ваш проект?" className="bg-background/50" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 uppercase tracking-wider">Сообщение</label>
                  <Textarea placeholder="Расскажите подробнее о вашей задаче..." rows={6} className="bg-background/50" />
                </div>
                <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-sm uppercase tracking-widest">
                  ОТПРАВИТЬ СООБЩЕНИЕ
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="font-script text-3xl text-foreground">Карина Бахрова</div>
            <p className="text-muted-foreground text-sm">
              © 2025 Карина Бахрова. Все права защищены.
            </p>
            <div className="flex gap-4">
              <Icon name="Facebook" size={20} className="text-foreground hover:text-primary cursor-pointer transition-colors" />
              <Icon name="Twitter" size={20} className="text-foreground hover:text-primary cursor-pointer transition-colors" />
              <Icon name="Instagram" size={20} className="text-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;