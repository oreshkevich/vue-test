<template>
  <main class="main">
    <section class="product">
      <div class="container">
        <div class="product__wrapper grid">
          <div class="product__item picture">
            <img v-if="isElVisible" src="../assets/img/boy.jpg" alt="boy" />
            <img
              v-if="isElVisibleOne"
              src="../assets/img/boy-girl-2.jpg"
              alt="boy"
            />
            <img
              v-if="isElVisibleTwo"
              src="../assets/img/boy-girl-3.jpg"
              alt="boy"
            />
            <img
              v-if="isElVisibleThree"
              src="../assets/img/boy-girl-4.jpg"
              alt="boy"
            />
            <img
              v-if="isElVisibleFour"
              src="../assets/img/boy-girl-5.jpg"
              alt="boy"
            />
            <div class="product__item-picture">
              <img
                @click="toggleElement"
                src="../assets/img/boy-1.jpg"
                alt="boy"
              />
              <img
                @click="toggleElementOne"
                src="../assets/img/boy-2.jpg"
                alt="boy"
              />
              <img
                @click="toggleElementTwo"
                src="../assets/img/boy-3.jpg"
                alt="boy"
              />
              <img
                @click="toggleElementThree"
                src="../assets/img/boy-4.jpg"
                alt="boy"
              />
              <img
                @click="toggleElementFour"
                src="../assets/img/boy-5.jpg"
                alt="boy"
              />
            </div>
          </div>
          <div class="product__item choice">
            <div class="choice__wrap">
              <h2 class="choice__title">Пижама для девочек</h2>
              <div class="choice__art">Арт. 02765/46</div>
              <div class="choice__feedback feedback">
                <div class="feedback__text">Отзывы</div>
                <div class="feedback__img">
                  <img src="../assets/svg/star.svg" alt="star" />
                  <img src="../assets/svg/star.svg" alt="star" />
                  <img src="../assets/svg/star.svg" alt="star" />
                  <img src="../assets/svg/star.svg" alt="star" />
                  <img src="../assets/svg/star-white.svg" alt="star" />
                </div>
                <div class="feedback__text">14 отзывов</div>
                <button class="button-slider">
                  <img src="../assets/svg/arrow.svg" alt="arrow" id="btnNext" />
                </button>
              </div>
              <div class="choice__prices">
                <span class="choice__current-price"
                  ><span class="choice__price-val">800 </span>
                  <span class="choice__currency_sign">₽</span></span
                >
                <span class="choice__old-price"
                  ><span class="choice__price-val">1 500</span> ₽
                </span>
                <button class="button-slider">
                  <img src="../assets/svg/arrow.svg" alt="arrow" id="btnNext" />
                </button>
              </div>

              <div class="choice__discounts">
                <button class="choice__discounts-button">скидка -36%</button>
                <button class="choice__discounts-button">акция -20%</button>
              </div>
              <div class="choice__order-checkout order-checkout">
                <div
                  class="order-checkout__select input-form-select"
                  data-state=""
                >
                  <div
                    class="order-checkout__select_title"
                    data-default="Option 0"
                  >
                    Выбрать размер
                  </div>
                  <div class="order-checkout__select_content">
                    <input
                      id="singleSelect0"
                      class="order-checkout__select_input"
                      type="radio"
                      name="singleSelect"
                      checked=""
                    />
                    <label
                      for="singleSelect0"
                      class="order-checkout__select_label"
                      >размер</label
                    >
                    <input
                      id="singleSelect1"
                      class="order-checkout__select_input"
                      type="radio"
                      name="singleSelect"
                    />
                  </div>
                </div>
              </div>
              <div class="choice__size">
                <a href="#">Определить размер</a>
              </div>
              <div class="choice__info-buy">
                <div class="quantity">
                  <button class="plus" v-on:click="counter++">+</button>
                  <span class="">{{ counter }}</span>
                  <button class="minus" v-on:click="counterValue">-</button>
                </div>
                <a class="choice__btn-add">Добавить в корзину</a>
                <button class="choice__btn-add choice__btn_heart">
                  <img src="../assets/svg/heart.svg" alt="heart" />
                </button>
              </div>
              <div class="checkout-info__link">
                <a href="#" class="checkout-info__buy"> Купить в 1 клик </a>
              </div>
              <hr />
              <div class="choice__col col">
                <ul class="col__list">
                  <li class="col__product">
                    <a href="#">Описание товара</a>
                  </li>
                  <li class="col__time">
                    <a href="#">Доставка и возврат</a>
                  </li>
                  <li class="col__pay">
                    <a href="#">Способы оплаты</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="product__all-style">
          <a href="#" class="product__all-link">Посмотреть все стили</a>
        </div>
        <div class="product__wrapper grid-main">
          <div class="product__item">
            <img
              class="product__item-img"
              src="../assets/img/girl.jpg"
              alt="boy"
            />
          </div>
          <div class="product__item product__item_grid">
            <img src="../assets/img/girl-1.jpg" alt="girl" />
            <img src="../assets/img/girl-2.jpg" alt="girl" />
            <img src="../assets/img/girl-3.jpg" alt="girl" />
            <img src="../assets/img/girl-4.jpg" alt="girl" />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'McvMain',
  data() {
    return {
      counter: 1,
      isElVisible: true,
      isElVisibleOne: false,
      isElVisibleTwo: false,
      isElVisibleThree: false,
      isElVisibleFour: false,
    }
  },
  methods: {
    toggleElement() {
      this.isElVisible = true
      this.isElVisibleOne = false
      this.isElVisibleTwo = false
      this.isElVisibleThree = false
      this.isElVisibleFour = false
    },
    toggleElementOne() {
      this.isElVisible = false
      this.isElVisibleOne = true
      this.isElVisibleTwo = false
      this.isElVisibleThree = false
      this.isElVisibleFour = false
    },
    toggleElementTwo() {
      this.isElVisible = false
      this.isElVisibleOne = false
      this.isElVisibleTwo = true
      this.isElVisibleThree = false
      this.isElVisibleFour = false
    },
    toggleElementThree() {
      this.isElVisible = false
      this.isElVisibleOne = false
      this.isElVisibleTwo = false
      this.isElVisibleThree = true
      this.isElVisibleFour = false
    },
    toggleElementFour() {
      this.isElVisible = false
      this.isElVisibleOne = false
      this.isElVisibleTwo = false
      this.isElVisibleThree = false
      this.isElVisibleFour = true
    },
    counterValue() {
      this.counter > 0 ? this.counter-- : 0
    },
  },
}
</script>

