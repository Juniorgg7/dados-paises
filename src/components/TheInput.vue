<template>
  <transition>
    <section class="center" v-if="situ === 0">
      <div class="busca-pais" v-for="pais in paises" :key="pais">
        <router-link tag="button" :to="pais.region + '/' + busca"
          ><font-awesome-icon icon="search"
        /></router-link>
        <input type="text" placeholder="Buscar País..." v-model="busca" />
      </div>
      <div class="filtro">
        <p @click="menuDown">
          Filtrar por região <font-awesome-icon icon="filter" />
        </p>
        <div class="menu">
          <router-link to="/africa" value="africa">Africa</router-link>
          <router-link to="/Americas" value="america">América</router-link>
          <router-link to="/asia" value="asia">Ásia</router-link>
          <router-link to="/europe" value="europa">Europa</router-link>
          <router-link to="/oceania" value="oceania">Oceânia</router-link>
        </div>
      </div>
    </section>
  </transition>
</template>

<script>
import fetchData from "../mixins/fetchData.js";
export default {
  name: "theinput",
  methods: {
    menuDown() {
      const subMenu = document.querySelector(".menu");
      subMenu.classList.toggle("menuativo");
    },
  },
  data() {
    return {
      situ: 0,
      busca: "",
      region: [],
    };
  },
  mixins: [fetchData],
  created() {
    this.fetchData("https://restcountries.com/v3.1/all");
  },
};
</script>

<style scoped>
.v-enter-active {
  transition: all 0.3s;
}

.v-enter {
  opacity: 0;
  transform: translate3d(0, -10px, 0);
}
section.center {
  width: calc(100% - 100px);
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
  color: #555;
  position: relative;
  margin-bottom: 40px;
}

.busca-pais,
.filtro {
  position: absolute;
  z-index: 1000;
}

.filtro {
  right: 0;
  box-shadow: 0px 0px 4px 0px #c7c4cf;
  position: absolute;
}

section div input {
  width: 350px;
  height: 50px;
  border: none;
  border-radius: 3px;
  background: white;
}

div p {
  padding: 15px 10px;
  box-shadow: 0px 0px 4px 0px #c7c4cf;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  background: white;
  font-size: 0.8rem;
}

div a {
  display: block;
  background: white;
  color: #555;
  text-decoration: none;
  padding: 5px 10px;
  font-size: 0.9rem;
  font-weight: 600;
}

div.menu a:hover {
  color: #999;
}

button {
  padding: 15px;
  border: none;
  background-color: white;
  color: #555;
  cursor: pointer;
  font-weight: lighter;
}

.busca-pais {
  box-shadow: 0px 0px 1px 0px #c7c4cf;
  height: max-content;
}

.menu {
  display: none;
}

.menuativo {
  animation: down 0.3s forwards;
  display: block;
  z-index: 1000;
}

@keyframes down {
  from {
    transform: translate3d(0, -30px, 0);
    opacity: 0;
  }
  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
</style>
