<template>
  <div class="eor-notifications">
    <div :class="`-${notification.type}`" class="eor-notification" v-if="notification">
      <div class="eor-notification__message">{{ notification.message }}</div>
      <button @click="close(notification.id)"><CloseIcon /></button>
    </div>
  </div>
</template>

<script>
import CloseIcon from 'vue-material-design-icons/Close.vue'

export default {
  components: {
    CloseIcon,
  },
  computed: {
    notification() {
      return this.$store.state.notifications.items[0]
    },
  },
  methods: {
    close(notificationId) {
      this.$notify.dimiss(notificationId)
    },
  },
}
</script>

<style lang="scss">
.eor-notifications {
  position: fixed;
  right: 0;
  left: 0;
  top: $spacing-regular;
  z-index: 100;
  display: flex;
  justify-content: center;
  .eor-notification {
    min-height: 50px;
    width: 80vw;
    border-radius: 20px;
    box-shadow: 5px 5px 20px #cbcdd3;
    display: flex;
    align-items: center;
    @include responsive('m') {
      width: 300px;
    }
    padding: $spacing-regular;
    &.-success {
      background: linear-gradient(to bottom right, #b0db7d 40%, #99dbb4 100%);
      color: white;
    }
    &.-error {
      background: linear-gradient(to bottom left, #ef8d9c 40%, #ffc39e 100%);
      color: white;
    }
    &.-info {
      background: linear-gradient(to bottom left, $secondary 40%, $primary 100%);
      color: white;
    }
    &__message {
      flex: 1 0 auto;
    }
  }
}
</style>
