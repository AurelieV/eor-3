<template>
  <div class="authentication-view">
    <Loader></Loader>
    <p>Process authentification ...</p>
  </div>
</template>

<script>
import Loader from '@/components/Loader'
export default {
  components: { Loader },
  watch: {
    '$route.query.code': {
      immediate: true,
      async handler(code) {
        try {
          await this.$auth.processJudgeAppsToken(code)
          this.$notify.success('Authentification successfull')
          this.$router.push({ name: 'main' })
        } catch (err) {
          this.$notify.error('Authentification failed')
          this.$router.push({ name: 'login' })
        }
      },
    },
  },
}
</script>

<style lang="scss">
.authentication-view {
  background: $light-background;
  color: $primary;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  .eor-loader {
    margin-bottom: $spacing-large;
  }
}
</style>
