<template>
  <nav>
    <ul class="Tabs">
      <li class="Tabs__tab active Tab"><a href="#">Sign-Up</a></li>
      <li class="Tabs__tab Tab"><a href="#">Login</a></li>
      <li class="Tabs__presentation-slider" role="presentation"></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
}
</script>

<style scoped>
.Tabs {
  position: relative;
  background-color: #fff;
  margin: 1rem 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.Tabs:after {
  content: ' ';
  display: table;
  clear: both;
}
.Tabs__tab {
  width: 10rem;
  text-align: center;
}

.Tabs__tab:first-child.active ~ .Tabs__presentation-slider {
  transform: translateX(0);
}

.Tabs__tab:nth-child(2).active ~ .Tabs__presentation-slider {
  transform: translateX(100%);
}

.Tabs__tab:nth-child(3).active ~ .Tabs__presentation-slider {
  transform: translateX(200%);
}

.Tabs__presentation-slider {
  position: absolute;
  bottom: 0;
  width: 10rem; /* Set this to the width of your tab */
  height: 3px;
  background-color: #1187f4;
  transform-origin: 0 0;
  transition: transform 0.25s;
  left: 35%; /* Add this to center the slider */
  transform: translateX(-50%); /* Add this to center the slider */
}

.Tab {
  font-family: 'Roboto Slab';
}
.Tab > a {
  display: block;
  padding: 10px 12px;
  text-decoration: none;
  color: #1187f4;
  transition: color 0.15s;
}
.Tab.active > a {
  color: #1187f4;
  font-weight: bold;
}
.Tab:hover > a {
  color: #1187f4;
  font-weight: bold;
}
</style>
