<template>
  <section>
    <router-link
      tag="div"
      :to="asia.region + '/' + asia.name.common"
      v-for="asia in paises"
      :key="asia.name.common"
    >
      <div>
        <img :src="asia.flags.png" />
        <h3>{{ asia.translations.por.common }}</h3>
        <p>
          População: <span>{{ asia.population | numeroPopulacao }}</span>
        </p>
        <p>
          Região: <span>{{ asia.region }}</span>
        </p>
        <p v-for="capital in asia.capital" :key="capital">
          Capital: <span>{{ capital }}</span>
        </p>
      </div>
    </router-link>
  </section>
</template>

<script>
import fetchData from "../mixins/fetchData.js";

export default {
  name: "Asia",
  mixins: [fetchData],
  filters: {
    numeroPopulacao(valor) {
      return valor.toLocaleString("pt-BR");
    },
  },
  created() {
    this.fetchData("https://restcountries.com/v3.1/region/asia");
  },
};
</script>

<style scoped>
@keyframes slide {
  from {
    opacity: 0;
    transform: translate3d(0px, -20px, 0px);
  }
  to {
    opacity: 1;
    transform: translate3d(0px, 0px, 0px);
  }
}
section {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 15px 50px;
  color: #555;
  flex-wrap: wrap;
  position: relative;
  top: 50px;
  animation: slide 2s forwards;
}

section div {
  background: white;
  border-radius: 5px;
  margin: 20px 0;
  cursor: pointer;
}

div img {
  width: 250px;
  border-radius: 5px 5px 0 0;
}

div h3 {
  margin: 20px 0 20px 20px;
  text-overflow: ellipsis;
}

div p {
  margin: 5px 0px 5px 20px;
  color: #222;
  font-weight: bold;
  font-size: 0.8rem;
}

div p span {
  color: #666;
}
</style>
