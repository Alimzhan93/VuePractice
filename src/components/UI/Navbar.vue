<template>
  <div class="navbar">
    <div @click="$router.push('/')">Vue 3</div>
    <div class="navbar__btns">
      <MyButton @click="$router.push('/posts')" style="border-radius: 10px"
        >Посты</MyButton
      >
      <MyButton
        @click="$router.push('/about')"
        style="margin-left: 20px; border-radius: 10px"
        >О сайте</MyButton
      >
    </div>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";
export default {
  components: {
    MyButton,
  },
};
</script>

<style>
.navbar__btns {
  margin-left: auto;
}
.navbar {
  height: 50px;
  background-color: rgb(32, 182, 67);
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
  border-radius: 10px;
}
</style>
