<template>
  <div v-if="posts.length > 0">
    <h3>Список пользователей</h3>
    <Postitem
      v-for="post in posts"
      :post="post"
      :key="post.id"
      @remove="$emit('remove', post)"
    />
  </div>
  <h2 v-else style="color: red">Список пользователей пуст</h2>
</template>

<script>
import Postitem from "@/components/Postitem.vue";

export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
  components: { Postitem },
};
</script>

<style></style>
