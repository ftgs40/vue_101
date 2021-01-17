<template>
  <div class="text-left">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">

      <b-form-group id="input-group-2" label="Firstname:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.firstname"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Lastname:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.lasttname"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Age:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.age"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Tel:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.tel"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>

export default {
  props: {
    callback: Function,
    userData: {
      type: Object,
      default: {}
    },
  },
  data() {
    return {
      form: {
        firstname: '',
        lasttname: '',
        age: '',
        tel: '',
      },
      show: true
    }
  },
  watch: {
    userData(data) {
      console.log('watch->', data)
      const {
        firstname,
        lastname,
        age,
        tel,
      } = data
      this.form.firstname = firstname
      this.form.lasttname = lastname
      this.form.age = age
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      const formData = this.form
      this.callback(this.form)
      this.form.firstname = ''
      this.form.lasttname = ''
      this.form.age = ''
      this.form.tel = ''
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
    }
  }
}
</script>

<style>

</style>