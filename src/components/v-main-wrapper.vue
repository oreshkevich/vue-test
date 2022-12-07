<template>
  <div class="wrapper">
    <McvHeader />
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <McvFooter />
  </div>
</template>

<script>
import McvHeader from './Header.vue'
import McvFooter from './Footer.vue'

export default {
  name: 'v-main-wrapper',
  components: {
    McvHeader,
    McvFooter,
  },
  props: {},
  data() {
    return {
      title: 'Main wrapper',
    }
  },
  computed: {},
  methods: {},
  watch: {},
}
</script>
