import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Спасибо! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted">
      <section className="relative overflow-hidden pt-20 pb-32 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center animate-fade-in-up">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-2 bg-primary/10 border border-primary/30 px-4 py-2 rounded-full">
                <Icon name="Sparkles" size={16} className="text-primary" />
                <span className="text-sm font-medium text-primary">Инновационные технологии очистки</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Очистка и дезинфекция
              <br />
              систем вентиляции
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Передовые технологии для идеальной чистоты воздуха в вашем пространстве
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 animate-glow"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Получить консультацию
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-primary/30 hover:bg-primary/10"
                onClick={() => document.getElementById('service')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Icon name="Info" size={20} className="mr-2" />
                Подробнее об услуге
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { icon: "Shield", title: "100% Качество", desc: "Гарантия долговечности" },
                { icon: "Zap", title: "Быстро", desc: "Установка за 1-2 дня" },
                { icon: "Award", title: "Сертифицировано", desc: "Международные стандарты" },
              ].map((item, i) => (
                <Card 
                  key={i} 
                  className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  <div className="mb-4 inline-block p-3 bg-primary/10 rounded-xl">
                    <Icon name={item.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="service" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Наша <span className="text-primary">услуга</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Комплексный подход к очистке и дезинфекции вентиляционных систем
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8 animate-fade-in">
              {[
                {
                  icon: "Microscope",
                  title: "Глубокая очистка",
                  desc: "Удаление всех видов загрязнений: пыль, жир, бактерии, грибок. Используем профессиональное оборудование и безопасные средства."
                },
                {
                  icon: "Sparkles",
                  title: "Дезинфекция",
                  desc: "Уничтожение 99.9% вирусов и бактерий. Применяем сертифицированные антисептики и UV-технологии."
                },
                {
                  icon: "Settings",
                  title: "Диагностика системы",
                  desc: "Проверка всех компонентов вентиляции, выявление проблем и рекомендации по оптимизации работы."
                },
                {
                  icon: "ClipboardCheck",
                  title: "Контроль качества",
                  desc: "Многоступенчатая проверка результата, замеры чистоты воздуха, документация выполненных работ."
                }
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="flex gap-4 group"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon name={item.icon as any} size={24} className="text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              <Card className="relative p-8 bg-card/80 backdrop-blur-sm border-primary/30">
                <div className="mb-6">
                  <Icon name="Award" size={48} className="text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Гарантии качества</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Долговечность результата:</strong> эффект сохраняется 6-12 месяцев
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Гарантия на работы:</strong> до 12 месяцев с момента выполнения
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Повторный выезд:</strong> бесплатно при необходимости корректировки
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Сертификаты:</strong> все работы документируются и сертифицируются
                    </p>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-primary/10 rounded-xl border border-primary/30">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name="Shield" size={24} className="text-primary" />
                    <span className="font-semibold">Официальная гарантия</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Все обязательства закреплены договором и подтверждены документами
                  </p>
                </div>
              </Card>
            </div>
          </div>

          <div className="mt-16 animate-fade-in">
            <Card className="p-8 md:p-12 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-primary/30">
              <div className="text-center mb-8">
                <Icon name="Cpu" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-3xl font-bold mb-3">Технологии будущего</h3>
                <p className="text-muted-foreground">Мы используем самые современные методы и оборудование</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: "Wind", title: "Роботизированная очистка", desc: "Автоматические системы для труднодоступных мест" },
                  { icon: "Sparkles", title: "UV-C стерилизация", desc: "Ультрафиолетовая дезинфекция воздуха" },
                  { icon: "BarChart", title: "IoT мониторинг", desc: "Умные датчики качества воздуха" },
                  { icon: "Droplets", title: "Нано-покрытия", desc: "Антибактериальная защита поверхностей" },
                ].map((tech, i) => (
                  <div key={i} className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <Icon name={tech.icon as any} size={28} className="text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">{tech.title}</h4>
                    <p className="text-sm text-muted-foreground">{tech.desc}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 relative bg-gradient-to-b from-background to-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Примеры <span className="text-primary">наших работ</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Результаты профессиональной очистки и дезинфекции систем вентиляции
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden bg-card/80 backdrop-blur-sm border-primary/30 hover:border-primary/50 transition-all group animate-fade-in">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/files/20114.jpg"
                  alt="До и после очистки вентиляционного канала"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-xs font-semibold text-white">До / После</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2">Вентиляционный канал</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Удаление многолетних загрязнений и пыли из воздуховода
                </p>
                <div className="flex items-center gap-2 text-sm text-primary">
                  <Icon name="CheckCircle2" size={16} />
                  <span>100% очистка канала</span>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden bg-card/80 backdrop-blur-sm border-primary/30 hover:border-primary/50 transition-all group animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="relative h-80 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/files/20115.jpg"
                  alt="До и после очистки промышленной вентиляции"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-xs font-semibold text-white">До / После</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2">Промышленная вентиляция</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Очистка воздуховодов от жировых и масляных отложений на производстве
                </p>
                <div className="flex items-center gap-2 text-sm text-primary">
                  <Icon name="CheckCircle2" size={16} />
                  <span>Дезинфекция выполнена</span>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden bg-card/80 backdrop-blur-sm border-primary/30 hover:border-primary/50 transition-all group animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative h-80 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/files/20119.jpg"
                  alt="Результаты очистки вентиляционной системы"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-accent/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-xs font-semibold text-white">Результат</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2">Комплексная очистка</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Полная обработка вентиляционных каналов и решеток от загрязнений
                </p>
                <div className="flex items-center gap-2 text-sm text-primary">
                  <Icon name="CheckCircle2" size={16} />
                  <span>Гарантия 12 месяцев</span>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Card className="inline-block p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/20 rounded-xl">
                  <Icon name="Camera" size={32} className="text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg mb-1">Фото- и видеофиксация</h4>
                  <p className="text-sm text-muted-foreground">
                    Документируем каждый этап работы для вашего контроля качества
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Свяжитесь <span className="text-primary">с нами</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Получите бесплатную консультацию и расчет стоимости
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-8 bg-card/80 backdrop-blur-sm border-primary/30 animate-scale-in">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Ваше имя
                  </label>
                  <Input
                    id="name"
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background/50"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Телефон
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="bg-background/50"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Сообщение
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Расскажите о вашем объекте и задачах..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="bg-background/50 resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </Card>

            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/30 hover:border-primary/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Телефон</h3>
                    <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                    <p className="text-sm text-muted-foreground mt-1">Пн-Пт: 9:00 - 18:00</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/30 hover:border-primary/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">info@ventclean.ru</p>
                    <p className="text-sm text-muted-foreground mt-1">Ответим в течение часа</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/30 hover:border-primary/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Адрес</h3>
                    <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 123</p>
                    <p className="text-sm text-muted-foreground mt-1">Офис открыт для визитов</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-primary/20 to-accent/20 border-primary/50">
                <div className="flex items-center gap-3 mb-3">
                  <Icon name="Clock" size={24} className="text-primary" />
                  <h3 className="font-semibold">Быстрый отклик</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Мы свяжемся с вами в течение 15 минут после отправки заявки
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-primary/20 mt-16">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-muted-foreground">
            © 2024 VentClean. Очистка и дезинфекция систем вентиляции
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;