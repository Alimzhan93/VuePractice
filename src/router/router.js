import Main from "@/pages/Main";
import { createRouter, createWebHistory } from "vue-router";
import UserPage from "@/pages/UserPage";
import About from "@/pages/About";
import PostIdpage from "@/pages/PostIdpage";
const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/posts",
    component: UserPage,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/posts/:id",
    component: PostIdpage,
  },
];
const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});
export default router;
