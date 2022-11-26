<template>
  <div id="app">
    <div class="wrapper">
      <McvHeader />
      <McvMain />
      <McvFooter />
    </div>
  </div>
</template>

<script>
import McvHeader from './components/Header.vue'
import McvMain from './components/Main.vue'
import McvFooter from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    McvHeader,
    McvMain,
    McvFooter,
  },
}
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  position: relative;
  margin: 0;
  font-family: 'Open Sans';
  font-style: normal;
  margin-left: auto;
  margin-right: auto;
  -o-object-fit: cover;
  object-fit: cover;
  background-color: #fff;
}

.wrapper {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.wrapper > main {
  flex: 1 1 auto;
}
.wrapper > * {
  min-width: 0;
}

img {
  display: block;
  max-width: 100%;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  text-decoration: none;
  color: #000000;
  cursor: pointer;
}
a:hover {
  color: #58862d;
}
button {
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
}

.container {
  max-width: 1420px;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
}
@media (max-width: 876px) {
  .container {
    max-width: 800px;
  }
}
@media (max-width: 400px) {
  .container {
    max-width: 380px;
    padding: 0 0px;
  }
}
</style>
