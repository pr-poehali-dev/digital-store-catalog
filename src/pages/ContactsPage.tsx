import Icon from '@/components/ui/icon';

export default function ContactsPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
            Контакты
          </p>
          <h1 className="text-3xl font-semibold text-gray-900">Свяжитесь с нами</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <p className="text-gray-500 leading-relaxed mb-10">
              Мы готовы помочь с выбором, оформлением заказа и решением любых вопросов. 
              Свяжитесь с нами удобным способом.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={18} className="text-gray-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">
                    Телефон
                  </p>
                  <a
                    href="tel:+78001234567"
                    className="text-gray-900 font-medium hover:text-gray-600 transition-colors"
                  >
                    +7 (800) 123-45-67
                  </a>
                  <p className="text-xs text-gray-400 mt-0.5">Бесплатный звонок</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={18} className="text-gray-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:info@digitalstore.ru"
                    className="text-gray-900 font-medium hover:text-gray-600 transition-colors"
                  >
                    info@digitalstore.ru
                  </a>
                  <p className="text-xs text-gray-400 mt-0.5">Ответим в течение 2 часов</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" size={18} className="text-gray-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">
                    Режим работы
                  </p>
                  <p className="text-gray-900 font-medium">Пн – Пт: 9:00 – 18:00</p>
                  <p className="text-xs text-gray-400 mt-0.5">Сб – Вс: выходной</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={18} className="text-gray-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">
                    Адрес
                  </p>
                  <p className="text-gray-900 font-medium">г. Москва, ул. Цифровая, 1</p>
                  <p className="text-xs text-gray-400 mt-0.5">Только онлайн-доставка</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Написать нам</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
                (e.target as HTMLFormElement).reset();
              }}
              className="space-y-4"
            >
              <div>
                <label className="text-xs font-medium text-gray-500 uppercase tracking-wider block mb-1.5">
                  Имя
                </label>
                <input
                  type="text"
                  required
                  placeholder="Иван Иванов"
                  className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:border-gray-400 transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-gray-500 uppercase tracking-wider block mb-1.5">
                  Телефон
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+7 (___) ___-__-__"
                  className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:border-gray-400 transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-gray-500 uppercase tracking-wider block mb-1.5">
                  Сообщение
                </label>
                <textarea
                  required
                  placeholder="Опишите ваш вопрос..."
                  rows={4}
                  className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:border-gray-400 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 px-6 rounded-full font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
              >
                <Icon name="Send" size={16} />
                Отправить
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