<style scoped>
.main {
  padding-top: 25px;
  padding-bottom: 144px;
}
.product__wrapper {
  display: flex;
  justify-content: space-between;
}
.choice__wrap {
  margin-top: 22px;
  margin-left: 16px;
}
.choice__info-buy {
  max-width: 408px;
  display: flex;
  align-items: stretch;
  padding-top: 39px;
}
.quantity {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 145px;
  height: 44px;
  font-size: 18px;
  position: relative;
  flex-grow: 1;
  box-sizing: border-box;
  padding: 10px 20px;
  margin-right: 5px;
  border: 1px solid #d2d5d9;
  background: #f2f2f2;
}
.quantity button {
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.04em;
  color: #333333;
}
.quantity span {
  width: 45px;
  background: none;
  border: none;
  outline: none;
  text-align: center;
  padding: 9px 10px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.04em;
  color: #333333;
}
.choice__btn-add {
  width: 106px;
  font-weight: 700;
  font-size: 14px;
  line-height: 130%;
  color: #fff;
  background-image: none;
}
.choice__btn-add {
  margin-left: 11px;
  position: relative;
  padding: 12px 14px;
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
  overflow: hidden;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.04em;
  color: #ffffff;
  background: #333333;
  border: 1px solid #333333;
  width: 208px;
  height: 44px;
}
.choice__btn-add:hover {
  background: #7e7777;
}
.choice__title {
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #333333;
}
.grid-main {
  height: 100%;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'one two';
}
.grid {
  height: 100%;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'one two';
}
.choice__art {
  padding-top: 9px;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.04em;
  color: #828282;
}
.feedback {
  padding-top: 17px;
  max-width: 237px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.04em;
  color: #333333;
}
.feedback__img {
  padding-left: 4px;
  display: flex;
  align-items: center;
}
.feedback__img img {
  padding-right: 2px;
}
.choice__prices {
  padding-top: 46px;
  display: flex;
  align-items: baseline;
  padding-bottom: 10px;
}
.choice__current-price {
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #333333;
}

.choice__old-price {
  position: relative;
  margin-left: 15px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.04em;
  text-decoration-line: line-through;
  color: #828282;
  margin-right: 16px;
}
.choice__old-price::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  display: block;
  width: 100%;
  background-color: #828282;
}
.choice__discounts {
  max-width: 187px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 25px;
}
.choice__discounts-button {
  padding: 4px 8px;
  border: 1px solid #333333;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  color: #333333;
}

