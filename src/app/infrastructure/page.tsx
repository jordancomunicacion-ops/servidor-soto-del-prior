"use client";

import { useEffect, useState } from "react";
import { Mail, Globe, Server, Plus, Trash2, RefreshCw } from "lucide-react";
import { toast } from "sonner"; // Assuming sonner or similar is used, or basic alert

export default function InfrastructurePage() {
    const [emails, setEmails] = useState<string[]>([]);
    const [domains, setDomains] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [newEmail, setNewEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [isCreating, setIsCreating] = useState(false);

    // Load Data
    const fetchData = async () => {
        setLoading(true);
        try {
            const [emailRes, domainRes] = await Promise.all([
                fetch("/api/infrastructure/emails"),
                fetch("/api/infrastructure/domains"),
            ]);

            const emailData = await emailRes.json();
            const domainData = await domainRes.json();

            if (emailData.emails) setEmails(emailData.emails);
            if (domainData.domains) setDomains(domainData.domains);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleCreateEmail = async () => {
        if (!newEmail || !newPassword) return;
        setIsCreating(true);
        try {
            const res = await fetch("/api/infrastructure/emails", {
                method: "POST",
                body: JSON.stringify({ email: newEmail, password: newPassword }),
            });
            if (res.ok) {
                setNewEmail("");
                setNewPassword("");
                fetchData();
                alert("Cuenta creada correctamente");
            } else {
                alert("Error creando cuenta");
            }
        } catch (e) {
            alert("Error de conexión");
        } finally {
            setIsCreating(false);
        }
    };

    const handleDeleteEmail = async (email: string) => {
        if (!confirm(`¿Seguro que quieres borrar ${email}?`)) return;
        try {
            const res = await fetch("/api/infrastructure/emails", {
                method: "DELETE",
                body: JSON.stringify({ email }),
            });
            if (res.ok) fetchData();
        } catch (e) { alert("Error borrando email"); }
    };

    return (
        <div className="p-8 bg-black min-h-screen text-white font-sans">
            <header className="flex justify-between items-center mb-10">
                <div>
                    <p className="text-gray-400 text-sm uppercase tracking-widest font-semibold mb-1">SERVIDOR SOTOdelPRIOR</p>
                    <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                        Infraestructura Digital
                    </h1>
                </div>
                <button
                    onClick={fetchData}
                    className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full hover:bg-zinc-800 transition-colors text-sm"
                >
                    <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                    Actualizar Estado
                </button>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* DOMAINS SECTION */}
                <section className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-400">
                            <Globe className="w-6 h-6" />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold">Dominios Activos</h2>
                            <p className="text-zinc-500 text-sm">Gestionados por Nginx en este servidor</p>
                        </div>
                    </div>

                    <div className="space-y-3">
                        {domains.length === 0 ? (
                            <p className="text-zinc-600 italic">No se detectaron dominios en Deployment/nginx/conf.d</p>
                        ) : (
                            domains.map((d) => (
                                <div key={d.id} className="group flex items-center justify-between p-4 bg-black/40 border border-zinc-800/50 rounded-2xl hover:border-zinc-700 transition-all">
                                    <div className="flex items-center gap-4">
                                        <div className={`w-2 h-2 rounded-full ${d.status === 'Active' ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]' : 'bg-red-500'}`} />
                                        <div>
                                            <h3 className="font-medium text-lg">{d.name}</h3>
                                            <p className="text-xs text-zinc-500 uppercase tracking-wider">{d.type}</p>
                                        </div>
                                    </div>
                                    <div className="px-3 py-1 rounded-full bg-zinc-900 text-xs text-zinc-400 border border-zinc-800">
                                        {d.provider}
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </section>

                {/* EMAILS SECTION */}
                <section className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6 backdrop-blur-sm">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-amber-500/10 rounded-2xl text-amber-400">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold">Cuentas de Correo</h2>
                                <p className="text-zinc-500 text-sm">Alojadas en Docker Mailserver</p>
                            </div>
                        </div>
                        <span className="px-3 py-1 bg-zinc-900 rounded-full text-xs font-mono text-zinc-500 border border-zinc-800">
                            {emails.length} CUENTAS
                        </span>
                    </div>

                    {/* CREATE FORM */}
                    <div className="mb-6 p-4 bg-zinc-950/50 rounded-2xl border border-zinc-800/50">
                        <div className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="Nueva cuenta (ej: info@jordazola.com)"
                                className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-amber-500/50 transition-colors"
                                value={newEmail}
                                onChange={(e) => setNewEmail(e.target.value)}
                            />
                            <div className="flex gap-2">
                                <input
                                    type="password"
                                    placeholder="Contraseña segura"
                                    className="flex-1 bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-amber-500/50 transition-colors"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                />
                                <button
                                    disabled={isCreating}
                                    onClick={handleCreateEmail}
                                    className="bg-white text-black px-4 py-2 rounded-xl font-medium text-sm hover:bg-gray-200 transition-colors disabled:opacity-50"
                                >
                                    {isCreating ? '...' : <Plus className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                        {emails.length === 0 ? (
                            <p className="text-zinc-600 italic text-center py-4">No hay cuentas creadas aún.</p>
                        ) : (
                            emails.map((email) => (
                                <div key={email} className="flex items-center justify-between p-3 bg-zinc-900/30 rounded-xl border border-transparent hover:border-zinc-800 transition-colors group">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center text-xs font-bold text-zinc-500">
                                            {email.charAt(0).toUpperCase()}
                                        </div>
                                        <span className="text-sm text-zinc-300 font-medium">{email}</span>
                                    </div>
                                    <button
                                        onClick={() => handleDeleteEmail(email)}
                                        className="text-zinc-600 hover:text-red-400 transition-colors p-2 opacity-0 group-hover:opacity-100"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            ))
                        )}
                    </div>
                </section>

            </div>
        </div>
    );
}
