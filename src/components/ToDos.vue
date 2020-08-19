<template>
  <div>
    <input type="text" placeholder="Write whatever..." v-model="value" />
    <button id="ost" @click="saveToArray">Add item</button>
    <ul>
      <li v-bind:id="item + 'li'" v-bind:key="item" v-for="item in items">
        {{item}}
        <button v-bind:id="item" @click="toTheTop(item)">To the top!</button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'ToDos',
      data: () => ({
        value: '',
        items: [],
    }),
    methods: {
      saveToArray() {
        this.items.push(this.value);
      },
      toTheTop(itemParam) {
    const newarray = this.items.filter(item => item !== itemParam)
    newarray.unshift(itemParam);
    this.items = newarray;    
},
    },
    }
</script>