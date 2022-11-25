<template>
  <footer class="footer">
    <div class="grid">
      <div class="container">
        <div class="grid__body">
          <div class="grid__item">
            <ul class="footer__nav footer__nav_catalog">
              <li class="footer__nav-item">
                <span class="footer__nav-link">покупателям</span>
                <ul class="footer__subnav">
                  <li class="footer__subnav-item">
                    <a href="#" class="footer__subnav-link">Каталог</a>
                  </li>
                  <li class="footer__subnav-item">
                    <a href="#" class="footer__subnav-link">Акции</a>
                  </li>
                  <li class="footer__subnav-item">
                    <a href="#" class="footer__subnav-link">Бренды</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="grid__item">
            <ul class="footer__nav">
              <li class="footer__nav-item">
                <span class="footer__nav-link">о нас</span>
                <ul class="footer__subnav">
                  <li class="footer__subnav-item">
                    <a href="#" class="footer__subnav-link">О компании</a>
                  </li>
                  <li class="footer__subnav-item">
                    <a href="#" class="footer__subnav-link">Новости</a>
                  </li>
                  <li class="footer__subnav-item">
                    <a href="#" class="footer__subnav-link">Команда</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="grid__item">
            <h3 class="footer__nav-link">
              Узнайте первыми о новинках и акциях
            </h3>
            <form class="form" action="post" @submit="submitHandler">
              <div class="form__wrapper" :class="{invalid: errors.name}">
                <input
                  type="email"
                  id="email"
                  name="email"
                  maxlength="30"
                  required=""
                  class="form__input"
                  placeholder="Адрес электронной почты"
                  v-model.trim="name"
                />
                <small v-if="errors.name">{{ errors.name }}</small>
                <button class="btn-reset"></button>
                <button type="submit" class="footer__link">Подписаться</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'McvFooter',
  data() {
    return {
      name: '',
      errors: {
        name: null,
      },
    }
  },
  methods: {
    formIsValid() {
      const res =
        /^([a-zA-Z][a-zA-Z0-9-_]{2,15})*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/
      let isValid = true
      if (!res.test(this.name)) {
        this.errors.name = 'Введите корректный emal'
        isValid = false
      } else {
        this.errors.name = null
      }
      return isValid
    },
    submitHandler(event) {
      event.preventDefault()
      if (this.formIsValid()) {
        console.log('форма отправлена')
      }
    },
  },
}
</script>

<style scoped>
.grid__body {
  display: grid;
  grid-template-columns: 448px 333px 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'one two three';
  grid-gap: 20px;
}
.footer__nav-link {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #333333;
}

.footer__subnav-item {
  padding-top: 5px;
}
.footer__subnav-link {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.04em;
  color: #333333;
}
.footer__nav_catalog {
  padding-left: 116px;
}
.footer__subnav {
  padding-top: 9px;
}
.form__wrapper {
  position: relative;
  max-width: 452px;
  padding-top: 32px;
}
.form__input {
  position: relative;
  width: 452px;
  height: 44px;
  padding: 5px 14px;
  background: transparent;
  border: 1px solid #c4c4c4;
  border: none;
  border-bottom: 1px solid #c4c4c4;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.04em;
}
::-webkit-input-placeholder {
  color: #828282;
}
::-moz-placeholder {
  color: #828282;
}
:-moz-placeholder {
  color: #828282;
}
:-ms-input-placeholder {
  color: #828282;
}
.footer__link {
  margin-left: auto;
  margin-top: 35px;
  text-align: center;
  display: block;
  padding: 8px 28px;
  margin-bottom: 1.4rem;
  transition: all ease-in-out 200ms;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.04em;
  color: #333333;
  border: 1px solid #333333;
}
.footer__link:hover {
  background: #e0e0df;
}
.btn-reset {
  position: absolute;
  top: 50px;
  right: 14px;
  transition: opacity 0.2s ease-in-out;
  height: 10px;
  width: 10px;
  background: url(../assets/svg/close.svg) center center/cover no-repeat;
  background-size: 11px;
}
.footer__subnav-link:hover {
  color: #58862d;
}
.form__wrapper small {
  display: block;
  color: red;
}
.form__wrapper.invalid input {
  border-color: red;
}
@media (max-width: 1300px) {
  .grid__body {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: 'one two three';
    grid-gap: 20px;
  }
  .footer__nav_catalog {
    padding-left: 20px;
  }
}
@media (max-width: 876px) {
  .grid__body {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
      'one two'
      'three';
    grid-gap: 20px;
  }
  .form__input {
    width: 375px;
  }
}
@media (max-width: 700px) {
  .grid__body {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
      'one two'
      'three three';
    grid-gap: 20px;
  }
  .grid__item:last-child {
    grid-column: span 2;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    align-items: center;
  }
  .form__wrapper {
    padding-top: 2px;
  }
}
</style>
