import React from "react";
import { createRoot } from "react-dom/client";
import {
  Phone,
  Mail,
  Hammer,
  Home,
  Wrench,
  Zap,
  Droplets,
  Building2,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  Clock,
  HardHat,
} from "lucide-react";
import "./style.css";

const phone = "072-966 56 88";
const phoneLink = "tel:+46729665688";
const email = "kontaktsweex@gmail.com";

function App() {
  const services = [
    {
      icon: <HardHat />,
      title: "Totalentreprenad inom bygg",
      text: "Vi samordnar hela byggprocessen med tydlig planering, ansvar och kvalitet från start till mål.",
    },
    {
      icon: <Home />,
      title: "Inomhusrenoveringar",
      text: "Renovering av kök, badrum, ytskikt, golv och kompletta interiöra förbättringar.",
    },
    {
      icon: <Building2 />,
      title: "Utomhusprojekt",
      text: "Altaner, fasader, marknära projekt, mindre byggnationer och underhåll utomhus.",
    },
    {
      icon: <Zap />,
      title: "El",
      text: "Elrelaterade arbeten utförda med rätt kompetens, säkerhet och noggrannhet.",
    },
    {
      icon: <Droplets />,
      title: "VVS",
      text: "Praktiska VVS-lösningar för installation, service och underhåll i fastigheter.",
    },
    {
      icon: <Wrench />,
      title: "Fastighetsskötsel",
      text: "Löpande skötsel, tillsyn och underhåll för fastigheter, lokaler och bostäder.",
    },
  ];

  return (
    <>
      <header className="topbar">
        <div className="container nav">
          <a href="#hem" className="brand" aria-label="SWE-EX Entreprenad AB startsida">
            <img src="/logo.png" alt="SWE-EX Entreprenad AB" />
          </a>

          <nav className="desktop-nav" aria-label="Huvudmeny">
            <a href="#hem">Hem</a>
            <a href="#tjanster">Tjänster</a>
            <a href="#om">Om oss</a>
            <a href="#kontakt">Kontakt</a>
          </nav>

          <a className="nav-phone" href={phoneLink}>
            <Phone size={18} />
            {phone}
          </a>
        </div>
      </header>

      <main id="hem">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-content">
              <p className="eyebrow">SWE-EX ENTREPRENAD AB</p>
              <h1>Bygg, renovering, VVS och fastighetsskötsel</h1>
              <p className="hero-text">
                En pålitlig entreprenadpartner för privatpersoner, företag och fastighetsägare. Vi hjälper dig från idé och planering till färdigt arbete.
              </p>

              <div className="hero-actions">
                <a className="btn primary" href={phoneLink}>
                  <Phone size={20} />
                  Ring direkt
                </a>
                <a className="btn secondary" href={`mailto:${email}`}>
                  <Mail size={20} />
                  Skicka email
                </a>
              </div>

              <div className="trust-row">
                <span><CheckCircle size={18} /> Totalentreprenad</span>
                <span><CheckCircle size={18} /> El & VVS</span>
                <span><CheckCircle size={18} /> Skötsel</span>
              </div>
            </div>

            <div className="hero-panel">
              <div className="logo-card">
                <img src="/logo.png" alt="SWE-EX Entreprenad AB logga" />
              </div>
              <div className="quick-card">
                <Hammer />
                <div>
                  <strong>Helhetslösningar</strong>
                  <p>Byggprojekt, renovering och service samlat hos en aktör.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="features">
          <div className="container feature-grid">
            <div>
              <ShieldCheck />
              <strong>Trygg process</strong>
              <span>Tydliga steg, rak kommunikation och seriöst utförande.</span>
            </div>
            <div>
              <Clock />
              <strong>Effektivt arbete</strong>
              <span>Planering som håller projektet framåt.</span>
            </div>
            <div>
              <Hammer />
              <strong>Byggkänsla</strong>
              <span>Praktiskt, robust och anpassat efter fastigheten.</span>
            </div>
          </div>
        </section>

        <section id="tjanster" className="section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">VÅRA TJÄNSTER</p>
              <h2>Entreprenad och service för hela fastigheten</h2>
              <p>Vi erbjuder flexibla tjänster där varje uppdrag anpassas efter behov, omfattning och fastighetens förutsättningar.</p>
            </div>

            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card" key={service.title}>
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="om" className="about">
          <div className="container about-grid">
            
            <div className="about-content">
              <p className="eyebrow">OM OSS</p>
              <h2>Robust utförande med fokus på kvalitet</h2>
              <p>
                SWE-EX Entreprenad AB arbetar med bygg, renovering, el, VVS och fastighetsskötsel. Målet är att leverera ett tryggt, noggrant och professionellt resultat i varje projekt.
              </p>

              <div className="about-list">
                <div><CheckCircle /> Helhetsansvar från planering till färdigt arbete</div>
                <div><CheckCircle /> Anpassade lösningar för hem, lokaler och fastigheter</div>
                <div><CheckCircle /> Direkt kontakt via telefon och email</div>
              </div>
            </div>
          </div>
        </section>

        <section id="kontakt" className="contact">
          <div className="container contact-box">
            <div>
              <p className="eyebrow">KONTAKT</p>
              <h2>Berätta vad du behöver hjälp med</h2>
              <p>Ring eller skicka email så återkommer SWE-EX Entreprenad AB kring ditt projekt.</p>
            </div>

            <div className="contact-actions">
              <a href={phoneLink} className="contact-link">
                <Phone />
                <span>{phone}</span>
                <ArrowRight size={18} />
              </a>

              <a href={`mailto:${email}`} className="contact-link light">
                <Mail />
                <span>{email}</span>
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} SWE-EX Entreprenad AB</span>
          <span>Bygg • Renovering • El • VVS • Fastighetsskötsel</span>
        </div>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
