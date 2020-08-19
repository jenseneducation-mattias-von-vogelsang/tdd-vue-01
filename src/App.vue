<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <OnOff />
    <ButtonIncrement />
    <Option />
    <TextInput />
    <ToDos />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import OnOff from './components/OnOff.vue'
import ButtonIncrement from './components/ButtonIncrement.vue'
import Option from './components/Option.vue'
import TextInput from './components/TextInput.vue'
import ToDos from './components/ToDos.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    OnOff,
    ButtonIncrement,
    Option,
    TextInput,
    ToDos
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
