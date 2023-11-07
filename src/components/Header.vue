<template>
  <div class="container">
    <header class="btn-header">
      <div class="btn">
        <div class="messages-icon">
          <img src="../assets/img/massagesSign.png" alt="Messages" />
        </div>
        <button class="close-button"><Close /></button>
      </div>
    </header>
    <h2>SIgn-Up, It's Free!</h2>
  </div>
</template>

<script>
import Close from '../components/UI/icons/Close.vue'

export default {
  name: 'Header',
  components: {
    Close,
  },
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-content: center;
}
h2 {
  color: #1187f4;
  text-align: center;
  font-family: Mulish;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0 auto;
}
.btn-header {
  width: 100%; /* Header spans the full width */
  display: flex;
  justify-content: flex-end; /* Aligns .btn to the end (right) */
  padding: 0.5rem 1rem; /* Adjust to your needs */
  margin-bottom: 3rem;
}

.messages-icon {
  width: 3.5rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-button {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 3rem;
  height: 3rem;
}

.btn {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem; /* Space between icon and button */
}
</style>
