<template>
  <main class="form-signin w-25 m-auto mt-5">
    <form>
      <img
        :src="logo"
        alt="logo"
        class="logo"
        style="cursor: pointer"
        @click="toHomeHandler"
      />
      <h1 class="h3 mb-3 fw-normal mt-3">Register</h1>

      <Input
        :label="'Name'"
        :value="data.username"
        :type="'text'"
        :placeholder="'YourName'"
        class="formf-sdfsdfds"
      />
      <Input
        :label="'Email address'"
        :type="'email'"
        :placeholder="'name@example.com'"
        :value="data.email"
      />
      <Input
        :label="'Password'"
        :type="'password'"
        :placeholder="'Password'"
        :value="data.password"
      />
      <Button type="submit" :disabled="isLoading" @click="submitHandler"
        >Register</Button
      >
    </form>
  </main>
</template>

<script>
import logo from "@/assets/logo.png";

export default {
  name: "Register",
  data() {
    return {
      logo,
      data: {
        username: "Shoh Devdaw",
        email: "Shoh@examdawd.com",
        password: "905552836006",
      },
    };
  },
  computed: {
    isLoading() {
      return this.$store.state.auth.isLoading;
    },
  },
  methods: {
    submitHandler(e) {
      e.preventDefault();

      this.$store.commit("setLoading", this.data);
      this.$store.dispatch("register", this.data);
    },
    toHomeHandler() {
      return this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.logo {
  width: 100px;
  height: 75px;
  margin-left: 10px;
  border-radius: 5px;
}
</style>
