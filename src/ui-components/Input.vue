<template>
  <div class="form-floating mt-3">
    <input
      :type="type"
      class="form-control"
      autocomplete="off"
      id="floatingInput"
      :placeholder="placeholder"
      :value="value"
    />
    <label for="floatingInput">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    label: String,
    type: String,
    placeholder: String,
    value: String,
  },
};
</script>

<style>
</style>