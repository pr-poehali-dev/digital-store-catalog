import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
  onNavigate: (page: string, productId?: number) => void;
}

export default function ProductCard({ product, onNavigate }: ProductCardProps) {
  return (
    <div
      onClick={() => onNavigate('product', product.id)}
      className="group cursor-pointer bg-white border border-gray-100 rounded-xl p-5 hover:border-gray-300 hover:shadow-sm transition-all duration-200"
    >
      <div className="flex items-start justify-between mb-3">
        <span className="text-3xl">{product.emoji}</span>
        {product.oldPrice && (
          <span className="text-xs bg-black text-white px-2 py-0.5 rounded-full font-medium">
            Скидка
          </span>
        )}
      </div>

      <p className="text-xs text-gray-400 font-medium mb-1 uppercase tracking-wider">
        {product.category}
      </p>

      <h3 className="font-semibold text-gray-900 mb-2 text-sm leading-snug group-hover:text-black transition-colors">
        {product.name}
      </h3>

      <p className="text-xs text-gray-500 mb-4 leading-relaxed line-clamp-2">
        {product.description}
      </p>

      <div className="flex items-center justify-between">
        <div>
          <span className="font-bold text-base text-gray-900">
            {product.price.toLocaleString('ru-RU')} ₽
          </span>
          {product.oldPrice && (
            <span className="text-xs text-gray-400 line-through ml-2">
              {product.oldPrice.toLocaleString('ru-RU')} ₽
            </span>
          )}
        </div>
        <div className="flex items-center gap-1 text-xs text-gray-400">
          <span>★</span>
          <span>{product.rating}</span>
        </div>
      </div>
    </div>
  );
}
