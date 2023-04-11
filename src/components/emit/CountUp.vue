<template>
  <div>
    <div>{{ count }}</div>
    <CountUpButtonEmit @countUpEmit="addCount"/>
    <CountUpButtonProps :handleAddNumber="addCount"/>
  </div>
</template>

<script>
import CountUpButtonEmit from '@/components/emit/CountUpButtonEmit.vue'
import CountUpButtonProps from '@/components/emit/CountUpButtonProps.vue'

export default {
  name: 'CountUp',
  components: {
    CountUpButtonEmit,
    CountUpButtonProps,
  },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    addCount(num) {
      this.count += num
    }
  }
}
</script>

<style>

</style>