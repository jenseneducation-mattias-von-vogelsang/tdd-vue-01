<template>
  <div>
    <p>Times clicked: {{ count }}</p>
    <button @click="increment">increment</button>
    <button @click="decrease">decrease</button>
  </div>
</template>

<script>
  export default {
    name: 'ButtonIncrement',
    data: () => ({
      count: 0,
    }),

    methods: {
      increment() {
        this.count++
      },
      decrease() {
          this.count--
      }
    },
  }
</script>