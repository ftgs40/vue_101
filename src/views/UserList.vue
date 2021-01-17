<template>
  <b-container class="bv-example-row">
    <h1>User</h1>
    <b-row>
      <b-col>
        Add User
        <FormUser v-bind:callback="createUser" v-bind:userData="user"></FormUser>
      </b-col>
      <b-col>
        <b-table striped hover :items="items" :fields="fields">
          <template #cell(delete)="data">
            <a href="javascript:void(0)" v-on:click="deleteUser(data.item.id)">ลบ</a>
          </template>
          <template #cell(edit)="data">
            <a href="javascript:void(0)" v-on:click="goToEdit(data.item.id)">แก้ไข</a>
          </template>
        </b-table>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import axios from 'axios'
import FormUser from '../components/FormUser'

export default {
  components: {
    FormUser,
  },
  data() {
    return {
      user:{},
      fields: [
        {
          key: 'firstname',
          label: 'ชื่อ',
        },
        {
          key: 'lastname',
          label: 'สกุล',
        },
        {
          key: 'age',
          label: 'อายุ',
        },
        {
          key: 'delete',
          label: 'ลบ',
        },
        {
          key: 'edit',
          label: 'แก้ไข',
        }
      ],
      items: []
    }
  },
  created() {
    this.getUserAll()
  },
  methods: {
    goToEdit(id) {
      console.log('->', id)
      this.$router.push('/user_edit/' + id)
    },
    async deleteUser(id) {
      console.log(id)
      const result = await axios.post(' http://vue-api.nncarrent.com/deleteUserByID.php?id=' + id)
      console.log('success->', result.data);
      if (result.data && result.data.success === true) {
        this.getUserAll()
      }
    },
    async createUser(userData) {
      const result = await axios.post('http://vue-api.nncarrent.com/createUser.php', {
        firstname: userData.firstname,
        lastname: userData.lasttname,
        age: userData.age,
        tel: userData.tel,
      })
      console.log('success->', result.data);
      if (result.data && result.data.success === true) {
        this.getUserAll()
      }
    },
    async getUserAll() {
      const result = await axios.get('http://vue-api.nncarrent.com/getUserList.php')
      console.log(result.data)
      this.items = result.data
    }
  }


}
</script>

<style>

</style>