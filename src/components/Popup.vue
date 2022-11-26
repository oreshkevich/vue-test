<template>
  <div class="popup_wrapper" ref="popup_wrapper">
    <div class="v-popup">
      <div class="v-popup__header">
        <span>Моя корзина</span>
        <button
          class="modal__btn-close modal__close"
          @click="closePopup"
        ></button>
      </div>
      <div class="v-popup__content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-popup',

  data() {
    return {}
  },
  methods: {
    closePopup() {
      this.$emit('closePopup')
    },
  },
  mounted() {
    let vm = this
    document.addEventListener('click', function (item) {
      if (item.target === vm.$refs['popup_wrapper']) {
        vm.closePopup()
      }
    })
  },
}
</script>

<style scoped>
.popup_wrapper {
  background: rgba(64, 64, 64, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
}
.v-popup {
  padding: 16px;
  position: fixed;
  top: 50px;
  width: 400px;
  /* background: #ffffff; */
  background: #727272;
  box-shadow: 0 0 17px 0 #e7e7e7;
  z-index: 100;
}
.v-popup__header,
.v-popup__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.v-popup__content {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
}
.submit_btn {
  padding: 8px;
  color: #ffffff;
  background: #26ae68;
}
.close_modal {
  padding: 8px;
  color: #ffffff;
  background: red;
}
.modal__btn-close {
  position: absolute;
  top: 8px;
  right: 14px;
  display: block;
  width: 24px;
  height: 24px;
  padding: 0;
}
.modal__close {
  background-image: url(../assets/svg/close-popup.svg);
  border-radius: 100%;
  background-size: 27.7px;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
}
.v-popup__header span {
  padding-bottom: 10px;
  font-weight: 500;
  font-size: 19px;
  line-height: 23px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #fff;
}
@media (max-width: 460px) {
  .v-popup {
    width: 351px;
  }
}
</style>
