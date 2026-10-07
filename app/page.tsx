import Link from "next/link";

export default function Home() {
  return (
    <main className="page-shell">
      <nav className="topbar" aria-label="Main navigation">
        <div className="brand">Erwin</div>
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/tentang">Tentang</Link>
          <Link href="/kontak">Kontak</Link>
        </div>
      </nav>

      <section className="hero-card">
        <div className="hero-copy">
          <p className="eyebrow">Hai, saya</p>
          <h1>Erwin Setiawan</h1>
          <p className="lead">
            Saya adalah karyawan yang tertarik pada teknologi, desain, dan
            pengembangan produk digital yang bermanfaat untuk orang banyak.
          </p>

          <div className="cta-group">
            <Link href="/tentang" className="primary-btn">
              Lihat Profil
            </Link>
            <Link href="/kontak" className="secondary-btn">
              Hubungi Saya
            </Link>
          </div>
        </div>

        <div className="profile-panel" aria-label="Profile summary">
          <div className="avatar">ES</div>
          <div className="meta-row">
            <span>Asal</span>
            <strong>Depok, Jawa Barat</strong>
          </div>
          <div className="meta-row">
            <span>Hobi</span>
            <strong>Membaca &amp; belajar teknologi</strong>
          </div>
          <div className="meta-row">
            <span>Status</span>
            <strong>Karyawan</strong>
          </div>
        </div>
      </section>
    </main>
  );
}
