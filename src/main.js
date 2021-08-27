import axios from 'axios';
import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';

const store = createStore({
  state() {
    return {
      counter: 0,
      history: [0],
    };
  },
  mutations: {
    addToCounter(state, payload) {
      state.counter = state.counter + payload;
      state.history = [...state.history, payload];
    },
    substractFromCounter(state, payload) {
      state.counter = state.counter - payload;
      state.history = [...state.history, payload];
    },
  },
  actions: {
    async addRandomNumber(context) {
      const { data } = await axios.get(
        'https://www.random.org/integers/?num=1&min=-1000&max=1000&col=1&base=10&format=plain&rnd=new'
      );

      context.commit('addToCounter', data);
    },
  },
  getters: {
    activeIndexes: (state) => (payload) => {
      let indexes = [];
      state.history.forEach((n, i) => {
        n === payload && indexes.push(i);
      });
      return indexes;
    },
  },
});

createApp(App)
  .use(store)
  .mount('#app');
