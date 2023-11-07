<template>
  <footer>
    <div class="footer-content">
      <span style="margin-bottom: 3rem">
        By creating an account you agree to the privacy policy and to receive
        economic and marketing communications from AvaTrade. You can remove
        yourself from the mailing list at anytime.
      </span>
      <h3>
        Have a partner number?
        <a href="your-link-here">Click here</a>
      </h3>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped>
footer {
  text-align: center;
  height: 100px;
  width: 50%;
  margin: 0 auto;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

footer span,
footer h3 {
  width: 100%;
  margin-top: 2rem;
}
a {
  color: #1187f4;
  text-decoration: underline;
}
</style>
