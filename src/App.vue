<template>
  <div id="app">
    <Notifications />
    <button class="eor-button -primary" @click="logout">Logout</button>
    <router-view />
  </div>
</template>

<script>
import '@/styles/global.scss'

export default {
  methods: {
    async logout() {
      try {
        await this.$auth.logout()
        this.$router.push({ name: 'login' })
        this.$notify.success('You have been sucessfully logout')
      } catch {
        this.$notify.error('Something went wrong')
      }
    },
  },
}
</script>
