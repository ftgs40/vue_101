<template>
  <div class="hello">
    <h1>{{ message }}</h1>
    <h1>{{ name }}</h1>
    
    <div v-for="userItem in userList">
      name:{{ userItem.name }} <br />tel:{{userItem.tel}}
      <hr/>
    </div>

    <input v-model="textInput" />
    <div>{{ textInput }}</div>

    <br/>
    <button v-on:click="onClickToggle">toggle</button>
    <div v-if="isShow">
      แสดงข้อมูล
    </div>
    <!-- <CardName name="donut" lastname="nnn" tel="084564"></CardName>
    <CardName name="vvv" lastname="nnn" tel="084564"></CardName>
    <CardName name="bb" lastname="nnn" tel="084564"></CardName> -->
  </div>
</template>

<script>
import CardName from './CardName'

export default {
  name: 'HelloWorld',
  components: {
    CardName,
  },
  data() {
    return {
      textInput: '',
      message: 'hello',
      name: 'donut',
      isShow: false,
      userList: [
        {
          name: '01',
          tel: '0811',
        },
        {
          name: '02',
          tel: '08',
        }
      ],
    }
  },
  methods: {
    onClickToggle() {
      // console.log('--->', this.isShow)
      // console.log('-!!!', !this.isShow)
      this.isShow = !this.isShow
    }
  },
  watch: {
    textInput() {
      console.log('watch textInput')
    },
    isShow() {
      console.log('watch isShow')
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
