<template>
  <b-container>
    <h1>Edit page {{$route.params.id}}</h1>
    <FormUser v-bind:callback="editUser" v-bind:userData="userData"></FormUser>
  </b-container>
</template>

<script>
import axios from 'axios'
import FormUser from "../components/FormUser";

export default {
  components: {
    FormUser,
  },
  data() {
    return {
      userData: {}
    }
  },
  created() {
    // console.log(this.$route.params.id)
    this.getUserByID(this.$route.params.id)
  },
  methods: {
    async getUserByID(id) {
      const result = await axios.get('http://vue-api.nncarrent.com/getUserByID.php?id=' + id)
      console.log(result.data)
      this.userData = result.data
    },
    async editUser(userData) {
      console.log('edit ->')
      const result = await axios.post('http://vue-api.nncarrent.com/updateUserByID.php?id=' + this.$route.params.id, {
        firstname: userData.firstname,
        lastname: userData.lasttname,
        age: userData.age,
        tel: userData.tel,
      })
      console.log(result.data)
      this.$router.push('/')
    }
  }

}
</script>

<style>

</style>