<template>
  <form method="post">
    <div class="form">
      <input
        type="text"
        placeholder="Email"
        name="email"
        required
        class="email-input"
      />

      <input
        type="password"
        placeholder="Password"
        name="password"
        required
        class="password-input"
      />

      <button class="login-button" type="submit">Create My account</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'LoginForm',
}
</script>

<style scoped>
/* Full-width input fields */
input[type='text'],
input[type='password'] {
  padding: 1rem 4rem;
  margin: 1rem;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  color: var(--neutral-neutral-30, #484649);
  font-family: Muli;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  letter-spacing: 0.15px;
  text-transform: capitalize;
  width: 30rem;
}
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
}
.email-input {
  background: url('../assets/img/mail.png') no-repeat scroll 7px 7px;
  padding-left: 1rem;
  background-position: 1rem;
}
.password-input {
  background: url('../assets/img/password.png') no-repeat scroll 7px 7px;
  padding-left: 1rem;
  background-position: 1rem;
}
.login-button {
  width: 24rem;
  padding: 1rem 37px;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 2.5rem;
  opacity: 0.35;
  background: #1187f4;
  color: white;
  border: none;
  margin-top: 2rem;
  font-size: 18px;
  cursor: pointer;
}

.login-button:hover {
  opacity: 0.8;
}

span.psw {
  float: right;
  padding-top: 16px;
}
</style>
