import { useState } from 'react';
import { products } from '@/data/products';
import Icon from '@/components/ui/icon';
import ProductCard from '@/components/ProductCard';

interface ProductPageProps {
  productId: number;
  onNavigate: (page: string, productId?: number) => void;
}

export default function ProductPage({ productId, onNavigate }: ProductPageProps) {
  const [showModal, setShowModal] = useState(false);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="pt-32 text-center">
        <p className="text-gray-500">Товар не найден</p>
        <button onClick={() => onNavigate('catalog')} className="mt-4 text-black underline text-sm">
          Вернуться в каталог
        </button>
      </div>
    );
  }

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8">
          <button onClick={() => onNavigate('home')} className="hover:text-black transition-colors">
            Главная
          </button>
          <span>/</span>
          <button onClick={() => onNavigate('catalog')} className="hover:text-black transition-colors">
            Каталог
          </button>
          <span>/</span>
          <span className="text-gray-700">{product.name}</span>
        </nav>

        {/* Product */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left: visual */}
          <div className="bg-gray-50 rounded-2xl flex items-center justify-center aspect-square">
            <span className="text-8xl">{product.emoji}</span>
          </div>

          {/* Right: info */}
          <div className="flex flex-col">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
              {product.category}
            </p>

            <h1 className="text-3xl font-semibold text-gray-900 mb-4 leading-tight">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`text-sm ${
                      star <= Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-200'
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="text-sm text-gray-500">
                {product.rating} · {product.reviews} отзывов
              </span>
            </div>

            <p className="text-gray-600 leading-relaxed mb-8 text-sm">
              {product.fullDescription}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Price + Buy */}
            <div className="border-t border-gray-100 pt-8">
              <div className="flex items-baseline gap-3 mb-5">
                <span className="text-3xl font-bold text-gray-900">
                  {product.price.toLocaleString('ru-RU')} ₽
                </span>
                {product.oldPrice && (
                  <span className="text-lg text-gray-400 line-through">
                    {product.oldPrice.toLocaleString('ru-RU')} ₽
                  </span>
                )}
                {product.oldPrice && (
                  <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                    Экономия {(product.oldPrice - product.price).toLocaleString('ru-RU')} ₽
                  </span>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setShowModal(true)}
                  className="flex-1 flex items-center justify-center gap-2 bg-black text-white py-3 px-6 rounded-full font-medium hover:bg-gray-800 transition-colors"
                >
                  <Icon name="ShoppingCart" size={18} />
                  Купить
                </button>
                <button
                  onClick={() => onNavigate('contacts')}
                  className="flex items-center justify-center gap-2 border border-gray-200 text-gray-700 py-3 px-6 rounded-full font-medium hover:border-gray-400 transition-colors"
                >
                  <Icon name="MessageCircle" size={18} />
                  Задать вопрос
                </button>
              </div>

              <div className="flex items-center gap-2 mt-4 text-xs text-gray-400">
                <Icon name="Zap" size={13} />
                Мгновенная доставка на email
              </div>
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">
              Похожие товары
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} onNavigate={onNavigate} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Buy Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-2xl p-8 max-w-sm w-full shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <span className="text-5xl mb-4 block">{product.emoji}</span>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Оформление заказа
              </h3>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                Для приобретения товара{' '}
                <span className="font-medium text-gray-800">«{product.name}»</span>{' '}
                обратитесь к нам по номеру телефона:
              </p>
              <a
                href="tel:+78001234567"
                className="flex items-center justify-center gap-2 bg-black text-white py-3 px-6 rounded-full font-medium text-lg hover:bg-gray-800 transition-colors mb-3"
              >
                <Icon name="Phone" size={18} />
                +7 (800) 123-45-67
              </a>
              <p className="text-xs text-gray-400 mb-5">Звонок бесплатный · Пн–Пт 9:00–18:00</p>
              <button
                onClick={() => setShowModal(false)}
                className="text-sm text-gray-400 hover:text-gray-700 transition-colors"
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
