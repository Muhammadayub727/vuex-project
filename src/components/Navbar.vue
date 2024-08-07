<template>
    <div class="d-flex flex-column flex-md-row align-items-center py-3 mb-4 border-bottom">
        <span class="logo-text ms-2 text-body-emphasis fw-bold d-none d-md-inline ">
            Ayub <span class="highlighted-text">Dev.</span>
        </span>

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
import { RouterLink } from 'vue-router';

export default {
    name: "Navbar",
    data() {
        return {
            modalOpen: false
        };
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
    color: #FFA857;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.highlighted-text {
    color: #FFFFFF;
    background: linear-gradient(90deg, #FFA500 0%, #FF8C00 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.custom-link {
    color: #FFA857;
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

.modal-button {
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
