'use client';

import { useEffect, useState } from 'react';

export default function WebInteractions() {
    const [captchaAnswer, setCaptchaAnswer] = useState(0);
    const [captchaQuestion, setCaptchaQuestion] = useState('2 + 3');

    useEffect(() => {
        // --- 1. Vertical to Horizontal Scroll Mapping ---
        const scroller = document.querySelector('.horizontal-scroller');

        if (!scroller) return;

        const handleWheel = (evt: WheelEvent) => {
            // If specific horizontal scroll is detected (e.g. trackpad), let it happen naturally
            if (Math.abs(evt.deltaX) > Math.abs(evt.deltaY)) {
                return;
            }

            // Only hijack vertical scrolling
            if (Math.abs(evt.deltaY) > 0) {
                evt.preventDefault();

                scroller.scrollBy({
                    left: evt.deltaY * 3,
                    behavior: 'auto'
                });
            }
        };

        window.addEventListener('wheel', handleWheel, { passive: false });

        // --- 2. Navigation Handling (Smooth Scroll to Section) ---
        const scrollToPosition = (leftPosition: number) => {
            scroller.scrollTo({
                left: leftPosition,
                behavior: 'smooth'
            });
        };

        // A. Logo "Back to Start" Logic
        const logoLink = document.querySelector('.logo-link');
        if (logoLink) {
            logoLink.addEventListener('click', (e) => {
                e.preventDefault(); // Prevent jump
                scrollToPosition(0); // Scroll to very beginning
            });
        }

        // B. General Navigation Links (Anchors)
        const anchors = document.querySelectorAll('a[href^="#"]');
        anchors.forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                if (!href) return;
                const targetId = href.substring(1);
                if (!targetId) return;

                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    e.preventDefault();
                    // If it's inside the scroller, use offsetLeft.
                    // Note: sticky header might affect this if we were vertical, but horizontal is usually simpler.
                    scrollToPosition(targetSection.offsetLeft);
                }
            });
        });

        return () => {
            window.removeEventListener('wheel', handleWheel);
            // Clean up other listeners if strictly necessary, but they are attached to DOM elements that might persist
        };
    }, []);

    // --- 3. Modal Logic (Managed via React State ideally, but let's stick to DOM manipulation for parity with styles) ---
    // Actually, standard React event handlers on the JSX elements are cleaner than global listeners.
    // I will move the modal logic to functions exported here or just keep the effect if I'm lazy, 
    // BUT the JSX in page.tsx will need onclicks.
    // Let's do hybrid: The scroll hijacking is global. The modal can be controlled by React state here.

    const [isModalOpen, setIsModalOpen] = useState(false);

    const generateCaptcha = () => {
        const num1 = Math.floor(Math.random() * 10) + 1;
        const num2 = Math.floor(Math.random() * 10) + 1;
        setCaptchaAnswer(num1 + num2);
        setCaptchaQuestion(`${num1} + ${num2}`);
    };

    const openModal = (e: React.MouseEvent) => {
        e.preventDefault();
        generateCaptcha();
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userAnswer = parseInt(formData.get('captcha')?.toString() || '0');

        if (userAnswer !== captchaAnswer) {
            alert('Captcha incorrecto. Por favor, inténtalo de nuevo.');
            generateCaptcha();
            return;
        }

        // Mailto logic
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        const subject = `Nuevo mensaje de contacto de ${name}`;
        const body = `Nombre: ${name}%0D%0ACorreo: ${email}%0D%0AMensaje:%0D%0A${message}`;

        window.location.href = `mailto:info@sotodelprior.com?subject=${subject}&body=${body}`;

        closeModal();
        (e.target as HTMLFormElement).reset();
    };

    // We need to expose the openModal function to the parent or attach it via ID?
    // Since page.tsx is server side, we can't pass functions up easily.
    // Alternative: Render the buttons AND the modal INSIDE this client component?
    // Or just put the `onClick` logic for the specific buttons (Contact/Eventos) on a wrapper?

    // To keep it simple and match "exact HTML structure":
    // I will use `useEffect` to attach listeners to the IDs `trigger-contact-modal` and `trigger-event-modal`
    // if they exist in the DOM. This mimics the original script.js exactly.

    useEffect(() => {
        const contactTrigger = document.getElementById('trigger-contact-modal');
        const eventTrigger = document.getElementById('trigger-event-modal');

        const handleOpen = (e: Event) => {
            e.preventDefault();
            generateCaptcha();
            setIsModalOpen(true);
        };

        if (contactTrigger) contactTrigger.addEventListener('click', handleOpen);
        if (eventTrigger) eventTrigger.addEventListener('click', handleOpen);

        return () => {
            if (contactTrigger) contactTrigger.removeEventListener('click', handleOpen);
            if (eventTrigger) eventTrigger.removeEventListener('click', handleOpen);
        };
    }, []);

    return (
        <>
            {/* Modal structure */}
            <div id="contact-modal" className={`modal-overlay ${isModalOpen ? '' : 'hidden'}`} onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}>
                <div className="modal-content">
                    <button id="close-modal" className="close-btn" onClick={closeModal}>&times;</button>
                    <h2 className="modal-title">CONTACTO</h2>
                    <form id="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="contact-name">NOMBRE</label>
                            <input type="text" id="contact-name" name="name" required placeholder="Tu nombre" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="contact-email">CORREO DE CONTACTO</label>
                            <input type="email" id="contact-email" name="email" required placeholder="tucorreo@ejemplo.com" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="contact-message">MENSAJE</label>
                            <textarea id="contact-message" name="message" rows={4} required placeholder="¿En qué podemos ayudarte?"></textarea>
                        </div>

                        {/* CAPTCHA */}
                        <div className="form-group captcha-group">
                            <label htmlFor="captcha-input">¿Cuánto es <span id="captcha-question">{captchaQuestion}</span>?</label>
                            <input type="number" id="captcha-input" name="captcha" required placeholder="Respuesta" />
                        </div>

                        <button type="submit" className="btn-submit">ENVIAR</button>
                    </form>
                </div>
            </div>
        </>
    );
}
