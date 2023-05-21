<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/route-info" event="mouseover" exact-active-class="test">Route Info</router-link> |
      <router-link to="/book">Book List</router-link> |
      <router-link to="/item/1">Item List</router-link> |
      <router-link to="/emit">Emit Practice</router-link> |
      <router-link to="/user/profile">User</router-link>
    </nav>
    <div class="border-blue">
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </div>
      <router-view name="sub"/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-active {
  color: red;
}

nav a.router-link-exact-active {
  color: #42b983;
}
nav a.test {
  color: lightblue;
}
.border-blue {
  border: 2px solid blue;
}
</style>

<style lang="scss">
.fade {
  &-enter {
    transform: translate(-100px, 0);
    opacity: 0;
    &-to {
      opacity: 1;
    }
    &-active {
      transition: all 1s 0s ease;
    }
  }
  &-leave {
    transform: translate(0, 0);
    opacity: 1;
    &-to {
      transform: translate(100px, 0);
      opacity: 0;
    }
    &-active{
      transition: all .5s 0s ease;
    }
  }
}
</style>