'use client';

import { useState } from 'react';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';

export default function CheckoutForm({ total }: { total: number }) {
    const stripe = useStripe();
    const elements = useElements();

    const [message, setMessage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setIsLoading(true);

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                // Make sure to change this to your payment completion page
                return_url: `${window.location.origin}/web?payment_success=true`,
            },
        });

        if (error.type === "card_error" || error.type === "validation_error") {
            setMessage(error.message || "Error desconocido");
        } else {
            setMessage("Ha ocurrido un error inesperado.");
        }

        setIsLoading(false);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">

            {/* CONTACT INFO (We let Stripe handle payment details, but we can collect other info if needed) */}
            {/* For MVP, Stripe PaymentElement handles most complexity */}

            {/* STRIPE PAYMENT ELEMENT */}
            <div className="bg-white p-4 border border-gray-200 rounded">
                <PaymentElement id="payment-element" options={{ layout: "tabs" }} />
            </div>

            {message && <div className="text-red-500 text-sm font-bold">{message}</div>}

            <button
                type="submit"
                disabled={isLoading || !stripe || !elements}
                className="w-full bg-[#C59D5F] text-white py-4 font-bold uppercase text-lg hover:bg-black transition-colors disabled:opacity-70 disabled:cursor-not-allowed mt-8">
                {isLoading ? 'Procesando...' : `Pagar ${total.toFixed(2)}€`}
            </button>

            <div className="text-xs text-gray-400 text-center mt-2">
                <p>Pagos procesados de forma segura por Stripe. SSL Encrypted.</p>
            </div>
        </form>
    );
}
