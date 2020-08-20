<template>
  <div>
    <form>
      <input type="text" placeholder="Write whatever..." v-model="inputValue" />
      <button id="addToDo" @click="saveToArray()">Add item</button>
    </form>
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
      data(){ return({
        inputValue: '',
        items: [],
    })},
    methods: {
      saveToArray() {
        this.items.push(this.inputValue);
      },
      toTheTop(itemParam) {
        const newarray = this.items.filter(item => item !== itemParam)
        newarray.unshift(itemParam);
        this.items = newarray;    
      },
    },
    }
</script>