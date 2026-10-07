import Link from "next/link";

export default function KontakPage() {
  return (
    <main className="page-shell narrow">
      <nav className="topbar" aria-label="Main navigation">
        <div className="brand">Erwin</div>
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/tentang">Tentang</Link>
          <Link href="/kontak">Kontak</Link>
        </div>
      </nav>

      <section className="info-card">
        <p className="eyebrow">Kontak</p>
        <h1>Let&apos;s Connect</h1>

        <div className="contact-list">
          <div className="contact-item">
            <span>Email</span>
            <a href="mailto:erwin.setia@gmail.com">erwin.setia@gmail.com</a>
          </div>
          <div className="contact-item">
            <span>Instagram</span>
            <a href="https://instagram.com/erwin1112" target="_blank" rel="noreferrer">
              @erwin1112
            </a>
          </div>
          <div className="contact-item">
            <span>Twitter</span>
            <a href="https://x.com/erwin" target="_blank" rel="noreferrer">
              @erwin
            </a>
          </div>
        </div>

        <Link href="/" className="secondary-btn inline-btn">
          Kembali ke Beranda
        </Link>
      </section>
    </main>
  );
}