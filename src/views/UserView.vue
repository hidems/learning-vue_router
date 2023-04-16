<template>
  <div>
    <h1>User Info</h1>
    <router-link to="/user/profile">User Profile</router-link> |
    <router-link to="/user/post">User Post</router-link>
    <div class="green-border">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.green-border {
  border: 2px solid green;
}
</style>