<template>
  <header class="header" ref="myHeader" :class="{hide: isHeader}">
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
          class="nav-active"
          :class="{vigorous: isActive}"
          @click="toggleActive"
        >
          <ul class="nav__link">
            <li>
              <a href="#" class="navigation-link">постельное белье</a>
            </li>
            <li>
              <a href="#" class="navigation-link">одежда для дома</a>
            </li>
            <li>
              <a href="#" class="navigation-link">Одежда для улицы</a>
            </li>
            <li>
              <a href="#" class="navigation-link">ВЫход</a>
            </li>
          </ul>
        </div>
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
      isNavActive: false,
      reached: false,
      lastScroll: 0,
      defaultOffset: 60,
      isHeader: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.headerScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.headerScroll)
  },
  methods: {
    toggleActive() {
      this.isActive = !this.isActive
    },
    scrollPosition() {
      return window.pageYOffset || document.documentElement.scrollTop
    },
    headerScroll() {
      window.addEventListener('scroll', () => {
        if (
          this.scrollPosition() > this.lastScroll &&
          !this.isHeader &&
          this.scrollPosition() > this.defaultOffset
        ) {
          this.isHeader = true
        } else if (this.scrollPosition() < this.lastScroll && this.isHeader) {
          this.isHeader = false
        }
        this.lastScroll = this.scrollPosition()
      })
    },
  },
}
</script>

<style scoped>
.header {
  padding: 12px 0;
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
.header {
  z-index: 3;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  transition: transform 0.1s linear;
}

.header.hide {
  transform: translateY(-50px);
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
.navigation-link {
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #333333;
  display: flex;
  padding-left: 30px;
  padding-bottom: 30px;
}
.nav-active {
  display: none;
  position: absolute;
  top: 0;
  top: 0;
  right: -100%;
  width: 375px;
  height: 277px;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: 0.6s all;
}
.hamburger {
  margin-top: -5px;
  display: none;
}

@media (max-width: 876px) {
  .nav__link {
    margin-top: 80px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 9px;
    flex-direction: column;
    padding: 0;
    align-items: center;
  }

  .vigorous {
    display: block;
    right: 0;
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
  .nav {
    margin-right: 49px;
  }
}
@media (max-width: 400px) {
  .logo {
    padding-left: 20px;
  }
  .nav {
    margin-right: 73px;
  }
}
</style>
