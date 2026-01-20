<template>
  <div class="d-flex" id="wrapper">
    <div class="bg-black text-white border-end border-secondary" id="sidebar-wrapper" :class="{ 'toggled': isToggled }">
      <div class="sidebar-heading border-bottom border-secondary p-4">
        <h5 class="fw-bold mb-0 text-primary">NAMA<span class="text-white">PERUSAHAAN</span></h5>
      </div>
      <div class="list-group list-group-flush py-3">
        <a href="#" class="list-group-item list-group-item-action bg-black text-white active border-0 px-4 py-3">
          <i class="bi bi-speedometer2 me-3"></i>Dashboard
        </a>
        <a href="#" class="list-group-item list-group-item-action bg-black text-white border-0 px-4 py-3">
          <i class="bi bi-people me-3"></i>Pengguna
        </a>
        <a href="#" class="list-group-item list-group-item-action bg-black text-white border-0 px-4 py-3">
          <i class="bi bi-wallet2 me-3"></i>Transaksi
        </a>
        <a href="#" class="list-group-item list-group-item-action bg-black text-white border-0 px-4 py-3">
          <i class="bi bi-graph-up me-3"></i>Laporan
        </a>
        <a href="#" class="list-group-item list-group-item-action bg-black text-white border-0 px-4 py-3">
          <i class="bi bi-gear me-3"></i>Pengaturan
        </a>
        <div class="mt-5 px-4">
          <router-link to="/" class="btn btn-outline-danger btn-sm w-100">
            <i class="bi bi-box-arrow-left me-2"></i>Keluar
          </router-link>
        </div>
      </div>
    </div>

    <div id="page-content-wrapper" class="flex-grow-1 bg-darker">
      <nav class="navbar navbar-expand-lg bg-dark border-bottom border-secondary px-4 py-3">
        <button class="btn btn-dark border border-secondary" @click="toggleSidebar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="ms-auto d-flex align-items-center text-white">
          <div class="me-3 d-none d-md-block text-end">
            <p class="mb-0 small fw-bold">Administrator</p>
            <p class="mb-0 x-small text-secondary">admin@namaperusahaan.com</p>
          </div>
          <img src="https://ui-avatars.com/api/?name=Admin&background=0d6efd&color=fff" 
               class="rounded-circle border border-secondary" width="40" alt="Avatar">
        </div>
      </nav>

      <div class="container-fluid p-4">
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 class="h3 mb-0 text-white fw-bold">Ringkasan Statistik</h1>
          <button class="btn btn-primary btn-sm shadow-sm">
            <i class="bi bi-download me-2"></i>Unduh Laporan
          </button>
        </div>

        <div class="row g-4 mb-4">
          <div v-for="stat in status" :key="stat.title" class="col-xl-3 col-md-6">
            <div class="card bg-dark border-0 shadow-lg h-100 py-2 border-start border-4" :class="'border-' + stat.color">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="col me-2">
                    <div class="text-xs font-weight-bold text-uppercase mb-1 text-secondary small fw-bold">
                      {{ stat.title }}
                    </div>
                    <div class="h5 mb-0 font-weight-bold text-white fs-4">{{ stat.value }}</div>
                  </div>
                  <div class="col-auto">
                    <i :class="stat.icon" class="fs-2 text-white opacity-25"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-8 mb-4">
            <div class="card bg-dark border-0 shadow-lg">
              <div class="card-header bg-dark py-3 border-bottom border-secondary d-flex justify-content-between align-items-center text-white">
                <h6 class="m-0 font-weight-bold fw-bold">Transaksi Terbaru</h6>
                <span class="badge bg-primary">Update: Baru Saja</span>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table table-dark table-hover align-middle mb-0">
                    <thead class="text-secondary">
                      <tr class="border-secondary">
                        <th>ID Pesanan</th>
                        <th>Pelanggan</th>
                        <th>Produk</th>
                        <th>Status</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody class="border-secondary">
                      <tr v-for="order in recentOrders" :key="order.id" class="border-secondary">
                        <td class="text-info">#{{ order.id }}</td>
                        <td class="text-white">{{ order.customer }}</td>
                        <td class="text-white">{{ order.product }}</td>
                        <td>
                          <span class="badge" :class="order.statusClass">{{ order.status }}</span>
                        </td>
                        <td class="fw-bold text-white">{{ order.total }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 mb-4">
            <div class="card bg-dark border-0 shadow-lg h-100">
              <div class="card-header bg-dark py-3 border-bottom border-secondary text-white">
                <h6 class="m-0 font-weight-bold fw-bold">Sumber Trafik</h6>
              </div>
              <div class="card-body text-white">
                <div v-for="source in trafficSources" :key="source.name" class="mb-4">
                  <div class="d-flex justify-content-between mb-1 small text-secondary">
                    <span>{{ source.name }}</span>
                    <span>{{ source.value }}%</span>
                  </div>
                  <div class="progress bg-black" style="height: 8px;">
                    <div class="progress-bar" :class="source.bg" role="progressbar" :style="{ width: source.value + '%' }"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isToggled = ref(false);

const toggleSidebar = () => {
  isToggled.value = !isToggled.value;
};

const status = [
  { title: "Pendapatan (Bulanan)", value: "Rp 45.200.000", icon: "bi bi-calendar-check", color: "primary" },
  { title: "Total Pengguna", value: "2.543", icon: "bi bi-people", color: "success" },
  { title: "Tugas Selesai", value: "85%", icon: "bi bi-clipboard-check", color: "info" },
  { title: "Pesan Masuk", value: "18", icon: "bi bi-chat-dots", color: "warning" }
];

const recentOrders = [
  { id: "1", customer: "Budi Sentosa", product: "Produk A", status: "Selesai", statusClass: "bg-success", total: "Rp 199.000" },
  { id: "2", customer: "Rizky Ananda", product: "Produk B", status: "Pending", statusClass: "bg-warning text-dark", total: "Rp 500.000" },
  { id: "3", customer: "Rizky Ananda", product: "Produk C", status: "Dibatalkan", statusClass: "bg-danger", total: "Rp 0" },
  { id: "4", customer: "Rizky Ananda", product: "Produk A", status: "Selesai", statusClass: "bg-success", total: "Rp 199.000" }
];

const trafficSources = [
  { name: "Google Search", value: 45, bg: "bg-primary" },
  { name: "Social Media", value: 30, bg: "bg-info" },
  { name: "Referral", value: 15, bg: "bg-success" },
  { name: "Lainnya", value: 10, bg: "bg-secondary" }
];
</script>

<style scoped>
#wrapper {
  overflow-x: hidden;
}

#sidebar-wrapper {
  min-height: 100vh;
  width: 260px;
  transition: margin 0.25s ease-out;
}

.bg-darker {
  background-color: #12141b;
}

#page-content-wrapper {
  min-width: 0;
  width: 100%;
}

@media (max-width: 768px) {
  #sidebar-wrapper {
    margin-left: -260px;
  }
  #sidebar-wrapper.toggled {
    margin-left: 0;
  }
}

.list-group-item {
  transition: all 0.3s;
}

.list-group-item:hover {
  background-color: #1a1d27 !important;
  color: #0d6efd !important;
}

.list-group-item.active {
  background-color: #0d6efd !important;
  border-left: 4px solid #fff !important;
}

.card {
  border-radius: 12px;
}

.table-dark {
  --bs-table-bg: transparent;
}

.x-small {
  font-size: 0.75rem;
}
</style>