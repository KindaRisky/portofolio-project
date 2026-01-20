<template>
  <div class="landing-page bg-dark text-white">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm border-bottom border-secondary">
      <div class="container">
        <a class="navbar-brand fw-bold text-primary" href="#">NAMA<span class="text-white">PERUSAHAAN</span></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto align-items-center">
            <li class="nav-item"><a class="nav-link mx-2" href="#features">Fitur</a></li>
            <li class="nav-item"><a class="nav-link mx-2" href="#pricing">Harga</a></li>
            <li class="nav-item"><a class="nav-link mx-2" href="#about">Tentang Kami</a></li>
            <li class="nav-item ms-lg-3">
              <router-link to="/login" class="btn btn-outline-primary px-4 me-2">Masuk</router-link>
              <button class="btn btn-primary px-4">Daftar Gratis</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <header class="hero-section py-5 border-bottom border-secondary">
      <div class="container py-5">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <h1 class="display-4 text-white fw-bold mb-3">Kelola Bisnis Anda Lebih <span class="text-primary">Efisien</span></h1>
            <p class="lead text-light mb-4">
              Platform all-in-one untuk memantau performa tim, otomatisasi laporan, dan meningkatkan profitabilitas perusahaan Anda dalam satu dashboard terintegrasi.
            </p>
            <div class="d-grid gap-3 d-md-flex justify-content-md-start">
              <button class="btn btn-primary btn-lg px-4 me-md-2">Coba Gratis 14 Hari</button>
              <button class="btn btn-outline-light btn-lg px-4">Lihat Demo</button>
            </div>
            
          </div>
          <div class="col-lg-6">
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
                 class="img-fluid rounded-3 shadow-lg border border-secondary" alt="Dashboard Preview">
          </div>
        </div>
      </div>
    </header>

    <div class="py-4 bg-darker">
      <div class="container text-center">
        <p class="text-uppercase small fw-bold text-secondary mb-4">Dipercaya oleh Perusahaan Terkemuka</p>
        <div class="d-flex flex-wrap justify-content-center gap-5 opacity-75">
          <span class="h4 fw-bold text-white">GOOGLE</span>
          <span class="h4 fw-bold text-white">MICROSOFT</span>
          <span class="h4 fw-bold text-white">AMAZON</span>
          <span class="h4 fw-bold text-white">NETFLIX</span>
        </div>
      </div>
    </div>

    <section id="features" class="py-5 bg-dark">
      <div class="container py-5">
        <div class="text-center mb-5">
          <h2 class="fw-bold text-white">Fitur Unggulan Kami</h2>
          <p class="text-secondary">Didesain khusus untuk kebutuhan skalabilitas bisnis modern.</p>
        </div>
        <div class="row g-4">
          <div v-for="feature in features" :key="feature.title" class="col-md-4">
            <div class="card h-100 border-secondary bg-dark-card shadow-sm p-3">
              <div class="card-body">
                <div class="feature-icon bg-primary bg-opacity-25 text-primary mb-3 p-3 rounded-circle d-inline-block">
                  <i :class="feature.icon"></i>
                </div>
                <h5 class="fw-bold text-white">{{ feature.title }}</h5>
                <p class="text-secondary">{{ feature.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="pricing" class="py-5 bg-darker">
      <div class="container py-5">
        <div class="text-center mb-5">
          <h2 class="fw-bold text-white">Pilih Paket Sesuai Kebutuhan</h2>
        </div>
        <div class="row g-4 justify-content-center">
          <div class="col-md-4">
            <div class="card shadow-sm border-secondary bg-dark-card text-white">
              <div class="card-body p-4">
                <h5 class="fw-bold">Starter</h5>
                <h2 class="fw-bold my-3">Gratis</h2>
                <ul class="list-unstyled mb-4 text-secondary">
                  <li><i class="bi bi-check text-success me-2"></i> 5 Proyek Aktif</li>
                  <li><i class="bi bi-check text-success me-2"></i> Dashboard Standar</li>
                  <li><i class="bi bi-check text-success me-2"></i> Community Support</li>
                </ul>
                <button class="btn btn-outline-primary w-100">Pilih Paket</button>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card shadow border-primary border-2 bg-dark-card text-white">
              <div class="card-body p-4 position-relative">
                <span class="badge bg-primary position-absolute top-0 end-0 m-3">Populer</span>
                <h5 class="fw-bold">Business</h5>
                <h2 class="fw-bold my-3">Rp 199k<small class="fs-6 text-secondary">/bln</small></h2>
                <ul class="list-unstyled mb-4 text-secondary">
                  <li><i class="bi bi-check text-success me-2"></i> Proyek Tak Terbatas</li>
                  <li><i class="bi bi-check text-success me-2"></i> Analitik Lanjutan</li>
                  <li><i class="bi bi-check text-success me-2"></i> Prioritas Support 24/7</li>
                </ul>
                <button class="btn btn-primary w-100">Mulai Berlangganan</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="bg-black text-white py-5 border-top border-secondary">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 mb-4">
            <h5 class="fw-bold mb-3 text-primary">NAMAPERUSAHAAN</h5>
            <p class="text-secondary">Membantu bisnis di seluruh dunia tumbuh lebih cepat melalui teknologi automasi cerdas.</p>
          </div>
          <div class="col-6 col-lg-2 mb-3">
            <h6 class="fw-bold">Produk</h6>
            <ul class="nav flex-column">
              <li><a href="#" class="text-secondary nav-link p-0 mb-2">Fitur</a></li>
              <li><a href="#" class="text-secondary nav-link p-0 mb-2">Integrasi</a></li>
              <li><a href="#" class="text-secondary nav-link p-0 mb-2">Update</a></li>
            </ul>
          </div>
          <div class="col-6 col-lg-2 mb-3">
            <h6 class="fw-bold">Perusahaan</h6>
            <ul class="nav flex-column">
              <li><a href="#" class="text-secondary nav-link p-0 mb-2">Tentang</a></li>
              <li><a href="#" class="text-secondary nav-link p-0 mb-2">Karir</a></li>
              <li><a href="#" class="text-secondary nav-link p-0 mb-2">Kontak</a></li>
            </ul>
          </div>
        </div>
        <hr class="my-4 border-secondary">
        <div class="text-center text-secondary small">
          © 2026 NamaPerusahaan Inc. All rights reserved.
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const features = [
  { title: "Real-time Tracking", desc: "Pantau kemajuan tim Anda secara instan dari mana saja.", icon: "bi bi-speedometer2" },
  { title: "Smart Automation", desc: "Otomatiskan tugas berulang untuk menghemat waktu berharga.", icon: "bi bi-robot" },
  { title: "Secure Cloud Storage", desc: "Data Anda dienkripsi dengan standar keamanan perbankan.", icon: "bi bi-shield-lock" }
];
</script>

<style scoped>
.bg-darker {
  background-color: #121212;
}
.bg-dark-card {
  background-color: #1e1e1e;
}
.hero-section {
  /* Gradien gelap: Hitam ke abu-abu gelap */
  background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
}
.feature-icon {
  font-size: 1.5rem;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav-link {
  color: #adb5bd !important;
  transition: color 0.3s ease;
}
.nav-link:hover {
  color: #fff !important;
}
.card {
  transition: transform 0.3s ease, border-color 0.3s ease;
}
.card:hover {
  transform: translateY(-5px);
  border-color: #0d6efd !important;
}
</style>