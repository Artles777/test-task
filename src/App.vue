<template>
  <div class="task">
    <button class="task__btn" @click="changeOpen">Показать</button>
    <Modal v-if="getOpen" />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import Modal from '@/components/Modal.vue'

export default {
  name: 'App',
  components: {
    Modal
  },
  computed: mapGetters(['getOpen']),
  methods: mapMutations(['changeOpen'])
}
</script>

<style lang="scss">
@import '@/style/variables.scss';

h3 {
  font-size: 16px;
  font-weight: 600;
}

button {
  border: none;
  background: none;
  outline: none;
}

label {
  font-weight: 500;
  font-size: 14px;
}

#app {
  font-family: Montserrat, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $color-theme;
  margin: 0 auto;

  @media screen and (min-width: 1300px) {
    max-width: 1300px;
  }

  @media (min-width: 320px) and (max-width: 380px) {
    max-width: 320px;
  }
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.task {
  text-align: center;
  margin-top: 5rem;
  &__btn {
    border: 1px solid $color-btn;
    border-radius: 4px;
    background: none;
    color: $color-theme;
    padding: 5px 15px;
    font-size: 16px;
    cursor: pointer;
  }
}
</style>
