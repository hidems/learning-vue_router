<template>
  <div>
    <h1>Count Up by Emit vs Props</h1>
    <CountUp/>
    <router-link to="/emit">Go Back</router-link><br> 
    <router-link to="/">Go Home</router-link><br> 
  </div>
</template>

<script>
import CountUp from '@/components/emit/CountUp.vue'

export default {
  name: 'EmitCountUp',
  components: {
    CountUp
  }
}
</script>

<style>

</style>