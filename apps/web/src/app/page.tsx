import Link from 'next/link';

export default function PortalHome() {
    return (
        <main className="min-h-screen bg-[#0A0A0A] text-white flex flex-col items-center justify-center p-8 font-sans">

            {/* HEADER / LOGO */}
            <div className="mb-12 text-center">
                <img
                    src="/logo-full.png"
                    alt="SOTO DEL PRIOR"
                    style={{ filter: 'invert(1)' }}
                    className="h-32 mx-auto mb-6 opacity-90 hover:opacity-100 transition-opacity"
                />
                <p className="text-gray-400 tracking-[0.2em] text-sm md:text-base font-light font-mono">
                    SERVIDOR CENTRAL &middot; PORTAL DE ACCESO
                </p>
            </div>

            {/* DASHBOARD GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">

                {/* 1. WEB / TIENDA - PRIMARY */}
                <Link href="/web" className="group relative block p-8 bg-[#151515] border border-[#333] hover:border-[#C59D5F] transition-all duration-300 hover:transform hover:-translate-y-1">
                    <div className="absolute top-4 right-4 text-[#C59D5F] opacity-50 group-hover:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <h2 className="text-2xl font-bold mb-2 font-[family-name:var(--font-heading)] group-hover:text-[#C59D5F]">WEB</h2>
                    <p className="text-gray-500 text-sm">Web corporativa, Tienda Online y Reservas de Experiencias.</p>
                </Link>

                {/* 2. APP GANADERA */}
                <a href="http://localhost:3003" target="_blank" className="group relative block p-8 bg-[#151515] border border-[#333] hover:border-[#C59D5F] transition-all duration-300 hover:transform hover:-translate-y-1">
                    <div className="absolute top-4 right-4 text-[#C59D5F] opacity-50 group-hover:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                    </div>
                    <h2 className="text-2xl font-bold mb-2 font-[family-name:var(--font-heading)] group-hover:text-[#C59D5F]">GANADERÍA</h2>
                    <p className="text-gray-500 text-sm">Control de animales, pesajes, trazabilidad y genealogía.</p>
                    <span className="block mt-4 text-xs font-mono text-gray-600 bg-black/50 px-2 py-1 w-fit rounded">Puerto 3003</span>
                </a>

                {/* 3. APP COCINA */}
                <a href="http://localhost:3002" target="_blank" className="group relative block p-8 bg-[#151515] border border-[#333] hover:border-[#C59D5F] transition-all duration-300 hover:transform hover:-translate-y-1">
                    <div className="absolute top-4 right-4 text-[#C59D5F] opacity-50 group-hover:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
                    </div>
                    <h2 className="text-2xl font-bold mb-2 font-[family-name:var(--font-heading)] group-hover:text-[#C59D5F]">COCINA</h2>
                    <p className="text-gray-500 text-sm">Escandallos, fichas técnicas, inventario y gestión de eventos.</p>
                    <span className="block mt-4 text-xs font-mono text-gray-600 bg-black/50 px-2 py-1 w-fit rounded">Puerto 3002</span>
                </a>

                {/* 4. RESERVAS (Moved Up) */}
                <a href="http://localhost:3001/admin" target="_blank" className="group relative block p-8 bg-[#151515] border border-[#333] hover:border-[#C59D5F] transition-all duration-300 hover:transform hover:-translate-y-1">
                    <div className="absolute top-4 right-4 text-[#C59D5F] opacity-50 group-hover:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    </div>
                    <h2 className="text-2xl font-bold mb-2 font-[family-name:var(--font-heading)] group-hover:text-[#C59D5F]">RESERVAS</h2>
                    <p className="text-gray-500 text-sm">Gestión completa de reservas, motor de reservas y tarifas.</p>
                    <span className="block mt-4 text-xs font-mono text-gray-600 bg-black/50 px-2 py-1 w-fit rounded">Puerto 3001</span>
                </a>

                {/* 5. CRM & CAMPAIGNS */}
                <a href="http://localhost:3004" target="_blank" className="group relative block p-8 bg-[#151515] border border-[#333] hover:border-[#C59D5F] transition-all duration-300 hover:transform hover:-translate-y-1">
                    <div className="absolute top-4 right-4 text-[#C59D5F] opacity-50 group-hover:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>
                    </div>
                    <h2 className="text-2xl font-bold mb-2 font-[family-name:var(--font-heading)] group-hover:text-[#C59D5F]">MARKETING & CRM</h2>
                    <p className="text-gray-500 text-sm">Automatización de campañas, Social Analytics e Inteligencia de cliente.</p>
                    <span className="block mt-4 text-xs font-mono text-gray-600 bg-black/50 px-2 py-1 w-fit rounded">Puerto 3004</span>
                </a>

                {/* 5. TPV */}
                <Link href="/tpv" className="group relative block p-8 bg-[#151515] border border-[#333] hover:border-[#C59D5F] transition-all duration-300 hover:transform hover:-translate-y-1">
                    <div className="absolute top-4 right-4 text-[#C59D5F] opacity-50 group-hover:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                    </div>
                    <h2 className="text-2xl font-bold mb-2 font-[family-name:var(--font-heading)] group-hover:text-[#C59D5F]">TPV</h2>
                    <p className="text-gray-500 text-sm">Terminales Punto de Venta (Obrador, Restaurante...).</p>
                </Link>

                {/* 6. VIDEOVIGILANCIA */}
                <Link href="/cameras" className="group relative block p-8 bg-[#151515] border border-[#333] hover:border-[#C59D5F] transition-all duration-300 hover:transform hover:-translate-y-1">
                    <div className="absolute top-4 right-4 text-[#C59D5F] opacity-50 group-hover:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                    </div>
                    <h2 className="text-2xl font-bold mb-2 font-[family-name:var(--font-heading)] group-hover:text-[#C59D5F]">VIDEOVIGILANCIA</h2>
                    <p className="text-gray-500 text-sm">Visualización de cámaras de corrales, obrador y accesos.</p>
                </Link>

                {/* 7. SISTEMAS */}
                <Link href="/infrastructure" className="group relative block p-8 bg-[#151515] border border-[#333] hover:border-[#C59D5F] transition-all duration-300 hover:transform hover:-translate-y-1">
                    <div className="absolute top-4 right-4 text-[#C59D5F] opacity-50 group-hover:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
                    </div>
                    <h2 className="text-2xl font-bold mb-2 font-[family-name:var(--font-heading)] group-hover:text-[#C59D5F]">INFRAESTRUCTURA</h2>
                    <p className="text-gray-500 text-sm">Gestión de dominios, cuentas de correo y servidor propio.</p>
                </Link>

            </div>

            {/* FOOTER */}
            <footer className="mt-20 text-xs text-gray-600 tracking-wider">
                SYSTEM V2.0 &middot; SOTO DEL PRIOR &middot; {new Date().getFullYear()}
            </footer>
        </main>
    );
}