.choice__discounts-button:hover {
  border-color: #58862d;
}
.order-checkout {
  max-width: 315px;
}
.order-checkout__select {
  position: relative;
}
.input-form-select {
  margin-top: 0.375rem;
  height: 45px;
  font-size: 14px;
  background: #fff;
  border-radius: 6px;
}
.choice__btn_heart {
  padding: 10px 12px;
  width: 44px;
  height: 44px;
  margin-left: 4px;
  display: flex;
  align-items: center;
  text-align: center;
}
.order-checkout__select_title {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 8px 16px;
  border-radius: 5px;
  border: solid 1px #c7ccd1;
  cursor: pointer;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.04em;
  color: #333333;
}
.order-checkout__select_content {
  position: absolute;
  top: 45px;
  left: 1px;
  display: flex;
  flex-direction: column;
  width: calc(100% - 2px);
  background-color: #fff;
  border: 1px solid #c7ccd1;
  border-top: none;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  transition: all 0.3s ease-out;
  opacity: 0;
  z-index: 8;
}
.order-checkout__select_input {
  display: none;
}
.order-checkout__select_input {
  background: #fff;
  border: 1px solid #d2d5d9;
  padding: 17px 16px;
  font-size: 0.9rem;
  line-height: 130%;
  align-items: center;
  color: #8c9095;
  border-radius: 6px;
  font-weight: 600;
}
.order-checkout__select_label {
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  max-height: 0;
  padding: 0 16px;
  transition: all 0.2s ease-out;
  cursor: pointer;
  overflow: hidden;
}
.order-checkout__select_title:hover {
  border-color: #58862d;
}
.order-checkout__select_title::before,
.order-checkout__select_title::after {
  content: '';
  position: absolute;
  top: 50%;
  right: 16px;
  display: block;
  width: 10px;
  height: 2px;
  transition: all 0.3s ease-out;
  background-color: #333;
  transform: translate(-3px, -50%) rotate(45deg);
}

.order-checkout__select[data-state='active']
  .order-checkout__select_title::before {
  -webkit-transform: translate(-3px, -50%) rotate(-45deg);
  transform: translate(-3px, -50%) rotate(-45deg);
}

.order-checkout__select[data-state='active']
  .order-checkout__select_title::after {
  -webkit-transform: translate(3px, -50%) rotate(45deg);
  transform: translate(3px, -50%) rotate(45deg);
}

.order-checkout__select[data-state='active'] .order-checkout__select_content {
  opacity: 1;
}

.order-checkout__select[data-state='active']
  .order-checkout__select_label
  + .order-checkout__select_input
  + .order-checkout__select_label {
  max-height: 40px;
  border-top-width: 1px;
}
.order-checkout__select_title::before,
.order-checkout__select_title::after {
  content: '';
  position: absolute;
  top: 50%;
  right: 16px;
  display: block;
  width: 10px;
  height: 2px;
  -webkit-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
  background-color: #333;
  -webkit-transform: translate(-3px, -50%) rotate(45deg);
  transform: translate(-3px, -50%) rotate(45deg);
}

.order-checkout__select_title::after {
  -webkit-transform: translate(3px, -50%) rotate(-45deg);
  transform: translate(3px, -50%) rotate(-45deg);
}

.order-checkout__select_title:hover {
  border-color: #58862d;
}

.order-checkout__select_title:hover::before,
.order-checkout__select_title:hover::after {
  background-color: #58862d;
}
.choice__size {
  padding-top: 11px;

  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.04em;
  text-decoration-line: underline;
  color: #333333;
}

.checkout-info__link {
  margin-top: 11px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.04em;
  text-decoration-line: underline;
  color: #333333;
}

hr {
  margin-top: 29px;
}
.col {
  margin-top: 13px;
  position: relative;
  width: 100%;
  flex: 0 0 50%;
  max-width: 50%;
}
.col__list {
  list-style-type: none;
  padding-left: 25px;
}
.col__list li {
  padding-top: 11px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.04em;
  text-decoration-line: underline;
  color: #333333;
}
.col__time:before {
  content: '';
  display: block;
  position: absolute;
  left: 3px;
  top: 43px;
  width: 15px;
  height: 17px;
  background: url(../assets/svg/time.svg) center center/cover no-repeat;
}
.col__product:before {
  content: '';
  display: block;
  position: absolute;
  left: 3px;
  top: 12px;
  width: 15px;
  height: 15px;
  background: url(../assets/svg/product-description.svg) center center/cover
    no-repeat;
}
.col__pay:before {
  content: '';
  display: block;
  position: absolute;
  left: 1px;
  top: 75px;
  width: 18px;
  height: 18px;
  background: url(../assets/svg/pay-2.svg) center center/cover no-repeat;
}
.product__all-style {
  margin-top: 32px;
  margin-bottom: 32px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.04em;
  text-decoration-line: underline;
  color: #333333;
  text-align: center;
}
.product__item_grid {
  display: grid;
  gap: 14px 9px;
  grid-template-columns: repeat(auto-fit, minmax(17.4479166667vw, 1fr));
}
.product__item_grid img {
  object-fit: cover;
}
.picture {
  position: relative;
}
.picture img {
  width: 100%;
  object-fit: cover;
}
.product__item-picture {
  position: absolute;
  top: 25px;
  left: 25px;
}
.product__item-picture img {
  margin-bottom: 7px;
  cursor: pointer;
}

@media (max-width: 876px) {
  .grid {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
      'one'
      'two';
  }

  .grid-main {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
      'one'
      'two';
  }
  .product__item-img {
    margin-left: auto;
    margin-right: auto;
  }
  @media (max-width: 876px) {
    .product__item_grid {
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    }
  }

  @media (max-width: 876px) {
    .main {
      padding-top: 10px;
      padding-bottom: 20px;
    }
  }
  @media (max-width: 400px) {
  }
}
</style>
