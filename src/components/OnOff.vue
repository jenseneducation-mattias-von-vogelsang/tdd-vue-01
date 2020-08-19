<template>
  <div class="buttonWrapper">
    <button @click="changeText(toggle)">{{text}}</button>
  </div>
</template>
<script>
export default {
  name: 'OnOff',
  data: () => ({
    text: 'On',
    toggle: false,
  }),
  methods: {
    changeText(toggle) {
      if(toggle) {
        this.text = 'On'
        this.toggle = false;
      } else {
        this.toggle = true;
        this.text = 'Off'
      }
    }
  }
}
</script>