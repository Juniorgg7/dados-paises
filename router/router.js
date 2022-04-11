// router.js

import Vue from 'vue';
import Router from 'vue-router';

import Home from "../src/views/Home.vue";
import Africa from "../src/views/Africa.vue";
import Asia from "../src/views/Asia.vue";
import America from "../src/views/Americas.vue";
import Oceania from "../src/views/Oceania.vue";
import Europa from "../src/views/Europa.vue";
import Pais from "../src/views/Pais.vue";

Vue.use(Router);

export default new Router({
  mode: "history", // utiliza a history api para permitir voltar a página
  base: process.env.BASE_URL, // define a base do aplicativo, mude caso o app não esteja na raiz do seu servidor
  routes: [{
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/Africa",
      name: "africa",
      component: Africa,
    },
    {
      path: "/Americas",
      name: "america",
      component: America
    },
    {
      path: "/asia",
      name: "asia",
      component: Asia
    },
    {
      path: "/europe",
      name: "europe",
      component: Europa
    },
    {
      path: "/oceania",
      name: "oceania",
      component: Oceania
    },
    {
      path: "/:regiao/:pais",
      component: Pais,
      name: "pais"
    }
  ]
});