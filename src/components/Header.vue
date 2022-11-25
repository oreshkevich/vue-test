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
      </div>
    </div>
    <!-- /.container -->
  </header>
</template>

<script>
export default {
  name: 'McvHeader',
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
</style>
