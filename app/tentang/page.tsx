import Link from "next/link";

export default function TentangPage() {
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
        <p className="eyebrow">Tentang Saya</p>
        <h1>Erwin Setiawan</h1>
        <div className="detail-list">
          <div>
            <span>Nama</span>
            <strong>Erwin Setiawan</strong>
          </div>
          <div>
            <span>Hobi</span>
            <strong>Membaca, menulis, dan belajar teknologi baru</strong>
          </div>
          <div>
            <span>Asal</span>
            <strong>Depok, Jawa Barat</strong>
          </div>
          <div>
            <span>Motivasi</span>
            <strong>
              Saya ingin terus berkembang melalui ilmu, kerja keras, dan
              kontribusi positif bagi lingkungan sekitar.
            </strong>
          </div>
        </div>

        <Link href="/kontak" className="primary-btn inline-btn">
          Hubungi Saya
        </Link>
      </section>
    </main>
  );
}