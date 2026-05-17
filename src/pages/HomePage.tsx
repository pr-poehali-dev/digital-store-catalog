import { products, categories } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import Icon from '@/components/ui/icon';

interface HomePageProps {
  onNavigate: (page: string, productId?: number) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const featured = products.filter((p) => p.featured);

  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-24 px-6 max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
            Магазин цифровых товаров
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-gray-900 leading-tight mb-6">
            Программы.<br />
            <span className="italic font-light text-gray-500">Игры. Курсы.</span>
          </h1>
          <p className="text-gray-500 text-lg mb-8 leading-relaxed max-w-xl">
            Лицензионное программное обеспечение, игры и обучающие курсы с мгновенной доставкой на почту.
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => onNavigate('catalog')}
              className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
            >
              Перейти в каталог
              <Icon name="ArrowRight" size={16} />
            </button>
            <button
              onClick={() => onNavigate('contacts')}
              className="flex items-center gap-2 border border-gray-200 text-gray-700 px-6 py-3 rounded-full font-medium hover:border-gray-400 transition-colors"
            >
              Связаться с нами
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg border-t border-gray-100 pt-10">
          <div>
            <p className="text-2xl font-bold text-gray-900">25+</p>
            <p className="text-sm text-gray-400 mt-1">товаров в каталоге</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">5</p>
            <p className="text-sm text-gray-400 mt-1">категорий</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">10k+</p>
            <p className="text-sm text-gray-400 mt-1">довольных покупателей</p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">
            Категории
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {categories.map((cat) => {
              const emojis: Record<string, string> = {
                'Программное обеспечение': '💻',
                'Игры': '🎮',
                'Курсы': '📚',
                'Шаблоны': '📁',
                'Антивирусы': '🛡️',
              };
              const count = products.filter((p) => p.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => onNavigate('catalog')}
                  className="bg-white border border-gray-100 rounded-xl p-4 text-left hover:border-gray-300 hover:shadow-sm transition-all group"
                >
                  <span className="text-2xl mb-3 block">{emojis[cat]}</span>
                  <p className="text-sm font-medium text-gray-800 leading-snug">{cat}</p>
                  <p className="text-xs text-gray-400 mt-1">{count} товаров</p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400">
              Хиты продаж
            </h2>
            <button
              onClick={() => onNavigate('catalog')}
              className="text-sm text-gray-500 hover:text-black transition-colors flex items-center gap-1"
            >
              Все товары <Icon name="ArrowRight" size={14} />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} onNavigate={onNavigate} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Нужна помощь с выбором?</h2>
            <p className="text-gray-400">Наши специалисты помогут подобрать нужный продукт</p>
          </div>
          <button
            onClick={() => onNavigate('contacts')}
            className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors whitespace-nowrap"
          >
            <Icon name="Phone" size={16} />
            Позвонить нам
          </button>
        </div>
      </section>
    </div>
  );
}
