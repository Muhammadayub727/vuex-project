<template>
    <div class="d-flex flex-column flex-md-row align-items-center py-3 mb-4 border-bottom">
        <a href="/" class="d-flex align-items-center link-body-emphasis text-decoration-none">
            <img :src="logo" alt="logo" class="logo" @click="toHomeHandler">
            <p class="logo-text">AyubDev</p>
        </a>

        <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto position-relative">
            <button class="ms-3 py-2 link-body-emphasis text-decoration-none custom-link border-0 bg-transparent" @click="toggleModal">
                Profile <i :class="modalOpen ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down'"></i>
            </button>
            <div v-if="modalOpen" class="dropdown-modal">
                <div class="dropdown-body">
                    <button class="modal-button mb-2">
                        <RouterLink :to="{ name: 'register' }" class="text-decoration-none text-body-emphasis">Register</RouterLink>
                    </button>
                    <button class="modal-button">
                        <RouterLink :to="{ name: 'login' }" class="text-decoration-none text-body-emphasis">Login</RouterLink>
                    </button>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import logo from '@/assets/logo.png'
import { RouterLink } from 'vue-router';

export default {
    name: "Navbar",
    data() {
        return {
            logo,
            modalOpen: false
        };
    },
    methods: {
        toHomeHandler() {
            return this.$router.push('/');
        }
    },
    methods: {
        toggleModal() {
            this.modalOpen = !this.modalOpen;
        }
    },
    components: { RouterLink }
}
</script>

<style scoped>
.logo-text {
    margin-left: 10px;
    font-size: 20px;
    font-weight: bold;
    margin-top: 15px;
}

.logo {
    width: 50px;
    height: 50px;
    margin-left: 10px;
    border-radius: 50%;
}

.custom-link {
    color: #6c757d;
}

.custom-link:hover {
    color: #5a6268; 
}

.dropdown-modal {
    position: absolute;
    top: 100%;
    right: 0;
    background: white;
    border: 1px solid #dee2e6;
    border-radius: 8px;
    width: 100px;
    z-index: 1000;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.dropdown-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #dee2e6;
    padding: 10px;
}

.dropdown-title {
    margin: 0;
    font-size: 16px;
}

.dropdown-body {
    padding: 10px;
    display: flex;
    flex-direction: column;
}

.btn-close {
    background: none;
    border: none;
    font-size: 18px;
    line-height: 1;
    cursor: pointer;
}
.modal-button{
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
    font-size: 14px;
    cursor: pointer;
    background-color: #e7e9eb;
    transition: background-color 0.3s ease;
    width: 100%;
}
</style>
