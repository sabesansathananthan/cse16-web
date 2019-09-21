<template>
  <div id="app">
    <body>
      <Navbar />
      <router-view/>
    </body>
  </div>
</template>

<script>
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>

</style>
