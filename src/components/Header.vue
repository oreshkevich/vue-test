<template>
  <header class="header">
    <div class="container">
      <div class="header__logo logo">
        <a href="#" class="logo__link">
          <h1 class="header__title">LOGO</h1>
        </a>

        <nav class="header__nav nav">
          <ul class="nav__item">
            <li>
              <a href="#" class="nav__link">
                <img src="../assets/svg/person.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="#" class="nav__link"
                ><img src="../assets/svg/like.svg" alt=""
              /></a>
            </li>
            <li>
              <a href="#" class="nav__link"
                ><img src="../assets/svg/bag.svg" alt=""
              /></a>
            </li>
          </ul>
        </nav>

        <div
          class="hamburger"
          :class="{'hamburger-active': isActive}"
          @click="toggleActive"
        >
          <span class="hamburger-span"></span>
          <span class="hamburger-span"></span>
          <span class="hamburger-span"></span>
        </div>
      </div>
    </div>
    <!-- /.container -->
  </header>
</template>

<script>
export default {
  name: 'McvHeader',
  data() {
    return {
      isActive: false,
    }
  },
  methods: {
    toggleActive() {
      this.isActive = !this.isActive
    },
  },
}
</script>

<style scoped>
.header {
  margin: 12px 0;
}
.header__title {
  font-family: 'Open Sans';
  font-weight: 700;
  font-size: 22px;
  line-height: 16px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #000000;
}
.header__logo {
  display: flex;
  justify-content: space-between;
}

.nav {
  margin-right: 11px;
}
.nav__item {
  display: flex;
}

.nav__link img {
  padding-left: 32px;
}

.hamburger {
  margin-top: -5px;
  display: none;
  /* display: block; */
}
.hamburger {
  display: block;
  position: absolute;
  right: 22px;
  top: 23px;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 50;
  width: 18px;
  height: 12px;
}

.hamburger-span {
  display: block;
  height: 2.31px;
  width: 100%;
  background-color: #333333;
  margin-bottom: 4.54px;
  transition: 0.5s all;
}

.hamburger-active {
  margin-top: 2px;
}

.hamburger-active .hamburger-span {
  margin-bottom: -2px;
}

.hamburger-active .hamburger-span:nth-child(1) {
  transform: translateY(3px) rotate(-45deg);
}

.hamburger-active .hamburger-span:nth-child(2) {
  display: none;
}

.hamburger-active .hamburger-span:nth-child(3) {
  transform: translateY(3px) rotate(45deg);
}

@media (max-width: 876px) {
  .nav {
    margin-right: 49px;
  }
}
</style>
