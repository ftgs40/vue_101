<template>
  <div>
    <p>name: {{ name }}</p>
    <p>lastname: {{ lastname }}</p>
    <p>tel: {{ tel }}</p>
  </div>
</template>

<script>
export default {
  name: 'CardName',
  props: {
    // name: String,
    // lastname: String,
    // tel: String,
    id: null
  },
}
</script>

<style>

</style>