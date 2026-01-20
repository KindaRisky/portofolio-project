<template>
  <div class="login-container d-flex align-items-center justify-content-center px-3">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-10 col-lg-8 shadow-lg overflow-hidden rounded-4 bg-dark-card d-flex flex-column flex-md-row p-0 border border-secondary">
          
          <div class="col-md-5 bg-primary p-5 text-white d-flex flex-column justify-content-center align-items-center text-center">
            <h2 class="fw-bold mb-3">Selamat Datang Kembali!</h2>
            <p class="mb-4">Tetap terhubung dengan tim Anda dan pantau performa bisnis dalam satu genggaman.</p>
            <div class="border-top border-white border-opacity-25 pt-4 w-100">
              <p class="small">Belum punya akun?</p>
              <button class="btn btn-outline-light rounded-pill px-4">Daftar Sekarang</button>
            </div>
          </div>

          <div class="col-md-7 p-4 p-lg-5">
            <div class="d-flex justify-content-between align-items-center mb-4">
              <h4 class="fw-bold text-white mb-0">Login Ke Akun</h4>
            </div>

            <div class="row g-2 mb-4">
              <div class="col-6">
                <button class="btn btn-outline-light border-secondary text-white w-100 py-2 d-flex align-items-center justify-content-center gap-2">
                  <i class="bi bi-google text-danger"></i> <span class="small">Google</span>
                </button>
              </div>
              <div class="col-6">
                <button class="btn btn-outline-light border-secondary text-white w-100 py-2 d-flex align-items-center justify-content-center gap-2">
                  <i class="bi bi-facebook text-primary"></i> <span class="small">Facebook</span>
                </button>
              </div>
            </div>

            <div class="position-relative mb-4">
              <hr class="border-secondary opacity-50">
              <span class="position-absolute top-50 start-50 translate-middle bg-dark-card px-3 text-secondary small">atau gunakan email</span>
            </div>

            <form @submit.prevent="handleLogin">
              <div class="mb-3">
                <label class="form-label small fw-bold text-light">Email Address</label>
                <div class="input-group">
                  <span class="input-group-text bg-dark border-secondary border-end-0 text-secondary"><i class="bi bi-envelope"></i></span>
                  <input 
                    type="email" 
                    class="form-control bg-dark border-secondary border-start-0 text-white" 
                    v-model="form.email"
                    :class="{'is-invalid': errors.email}"
                    placeholder="nama@email.com"
                  >
                  <div class="invalid-feedback">{{ errors.email }}</div>
                </div>
              </div>

              <div class="mb-3">
                <div class="d-flex justify-content-between">
                  <label class="form-label small fw-bold text-light">Password</label>
                  <a href="#" class="text-decoration-none small">Lupa Password?</a>
                </div>
                <div class="input-group">
                  <span class="input-group-text bg-dark border-secondary border-end-0 text-secondary"><i class="bi bi-lock"></i></span>
                  <input 
                    :type="showPassword ? 'text' : 'password'" 
                    class="form-control bg-dark border-secondary border-start-0 border-end-0 text-white" 
                    v-model="form.password"
                    :class="{'is-invalid': errors.password}"
                    placeholder="••••••••"
                  >
                  <span class="input-group-text bg-dark border-secondary border-start-0 cursor-pointer text-secondary" @click="showPassword = !showPassword">
                    <i :class="showPassword ? 'bi bi-eye-slash' : 'bi bi-eye'"></i>
                  </span>
                  <div class="invalid-feedback">{{ errors.password }}</div>
                </div>
              </div>

              <div class="mb-4 form-check">
                <input type="checkbox" class="form-check-input bg-dark border-secondary" id="remember" v-model="form.rememberMe">
                <label class="form-check-label small text-secondary" for="remember">Ingat perangkat ini</label>
              </div>

              <button type="submit" class="btn btn-primary w-100 py-2 fw-bold" :disabled="isLoading">
                <span v-if="isLoading" class="spinner-border spinner-border-sm me-2"></span>
                {{ isLoading ? 'Memproses...' : 'Masuk Sekarang' }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const showPassword = ref(false);
const isLoading = ref(false);

const form = reactive({
  email: '',
  password: '',
  rememberMe: false
});

const errors = reactive({
  email: '',
  password: ''
});

const handleLogin = () => {
  errors.email = '';
  errors.password = '';

  if (!form.email.includes('@')) {
    errors.email = 'Masukkan alamat email yang valid.';
    return;
  }
  if (form.password.length < 6) {
    errors.password = 'Password minimal 6 karakter.';
    return;
  }

  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
    localStorage.setItem('isAuthenticated', 'true');
    router.push('/dashboard');
  }, 1500);
};
</script>

<style scoped>
.login-container {
  min-height: 100vh;
  background-color: #0f111a;
}

.bg-dark-card {
  background-color: #1a1d27;
}

.cursor-pointer {
  cursor: pointer;
}

.btn-primary {
  background-color: #0d6efd;
  border: none;
  transition: all 0.3s;
}

.btn-primary:hover {
  background-color: #0b5ed7;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(13, 110, 253, 0.3);
}

.form-control:focus {
  box-shadow: none;
  border-color: #0d6efd;
  background-color: #1a1d27 !important;
  color: white;
}

input::placeholder {
  color: #6c757d !important;
}
</style>