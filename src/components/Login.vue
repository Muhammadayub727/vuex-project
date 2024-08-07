<template>
    <main class="form-signin w-25 m-auto mt-5">
  <form >
    <img :src="logo" alt="logo" class="logo" style="cursor: pointer;" @click="toHomeHandler">
    <h1 class="h3 mb-3 fw-normal mt-3">Login</h1>
    <Input :type="'email'" :label="'Email address'" :placeholder="'name@example.com'"/>
    <Input :type="'password'" :label="'Password'" :placeholder="'Password'"/>    
    <Button type="submit">Login</Button>
  </form>
</main>
</template>

<script>
import logo from '@/assets/logo.png'

export default {
    name: "Login",
    data() {
        return {
            logo
        };
    },
    methods: {
        toHomeHandler() {
            return this.$router.push('/');
        }
    }
}
</script>

<style scoped>
  
.logo {
    width: 100px;
    height: 75px;
    margin-left: 10px;
    border-radius: 5px;
}
</style>