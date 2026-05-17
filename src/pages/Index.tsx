import { useState } from 'react';
import Navbar from '@/components/Navbar';
import HomePage from './HomePage';
import CatalogPage from './CatalogPage';
import ProductPage from './ProductPage';
import ContactsPage from './ContactsPage';

type Page = 'home' | 'catalog' | 'product' | 'contacts';

export default function Index() {
  const [page, setPage] = useState<Page>('home');
  const [productId, setProductId] = useState<number | null>(null);

  const handleNavigate = (target: string, id?: number) => {
    if (target === 'product' && id) {
      setProductId(id);
      setPage('product');
    } else {
      setPage(target as Page);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-body">
      <Navbar currentPage={page} onNavigate={handleNavigate} />

      {page === 'home' && <HomePage onNavigate={handleNavigate} />}
      {page === 'catalog' && <CatalogPage onNavigate={handleNavigate} />}
      {page === 'product' && productId && (
        <ProductPage productId={productId} onNavigate={handleNavigate} />
      )}
      {page === 'contacts' && <ContactsPage />}

      <footer className="border-t border-gray-100 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <span>⚡</span>
            <span className="font-medium text-gray-600">DigitalStore</span>
            <span>— Магазин цифровых товаров</span>
          </div>
          <p>© 2024 DigitalStore. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
