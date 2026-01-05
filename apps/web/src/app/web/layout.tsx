import type { Metadata } from "next";
import "./web.css";
import { CartProvider } from './CartContext';

export const metadata: Metadata = {
    title: "SOTO del PRIOR | Origen y Calidad Suprema",
    description: "Antes que cocineros, somos ganaderos.",
};

export default function WebLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        // We already have <html> and <body> in RootLayout. 
        // We just render children here, but the CSS import applies to these children.
        // Note: CSS imports in Next.js layouts apply globally if not Modules, but scoping this way helps slightly OR we rely on CSS specificity.
        // Ideally use CSS Modules, but "web.css" is legacy junk.
        // Since RootLayout is present, we must return children.
        <CartProvider>
            {children}
        </CartProvider>
    );
}
