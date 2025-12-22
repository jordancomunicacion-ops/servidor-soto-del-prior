import Link from "next/link";
import { ChefHat, Tractor, Globe, Server, ArrowRight, LayoutGrid, MonitorPlay, RefreshCw, Camera } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col selection:bg-orange-500/30">

      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-500/10 rounded-full blur-[100px]" />
      </div>

      <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-20 z-10 flex flex-col justify-center">

        {/* Header */}
        <div className="mb-16 text-center space-y-4">
          <div className="inline-flex items-center justify-center p-3 bg-zinc-900/50 rounded-2xl border border-zinc-800 shadow-xl mb-4">
            <Server className="w-8 h-8 text-zinc-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
            Soto del Prior
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Acceso centralizado a las aplicaciones y servicios del servidor.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* 1. App Ganadera */}
          <a
            href="http://localhost:3001"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col p-8 bg-zinc-900/40 border border-zinc-800 rounded-3xl hover:bg-zinc-900/60 hover:border-green-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-900/20"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />

            <div className="mb-6 p-4 bg-green-600/10 w-fit rounded-2xl group-hover:scale-110 transition-transform duration-300">
              <Tractor className="w-8 h-8 text-green-600" />
            </div>

            <h3 className="text-2xl font-semibold mb-2 text-white group-hover:text-green-500 transition-colors">
              App Ganadera
            </h3>
            <p className="text-zinc-400 mb-8 leading-relaxed">
              Gestión de explotaciones, trazabilidad y control veterinario.
            </p>

            <div className="mt-auto flex items-center text-sm font-medium text-green-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              Acceder <ArrowRight className="w-4 h-4 ml-2" />
            </div>
          </a>

          {/* 2. App Cocina (formerly Kitchen OS) */}
          <Link
            href="http://localhost:3002"
            target="_blank"
            className="group relative flex flex-col p-8 bg-zinc-900/40 border border-zinc-800 rounded-3xl hover:bg-zinc-900/60 hover:border-orange-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-900/20"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />

            <div className="mb-6 p-4 bg-orange-500/10 w-fit rounded-2xl group-hover:scale-110 transition-transform duration-300">
              <ChefHat className="w-8 h-8 text-orange-500" />
            </div>

            <h3 className="text-2xl font-semibold mb-2 text-white group-hover:text-orange-400 transition-colors">
              App Cocina
            </h3>
            <p className="text-zinc-400 mb-8 leading-relaxed">
              Sistema integral de gestión de cocina, eventos y escandallos.
            </p>

            <div className="mt-auto flex items-center text-sm font-medium text-orange-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              Acceder <ArrowRight className="w-4 h-4 ml-2" />
            </div>
          </Link>

          {/* 3. Web Soto del Prior */}
          <Link
            href="/web/index.html"
            target="_blank"
            className="group relative flex flex-col p-8 bg-zinc-900/40 border border-zinc-800 rounded-3xl hover:bg-zinc-900/60 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-900/20"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />

            <div className="mb-6 p-4 bg-purple-500/10 w-fit rounded-2xl group-hover:scale-110 transition-transform duration-300">
              <Globe className="w-8 h-8 text-purple-500" />
            </div>

            <h3 className="text-2xl font-semibold mb-2 text-white group-hover:text-purple-400 transition-colors">
              Soto del Prior
            </h3>
            <p className="text-zinc-400 mb-8 leading-relaxed">
              Web Pública - Versión Local.
            </p>

            <div className="mt-auto flex items-center justify-between">
              <div className="flex items-center text-sm font-medium text-purple-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                Visitar <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          </Link>

          {/* 4. TPV Ágora */}
          <div className="group relative flex flex-col p-8 bg-zinc-900/40 border border-zinc-800 rounded-3xl hover:bg-zinc-900/60 hover:border-green-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-900/20 cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />

            <div className="mb-6 p-4 bg-green-500/10 w-fit rounded-2xl group-hover:scale-110 transition-transform duration-300">
              <MonitorPlay className="w-8 h-8 text-green-500" />
            </div>

            <h3 className="text-2xl font-semibold mb-2 text-white group-hover:text-green-400 transition-colors">
              TPV Ágora
            </h3>
            <p className="text-zinc-400 mb-8 leading-relaxed">
              Consulta de informes y cierre de caja.
            </p>

            <div className="mt-auto flex items-center text-sm font-medium text-green-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              Ver Informes <ArrowRight className="w-4 h-4 ml-2" />
            </div>
          </div>

          {/* 5. CoverManager */}
          <a
            href="https://www.covermanager.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col p-8 bg-zinc-900/40 border border-zinc-800 rounded-3xl hover:bg-zinc-900/60 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/20"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />

            <div className="mb-6 p-4 bg-blue-500/10 w-fit rounded-2xl group-hover:scale-110 transition-transform duration-300">
              <LayoutGrid className="w-8 h-8 text-blue-500" />
            </div>

            <h3 className="text-2xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors">
              CoverManager
            </h3>
            <p className="text-zinc-400 mb-8 leading-relaxed">
              Motor de reservas y hospitalidad.
            </p>

            <div className="mt-auto flex items-center text-sm font-medium text-blue-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              Abrir Web <ArrowRight className="w-4 h-4 ml-2" />
            </div>
          </a>

          {/* 6. Videovigilancia */}
          <div className="group relative flex flex-col p-8 bg-zinc-900/40 border border-zinc-800 rounded-3xl hover:bg-zinc-900/60 hover:border-red-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-900/20 cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />

            <div className="mb-6 p-4 bg-red-500/10 w-fit rounded-2xl group-hover:scale-110 transition-transform duration-300">
              <Camera className="w-8 h-8 text-red-500" />
            </div>

            <h3 className="text-2xl font-semibold mb-2 text-white group-hover:text-red-400 transition-colors">
              Videovigilancia
            </h3>
            <p className="text-zinc-400 mb-8 leading-relaxed">
              Monitoreo de cámaras de seguridad en tiempo real.
            </p>

            <div className="mt-auto flex items-center text-sm font-medium text-red-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              Ver Cámaras <ArrowRight className="w-4 h-4 ml-2" />
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-20 text-center text-sm text-zinc-600">
          <p>© 2025 Server Portal System. Internal Use Only.</p>
        </div>

      </main>
    </div>
  );
}
