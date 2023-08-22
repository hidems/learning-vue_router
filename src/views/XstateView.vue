<template>
  <div class="">
    <h1>Xstate, Restaurants Rating Data</h1>
    <button
      @click="send('FETCH')"
      :disabled="!(state.matches('ready') || state.matches('initial'))"
    >
      FETCH
    </button>

    <button
      @click="send('RETRY')"
      :disabled="!state.matches('failure')"
    >
      RETRY
    </button>

    <span v-show="state.matches('loading')">...Loading...</span>
    <div
      v-if="
      state.matches('ready') ||
      state.matches('success') ||
      state.matches('loading')
    ">
      <div :key="restaurant.id" v-for="restaurant in state.context.restaurants">
        <h3>{{ restaurant.name }}</h3>
        <p>Rating - {{ restaurant.rating }} stars</p>
        <p>{{ restaurant.review }}</p>
      </div>
    </div>

    <div v-if="state.matches('failure')">
      <h4>Error loading restaurants</h4>
      <p>{{ state.context.error.message }}</p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useMachine } from 'xstate-vue2'
import fetchMachine from '@/assets/js/fetchMachine.js'

export default defineComponent ({
  name: 'XstateView',
  setup() {
    const { state, send } = useMachine(fetchMachine, { devTools: true })

    return {
      state,
      send,
    }
  },
})
</script>

<style scoped>
  h1 {
    color: Green;
  }
  button {
    margin: 10px;
  }
</style>
