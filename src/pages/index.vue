<template>
  <div class="container">
    <div class="left-block" />
    <div class="container-main">
      <Header class="header" />
      <Nav />
      <LoginForm />
      <Divider />
      <div class="center mt-2">
        <GoogleIcon class="c-pointer" />
        <FBIcon class="c-pointer" />
        <AppleIcon class="c-pointer" />
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Nav from '../components/Nav.vue'
import LoginForm from '../components/LoginForm.vue'
import Divider from '../components/UI/Divider.vue'
import GoogleIcon from '../components/UI/icons/Google.vue'
import FBIcon from '../components/UI/icons/Facebook.vue'
import AppleIcon from '../components/UI/icons/Apple.vue'

export default {
  components: {
    Header,
    LoginForm,
    Divider,
    GoogleIcon,
    FBIcon,
    AppleIcon,
    Footer,
    Nav,
  },
}
</script>

<style scoped>
body,
html {
  margin: 0;
  padding: 0;
  width: 100%;
}
.left-block {
  background-color: #e5f3ff;
  width: 40vw;
  height: 100vh;
  flex-shrink: 0;
}
.container {
  display: flex;
  max-width: 100%;
}
.container-main {
  display: flex;
  flex-direction: column;
  width: 66rem;
  padding: 2rem;
}
.header {
  display: flex;
  align-items: flex-start;
}

.center {
  margin: 0 auto;
}
.mt-2 {
  margin-top: 2rem;
}
.c-pointer {
  cursor: pointer;
}
</style>
