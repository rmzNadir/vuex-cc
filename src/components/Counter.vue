<template>
  <h1>Vuex Counter</h1>
  <h1 class="counter">{{ counter }}</h1>
  <button @click="substractFromCounter(value)">-</button>
  <input type="number" v-model="value" />
  <button @click="addToCounter(value)">+</button>
  <div>
    <button class="btn" @click="addRandomNumber()">Add by Random Number</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  data() {
    return {
      value: 1,
    };
  },
  methods: {
    ...mapMutations(['addToCounter', 'substractFromCounter']),
    ...mapActions(['addRandomNumber']),
  },
  computed: {
    ...mapState(['counter']),
  },
};
</script>

<style scoped>
.counter {
  font-size: 5rem;
}

.btn {
  border-radius: 0.5rem;
  width: auto;
  background-color: #41b983;
  margin-top: 1rem;
  color: white;
  cursor: pointer;
  padding: 0 1rem;
}

button {
  border-radius: 100%;
  border: none;
  width: 2rem;
  height: 2rem;
  font-weight: 700;
  cursor: pointer;
}

input {
  padding: 0.4rem;
  margin: 0 0.5rem;
  text-align: center;
}
</style>
