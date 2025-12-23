'use client';

import { useCart } from '../CartContext';
import CheckoutForm from './CheckoutForm';
import StripeWrapper from './StripeWrapper';
import StoreHeader from '../StoreHeader';
import Link from 'next/link';

export default function CheckoutPage() {
    const { items, total } = useCart();

    if (items.length === 0) {
        return (
            <main className="min-h-screen bg-[#F4F4F4] font-sans">
                <div className="bg-black text-white p-4 text-center font-bold">
                    <Link href="/web">← VOLVER A LA TIENDA</Link>
                </div>
                <div className="flex flex-col items-center justify-center h-[80vh] text-center">
                    <h1 className="text-4xl font-[family-name:var(--font-heading)] mb-4">TU CESTA ESTÁ VACÍA</h1>
                    <p className="text-gray-500 mb-8">Parece que no has añadido nada todavía.</p>
                    <Link href="/web" className="bg-[#C59D5F] text-white px-8 py-3 font-bold uppercase hover:bg-black transition-colors">
                        Volver al Catálogo
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-[#F4F4F4] font-sans">
            <div className="bg-black text-white p-4 flex justify-between items-center px-8">
                <Link href="/web" className="text-sm font-bold opacity-70 hover:opacity-100">← SEGUIR COMPRANDO</Link>
                <div className="text-[#C59D5F] font-bold tracking-widest">CHECKOUT SEGURO</div>
            </div>

            <div className="max-w-6xl mx-auto p-4 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* LEFT COLUMN: FORM */}
                <div>
                    <h2 className="text-3xl font-[family-name:var(--font-heading)] uppercase mb-8 border-b border-black pb-4">
                        Datos de Pago
                    </h2>
                    {/* WRAPPED IN ELEMENTS PROVIDER */}
                    <StripeWrapper total={total} items={items} />
                </div>

                {/* RIGHT COLUMN: SUMMARY */}
                <div className="bg-white p-8 h-fit shadow-xl border-t-4 border-[#C59D5F]">
                    <h2 className="text-2xl font-[family-name:var(--font-heading)] uppercase mb-6">Resumen del Pedido</h2>
                    <div className="space-y-4 mb-8">
                        {items.map(item => (
                            <div key={item.id} className="flex justify-between items-center text-sm border-b border-dashed border-gray-200 pb-2">
                                <div className="flex items-center gap-3">
                                    <span className="bg-gray-100 w-8 h-8 flex items-center justify-center font-bold text-xs rounded-full">
                                        {item.quantity}
                                    </span>
                                    <span>{item.name}</span>
                                </div>
                                <span className="font-bold">{(item.price * item.quantity).toFixed(2)}€</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-between items-center text-xl font-bold border-t border-black pt-4">
                        <span>TOTAL A PAGAR</span>
                        <span className="text-[#C59D5F]">{total.toFixed(2)}€</span>
                    </div>

                    <div className="mt-8 text-xs text-gray-400 text-center">
                        <p className="mb-2">🔒 Pagos procesados de forma segura por Stripe.</p>
                        <p>Al completar la compra aceptas nuestra <a href="/web/legal/politica-compras" target="_blank" className="underline hover:text-black">Política de Compras</a>.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
