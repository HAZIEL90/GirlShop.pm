import { useState } from 'react';
import { ShoppingCart, Instagram, Phone, Plus, Minus, X, Send, Sparkles, MapPin } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  inStock: boolean;
  category: 'maquillaje' | 'accesorios' | 'cuidado-personal';
  options?: string[];
  selectedOption?: string;
}

interface CartItem extends Product {
  quantity: number;
  selectedOption?: string;
}

type Category = 'all' | 'maquillaje' | 'accesorios' | 'cuidado-personal';

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [selectedOptions, setSelectedOptions] = useState<{[key: number]: string}>({});

  const products: Product[] = [
    {
      id: 1,
      name: 'Lip Matte Miss Bettylip',
      price: 4500,
      image: '/Lip Matte Miss Bettylip/WhatsApp_Image_2026-02-23_at_1.50.15_PM.jpeg',
      inStock: true,
      category: 'maquillaje'
    },
    {
      id: 2,
      name: 'Lip Matte Miss Lara (Claros)',
      price: 4500,
      image: '/Lip Matte Miss Lara (Claros)/WhatsApp_Image_2026-02-23_at_1.50.15_PM_(2).jpeg',
      inStock: true,
      category: 'maquillaje'
    },
    {
      id: 3,
      name: 'Lip Matte Miss Lara (Oscuros)',
      price: 4500,
      image: '/Lip Matte Miss Lara (Oscuros)/WhatsApp_Image_2026-02-23_at_1.50.16_PM.jpeg',
      inStock: true,
      category: 'maquillaje'
    },
    {
      id: 4,
      name: 'Rímel Voluminizador Larga Duración Sheglam',
      price: 3500,
      image: '/Rímel Voluminizador Larga Duración Sheglam/WhatsApp_Image_2026-02-23_at_2.05.06_PM.jpeg',
      inStock: true,
      category: 'maquillaje'
    },
    {
      id: 5,
      name: 'Gloss Matilda',
      price: 4000,
      image: '/Gloss Matilda/WhatsApp_Image_2026-02-23_at_2.05.07_PM.jpeg',
      inStock: true,
      category: 'maquillaje'
    },
    {
      id: 6,
      name: 'Gloss Minitango con Ceramida',
      price: 5000,
      image: '/Gloss Minitango con Ceramida/WhatsApp_Image_2026-02-23_at_2.05.07_PM_(3).jpeg',
      inStock: true,
      category: 'maquillaje'
    },
    {
      id: 7,
      name: 'Lip Gloss Olibolla',
      price: 4000,
      image: '/Lip Gloss Olibolla/WhatsApp_Image_2026-02-23_at_2.05.08_PM.jpeg',
      inStock: true,
      category: 'maquillaje'
    },
    {
      id: 8,
      name: 'Combo Corrector y Bronzer',
      price: 4500,
      image: '/Combo Corrector y Bronzer/WhatsApp_Image_2026-02-23_at_2.05.08_PM_(1).jpeg',
      inStock: true,
      category: 'maquillaje'
    },
    {
      id: 9,
      name: 'Peine y Lápiz para Ceja',
      price: 4500,
      image: '/Peine y Lápiz para Ceja/WhatsApp_Image_2026-02-23_at_11.33.28_AM.jpeg',
      inStock: true,
      category: 'maquillaje'
    },
    {
      id: 10,
      name: 'Rímel Marrón',
      price: 1500,
      image: '/Rímel Marrón/WhatsApp_Image_2026-02-23_at_11.33.28_AM_(1).jpeg',
      inStock: true,
      category: 'maquillaje'
    },
    {
      id: 11,
      name: 'Rímel Voluminizador',
      price: 5000,
      image: '/Rímel Voluminizador/WhatsApp_Image_2026-02-23_at_11.33.29_AM.jpeg',
      inStock: true,
      category: 'maquillaje'
    },
    {
      id: 12,
      name: 'Hidratante Mágico Mariposa',
      price: 3500,
      image: '/Hidratante Mágico Mariposa/WhatsApp_Image_2026-02-23_at_11.33.30_AM.jpeg',
      inStock: true,
      category: 'maquillaje'
    },
    {
      id: 13,
      name: 'Paleta de Sombras Super Style',
      price: 6000,
      image: '/Paleta de Sombras Super Style/WhatsApp_Image_2026-02-23_at_11.33.30_AM_(1).jpeg',
      inStock: true,
      category: 'maquillaje'
    },
    {
      id: 14,
      name: 'Lip Glow Oil Miss Betty',
      price: 4000,
      image: '/Lip Glow Oil Miss Betty/WhatsApp_Image_2026-02-23_at_11.33.31_AM.jpeg',
      inStock: true,
      category: 'maquillaje'
    },
    {
      id: 15,
      name: 'Gloss Stitch Cereza',
      price: 4500,
      image: '/Gloss Stitch Cereza/WhatsApp_Image_2026-02-23_at_11.33.32_AM.jpeg',
      inStock: true,
      category: 'maquillaje'
    },
    {
      id: 16,
      name: 'Labial Super Style Acabado Mate',
      price: 5000,
      image: '/Labial Super Style Acabado Mate/WhatsApp_Image_2026-02-23_at_11.33.33_AM.jpeg',
      inStock: true,
      category: 'maquillaje'
    },
    {
      id: 17,
      name: 'Set Brochas x5',
      price: 5000,
      image: '/Set Brochas x5/WhatsApp_Image_2026-02-23_at_11.33.33_AM_(1).jpeg',
      inStock: true,
      category: 'accesorios'
    },
    {
      id: 18,
      name: 'Repuestos de Arqueadores',
      price: 3000,
      image: '/Repuestos de Arqueadores/WhatsApp_Image_2026-02-23_at_11.33.33_AM_(2).jpeg',
      inStock: true,
      category: 'accesorios'
    },
    {
      id: 19,
      name: 'Set de Seis Perfiladores',
      price: 6500,
      image: '/Set de Seis Perfiladores/WhatsApp_Image_2026-02-23_at_11.33.34_AM.jpeg',
      inStock: true,
      category: 'accesorios'
    },
    {
      id: 20,
      name: 'Peine para Peinar Pestañas',
      price: 5000,
      image: '/Peine para Peinar Pestañas/WhatsApp_Image_2026-02-23_at_11.33.34_AM_(1).jpeg',
      inStock: true,
      category: 'accesorios'
    },
    {
      id: 21,
      name: 'Broches Largos Mariposa',
      price: 5000,
      image: '/Broches Largos Mariposa/WhatsApp_Image_2026-02-23_at_11.33.35_AM_(1).jpeg',
      inStock: true,
      category: 'accesorios'
    },
    {
      id: 22,
      name: 'Peine para Cejas y Pestañas',
      price: 5000,
      image: '/Peine para Cejas y Pestañas/WhatsApp_Image_2026-02-23_at_11.33.35_AM.jpeg',
      inStock: true,
      category: 'accesorios'
    },
    {
      id: 23,
      name: 'Set de 12 Peines Finos',
      price: 10000,
      image: '/Set de 12 Peines Finos/WhatsApp_Image_2026-02-23_at_11.33.35_AM_(2).jpeg',
      inStock: true,
      category: 'accesorios'
    },
    {
      id: 24,
      name: 'Brochas Flor',
      price: 6000,
      image: '/Brochas Flor/WhatsApp_Image_2026-02-23_at_11.33.36_AM.jpeg',
      inStock: true,
      category: 'accesorios'
    },
    {
      id: 25,
      name: 'Protector Solar',
      price: 5000,
      image: '/Protector Solar/WhatsApp_Image_2026-02-23_at_11.33.24_AM.jpeg',
      inStock: true,
      category: 'cuidado-personal'
    },
    {
      id: 26,
      name: 'Parches para Labios',
      price: 3000,
      image: '/Parches para Labios/WhatsApp_Image_2026-02-23_at_11.33.25_AM.jpeg',
      inStock: true,
      category: 'cuidado-personal'
    },
    {
      id: 27,
      name: 'Parches para Ojos',
      price: 3000,
      image: '/Parches para Ojos/WhatsApp_Image_2026-02-23_at_11.33.25_AM_(1).jpeg',
      inStock: true,
      category: 'cuidado-personal'
    },
    {
      id: 28,
      name: 'Protector Solar Factor 50',
      price: 10000,
      image: '/Protector Solar Factor 50/WhatsApp_Image_2026-02-23_at_11.33.26_AM.jpeg',
      inStock: true,
      category: 'cuidado-personal'
    },
    {
      id: 29,
      name: 'Contorno de Ojos Hidratante con Ácido Hialurónico',
      price: 10000,
      image: '/Contorno de Ojos Hidratante con Ácido Hialurónico/WhatsApp_Image_2026-02-23_at_11.33.27_AM.jpeg',
      inStock: true,
      category: 'cuidado-personal'
    },
    {
      id: 30,
      name: 'Parches para Acné 72',
      price: 6500,
      image: '/Prarches para Acné 72/WhatsApp_Image_2026-02-23_at_11.33.27_AM_(1).jpeg',
      inStock: true,
      category: 'cuidado-personal'
    },
    {
      id: 31,
      name: 'Parches para Acné 72 ',
      price: 8000,
      image: '/Parches para Acné 72 Unidades/WhatsApp_Image_2026-02-23_at_11.33.28_AM.jpeg',
      inStock: true,
      category: 'cuidado-personal'
    },
    {
      id: 32,
      name: 'Mascarillas para Puntos Negros',
      price: 1500,
      image: '/Mascarillas para Puntos Negros/WhatsApp_Image_2026-02-23_at_11.33.29_AM.jpeg',
      inStock: true,
      category: 'cuidado-personal'
    },
    {
      id: 33,
      name: 'Gel Hidratante de Aloe Vera',
      price: 6500,
      image: '/Gel Hidratante de Aloe Vera/WhatsApp_Image_2026-02-23_at_11.33.30_AM.jpeg',
      inStock: true,
      category: 'cuidado-personal'
    },
    {
      id: 34,
      name: 'Perfume para Cartera Yara 35ml',
      price: 4500,
      image: '/Perfume para Cartera Yara 35ml/WhatsApp_Image_2026-02-23_at_11.33.32_AM_(1).jpeg',
      inStock: true,
      category: 'cuidado-personal'
    },
    {
      id: 35,
      name: 'Perfume Tubo de Cartera Yara Candy 35ml',
      price: 4500,
      image: '/Perfume Tubo de Cartera Yara Candy 35ml/WhatsApp_Image_2026-02-23_at_11.33.32_AM_(2).jpeg',
      inStock: true,
      category: 'cuidado-personal'
    },
    {
      id: 36,
      name: 'Perfume Yara de Cartera 35ml',
      price: 3500,
      image: '/Perfume Yara de Cartera 35ml/WhatsApp_Image_2026-02-23_at_11.33.31_AM.jpeg',
      inStock: true,
      category: 'cuidado-personal'
    },
    {
      id: 37,
      name: 'Bálsamo Hidratante',
      price: 4000,
      image: '/Balsamo hidratante/WhatsApp_Image_2026-02-27_at_7.50.28_PM.jpeg',
      inStock: true,
      category: 'maquillaje',
      options: ['Uva', 'Arándanos', 'Limón', 'Cereza']
    },
    {
      id: 38,
      name: 'Delineador de Ojos Marrón',
      price: 2000,
      image: '/Delineador de ojos marrón/WhatsApp_Image_2026-02-27_at_7.50.28_PM_(1).jpeg',
      inStock: true,
      category: 'maquillaje'
    },
    {
      id: 39,
      name: 'Delineador de Ojos Negro',
      price: 2000,
      image: '/Delineador de ojos negro/WhatsApp_Image_2026-02-27_at_7.50.28_PM_(2).jpeg',
      inStock: true,
      category: 'maquillaje'
    },
    {
      id: 40,
      name: 'Delineador de Ojos en Fibra',
      price: 3000,
      image: '/Delineador de ojos en fibra/WhatsApp_Image_2026-02-27_at_7.50.29_PM.jpeg',
      inStock: true,
      category: 'maquillaje'
    },
    {
      id: 41,
      name: 'Delineador de Labios',
      price: 2500,
      image: '/Delineador de labios/WhatsApp_Image_2026-02-27_at_7.50.29_PM_(1).jpeg',
      inStock: true,
      category: 'maquillaje'
    }
  ];

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  const instagramHighlights = [
    { id: 1, title: 'Ustedes', url: 'https://www.instagram.com/stories/highlights/18036177554265658/', image: '/image.png' },
    { id: 2, title: 'Ustedes', url: 'https://www.instagram.com/stories/highlights/18491391925074904/', image: '/image.png' }
  ];

  const addToCart = (product: Product) => {
    const selectedOption = selectedOptions[product.id];

    if (product.options && !selectedOption) {
      alert('Por favor selecciona una opción antes de agregar al carrito');
      return;
    }

    setCart(prevCart => {
      const existingItem = prevCart.find(item =>
        item.id === product.id && item.selectedOption === selectedOption
      );
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id && item.selectedOption === selectedOption
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, selectedOption, quantity: 1 }];
    });
  };

  const updateQuantity = (id: number, change: number) => {
    setCart(prevCart => {
      const updatedCart = prevCart.map(item => {
        if (item.id === id) {
          const newQuantity = item.quantity + change;
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
        }
        return item;
      }).filter(item => item.quantity > 0);
      return updatedCart;
    });
  };

  const removeFromCart = (id: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const sendWhatsAppOrder = () => {
    const phoneNumber = '542975147537';
    let message = '¡Hola! 🎀 Me gustaría hacer el siguiente pedido:\n\n';

    cart.forEach(item => {
      const optionText = item.selectedOption ? ` (${item.selectedOption})` : '';
      message += `• ${item.name}${optionText} x${item.quantity} - $${item.price * item.quantity}\n`;
    });

    message += `\n*Total: $${getTotalPrice()}*\n\n¡Gracias! ✨`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md border-b-2 border-pink-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-pink-400 to-pink-600 p-3 rounded-2xl shadow-lg">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
                  girlsshop.pm
                </h1>
                <p className="text-xs text-pink-600 font-medium">Todo lo que una girl necesita 🎀✨</p>
              </div>
            </div>
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative bg-gradient-to-r from-pink-500 to-pink-600 text-white p-3 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <ShoppingCart className="w-6 h-6" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-white text-pink-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shadow-md">
                  {cart.reduce((total, item) => total + item.quantity, 0)}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Todo lo que una girl necesita 🎀✨
          </h2>
          <p className="text-xl md:text-2xl mb-4 flex items-center justify-center gap-2 drop-shadow">
            <MapPin className="w-6 h-6" />
            📍Perito Moreno | Envíos a todo el país 📦
          </p>
          <p className="text-lg md:text-xl opacity-90">
            Maquillaje • Skincare • Brochas • ¡Y mucho más!
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">✨ Productos en Stock</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-pink-600 mx-auto rounded-full mb-8"></div>

          {/* Category Tabs */}
          <div className="flex justify-center gap-4 flex-wrap mb-12">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-8 py-3 rounded-full font-semibold transition-all ${
                activeCategory === 'all'
                  ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg scale-105'
                  : 'bg-white text-pink-600 border-2 border-pink-200 hover:border-pink-400'
              }`}
            >
              Todo
            </button>
            <button
              onClick={() => setActiveCategory('maquillaje')}
              className={`px-8 py-3 rounded-full font-semibold transition-all ${
                activeCategory === 'maquillaje'
                  ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg scale-105'
                  : 'bg-white text-pink-600 border-2 border-pink-200 hover:border-pink-400'
              }`}
            >
              Maquillaje
            </button>
            <button
              onClick={() => setActiveCategory('accesorios')}
              className={`px-8 py-3 rounded-full font-semibold transition-all ${
                activeCategory === 'accesorios'
                  ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg scale-105'
                  : 'bg-white text-pink-600 border-2 border-pink-200 hover:border-pink-400'
              }`}
            >
              Accesorios
            </button>
            <button
              onClick={() => setActiveCategory('cuidado-personal')}
              className={`px-8 py-3 rounded-full font-semibold transition-all ${
                activeCategory === 'cuidado-personal'
                  ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg scale-105'
                  : 'bg-white text-pink-600 border-2 border-pink-200 hover:border-pink-400'
              }`}
            >
              Cuidado Personal
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-pink-100"
            >
              <div className="relative overflow-hidden h-72">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  En Stock
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{product.name}</h3>
                <p className="text-3xl font-bold text-pink-600 mb-4">${product.price}</p>

                {product.options && (
                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Selecciona un sabor:
                    </label>
                    <select
                      value={selectedOptions[product.id] || ''}
                      onChange={(e) => setSelectedOptions({...selectedOptions, [product.id]: e.target.value})}
                      className="w-full p-2 border-2 border-pink-200 rounded-lg focus:border-pink-500 focus:outline-none"
                    >
                      <option value="">-- Selecciona --</option>
                      {product.options.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                )}

                <button
                  onClick={() => addToCart(product)}
                  className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-105 flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Agregar al Carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Instagram Highlights */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-3 flex items-center justify-center gap-3">
            <Instagram className="w-10 h-10 text-pink-500" />
            Destacadas de Instagram
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-pink-600 mx-auto rounded-full"></div>
        </div>

        <div className="flex justify-center gap-6 flex-wrap">
          {instagramHighlights.map(highlight => (
            <a
              key={highlight.id}
              href={highlight.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 hover:scale-110 transition-transform duration-300"
            >
              <div className="w-28 h-28 rounded-full p-1 bg-gradient-to-tr from-pink-500 via-pink-400 to-pink-600 shadow-lg">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white">
                  <img
                    src={highlight.image}
                    alt={highlight.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <span className="text-sm font-semibold text-gray-700">{highlight.title}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-pink-600 to-pink-500 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-6">¡Síguenos en Redes! 💕</h3>
            <div className="flex justify-center gap-6 mb-8">
              <a
                href="https://www.instagram.com/girlsshop.pm/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-pink-600 p-4 rounded-full shadow-lg hover:shadow-2xl transition-all hover:scale-110"
              >
                <Instagram className="w-8 h-8" />
              </a>
              <a
                href="https://www.whatsapp.com/channel/0029VbB30o9AO7RLG0PnHu23?utm_source=ig&utm_medium=social&utm_content=link_in_bio"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-pink-600 p-4 rounded-full shadow-lg hover:shadow-2xl transition-all hover:scale-110"
              >
                <Phone className="w-8 h-8" />
              </a>
            </div>
            <p className="text-lg mb-2">📱 WhatsApp: 2975147537</p>
            <p className="text-sm opacity-90">📍 Perito Moreno, Santa Cruz, Argentina</p>
          </div>
          <div className="text-center text-sm opacity-75 border-t border-white/30 pt-6">
            <p>© 2026 girlsshop.pm - Todo lo que una girl necesita 🎀✨</p>
          </div>
        </div>
      </footer>

      {/* Shopping Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsCartOpen(false)}></div>
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col">
            <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white p-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <ShoppingCart className="w-6 h-6" />
                Tu Carrito
              </h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-gray-400">
                  <ShoppingCart className="w-24 h-24 mb-4 opacity-50" />
                  <p className="text-xl">Tu carrito está vacío</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item, index) => (
                    <div key={`${item.id}-${item.selectedOption || 'default'}-${index}`} className="bg-pink-50 rounded-2xl p-4 shadow-sm border-2 border-pink-100">
                      <div className="flex gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-xl"
                        />
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-800 mb-1">{item.name}</h3>
                          {item.selectedOption && (
                            <p className="text-sm text-gray-600 mb-1">Sabor: {item.selectedOption}</p>
                          )}
                          <p className="text-pink-600 font-bold mb-3">${item.price}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 bg-white rounded-lg shadow-sm">
                              <button
                                onClick={() => updateQuantity(item.id, -1)}
                                className="p-2 hover:bg-pink-100 rounded-lg transition-colors"
                              >
                                <Minus className="w-4 h-4 text-pink-600" />
                              </button>
                              <span className="font-bold text-gray-800 w-8 text-center">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, 1)}
                                className="p-2 hover:bg-pink-100 rounded-lg transition-colors"
                              >
                                <Plus className="w-4 h-4 text-pink-600" />
                              </button>
                            </div>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-lg transition-colors"
                            >
                              <X className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-pink-200 flex justify-between items-center">
                        <span className="text-sm text-gray-600">Subtotal:</span>
                        <span className="font-bold text-pink-600">${item.price * item.quantity}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="border-t-2 border-pink-100 p-6 bg-pink-50">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xl font-bold text-gray-800">Total:</span>
                  <span className="text-3xl font-bold text-pink-600">${getTotalPrice()}</span>
                </div>
                <button
                  onClick={sendWhatsAppOrder}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all hover:scale-105 flex items-center justify-center gap-3"
                >
                  <Send className="w-6 h-6" />
                  Hacer Pedido por WhatsApp
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
