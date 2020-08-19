<template>
  <div>
    <input type="text" v-bind:placeholder="this.text" @input="makeUpperCase(value)" v-model="value" />
  </div>
</template>
<script>
export default {
  name: 'TextInput',
      data: () => ({
        text: '',
        value: '',
    }),
    methods: {
      changeText() {
        this.text = 'Anonymous';
      },
      makeUpperCase(string) {
        this.value = string.charAt(0).toUpperCase() + string.substring(1);
      }
      },
      mounted() {
        this.changeText();
      }
    }
</script>