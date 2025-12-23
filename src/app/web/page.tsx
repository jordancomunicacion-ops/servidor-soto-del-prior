import { prisma } from '@/lib/prisma';
import WebInteractions from './WebInteractions';
import BuyButton from './BuyButton';
import StoreHeader from './StoreHeader';
import CartSidebar from './CartSidebar';

async function getProducts() {
  try {
    const products = await prisma.shopProduct.findMany();
    // Serialize Decimal to number/string for Client Components
    return products.map(p => ({
      ...p,
      price: parseFloat(p.price.toString())
    }));
  } catch (error) {
    console.error("DB Error:", error);
    return [];
  }
}

export default async function Home() {
  const products = await getProducts();

  // Helper to find specific products by name (fuzzy match)
  const menuProduct = products.find(p => p.name.includes("Menú"));
  const packProduct = products.find(p => p.name.includes("Pack"));
  const visitProduct = products.find(p => p.name.includes("Visita"));

  return (
    <main>
      {/* Dynamic Header with Cart State */}
      <StoreHeader />
      <CartSidebar />

      {/* HORIZONTAL SCROLL CONTAINER */}
      <div className="horizontal-scroller">

        {/* 1. HERO */}
        <section className="h-section hero-section" id="inicio">
          <div className="hero-bg">
            <img src="/web/assets/hero_landscape_clean.png" alt="Paisaje Soto del Prior" />
          </div>
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1 className="hero-title">ANTES QUE COCINEROS,<br />SOMOS GANADEROS.</h1>
          </div>
        </section>

        {/* 2. RESTAURANTE (Split Alt) */}
        <section className="h-section split-layout" id="restaurante">
          <div className="split-text">
            <h2 className="big-lead">HIERRO &amp; CIERZO.</h2>
            <p className="description">
              Producto de temporada. De nuestra huerta al plato.
              Sabores puros, sin artificios. La esencia de la tierra.
            </p>
            {/* CoverManager Booking Engine */}
            <div className="booking-widget-container">
              <iframe src="https://www.covermanager.com/reservation/module_restaurant/sotodelprior/spanish"
                frameBorder="0" height="550" width="100%" title="Reserva tu mesa"></iframe>
            </div>
          </div>
          <div className="split-visual">
            <img src="/web/assets/img_restaurante.png" alt="Tomate Confitado Soto del Prior" />
          </div>
        </section>

        {/* 3. EVENTOS (Formerly Granja) */}
        <section className="h-section split-layout" id="eventos">
          <div className="split-text">
            <h2 className="big-lead">EVENTOS.</h2>
            <p className="description">
              Celebraciones privadas. Rodajes. Presentaciones de marca.
              Un entorno único para momentos que exigen distinción y privacidad absoluta.
            </p>
            <a href="#" className="btn-product" id="trigger-event-modal" style={{ width: 'fit-content', padding: '1rem 2rem' }}>ORGANIZAR EVENTO</a>
          </div>
          <div className="split-visual">
            <img src="/web/assets/img_eventos.png" alt="Eventos y Bodas Soto del Prior" />
          </div>
        </section>

        {/* 4. ALOJAMIENTO (Split) */}
        <section className="h-section split-layout" id="alojamiento">
          <div className="split-visual">
            <img src="/web/assets/bedroom.png" alt="Habitación Rural" />
          </div>
          <div className="split-text">
            <h2 className="big-lead">SILENCIO.</h2>
            <p className="description">
              Desconectar para reconectar. Madera, piedra y vistas a la sierra.
              Una estancia de lujo rural donde el único ruido es el viento.
            </p>
            {/* Avirato Booking Engine */}
            <div className="booking-widget-container">
              <iframe src="https://booking.avirato.com/?code=SotoDelPriorDemo" frameBorder="0" height="550"
                width="100%" title="Reserva tu estancia"></iframe>
            </div>
          </div>
        </section>

        {/* 5. OBRADOR (Split) - DYNAMIC PRODUCTS */}
        <section className="h-section split-layout" id="obrador">
          <div className="split-visual">
            <img src="/web/assets/bread.png" alt="Pan Artesano" />
          </div>
          <div className="split-text">
            <h2 className="big-lead">REGALA.</h2>
            <p className="description">
              Porque lo auténtico se comparte. Sorprende con una experiencia gastronómica inolvidable o con el
              sabor puro de nuestra tierra.
            </p>
            <div className="product-grid">
              {/* DYNAMIC PRODUCT 1: MENU */}
              <div className="product-card">
                <h3>{menuProduct?.name || "MENÚ DEGUSTACIÓN"}</h3>
                <p className="product-detail">{menuProduct?.description || "6 Pases"}</p>
                <p className="product-price">{menuProduct ? menuProduct.price + '€' : "70€"}</p>
                {menuProduct ? <BuyButton product={menuProduct} /> : <button className="btn-product">COMPRAR</button>}
              </div>
              {/* DYNAMIC PRODUCT 2: PACK */}
              <div className="product-card">
                <h3>{packProduct?.name || "PACK ARTESANAL"}</h3>
                <p className="product-detail">{packProduct?.description || "Chorizo, salchichón y cecina..."}</p>
                <p className="product-price">{packProduct ? packProduct.price + '€' : "50€"}</p>
                {packProduct ? <BuyButton product={packProduct} /> : <button className="btn-product">COMPRAR</button>}
              </div>
            </div>
          </div>
        </section>

        {/* 6. ORIGEN (Formerly Filosofía) - DYNAMIC PRODUCT 3 */}
        <section className="h-section philosophy-section" id="origen">
          <h2 className="big-lead">NO BUSCAMOS LA PERFECCIÓN. <br />BUSCAMOS LA VERDAD.</h2>
          {/* Moved Product Card (Horizontal/Dark) */}
          <div className="product-card product-card--horizontal">
            <div className="card-info">
              <h3>{visitProduct?.name || "VISITA A LA GRANJA"}</h3>
              <p className="product-detail">{visitProduct?.description || "Experiencia guiada"}</p>
            </div>
            <div className="card-actions">
              <p className="product-price">{visitProduct ? visitProduct.price + '€' : "20€"}</p>
              {visitProduct ? <BuyButton product={visitProduct} /> : <button className="btn-product">COMPRAR</button>}
            </div>
          </div>
        </section>

        {/* 7. FOOTER / END */}
        <section className="h-section end-section" id="contacto">
          <img src="/web/assets/logo_text.png" alt="SOTO DEL PRIOR" className="footer-logo" />
          <div className="end-links">
            <a href="https://www.instagram.com/sotodelprior/" target="_blank"><img src="/web/assets/icon_instagram.svg"
              alt="Instagram" className="social-icon" /></a>
            <a href="https://www.tiktok.com/@sotodelprior" target="_blank"><img src="/web/assets/icon_tiktok.svg"
              alt="TikTok" className="social-icon" /></a>
            <a href="#" id="trigger-contact-modal"><img src="/web/assets/icon_mail.svg" alt="Contacto"
              className="social-icon" /></a>
            <a href="#"><img src="/web/assets/icon_phone.svg" alt="Teléfono" className="social-icon" /></a>
          </div>
          <p style={{ marginTop: '2rem', opacity: 0.7 }}>© 2024 TODOS LOS DERECHOS RESERVADOS</p>
        </section>

      </div>

      {/* Client Interaction Logic (Scroll, Modals) */}
      <WebInteractions />
    </main>
  );
}
