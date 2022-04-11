<template>
  <section>
    <router-link
      tag="div"
      :to="africa.region + '/' + africa.name.common"
      v-for="africa in paises"
      :key="africa.name.common"
    >
      <img :src="africa.flags.png" />
      <h3>{{ africa.translations.por.common }}</h3>
      <p>
        População: <span>{{ africa.population | numeroPopulacao }}</span>
      </p>
      <p>
        Região: <span>{{ africa.region }}</span>
      </p>
      <p v-for="capital in africa.capital" :key="capital">
        Capital: <span>{{ capital }}</span>
      </p>
    </router-link>
  </section>
</template>

<script>
import fetchData from "../mixins/fetchData.js";

export default {
  name: "africa",
  mixins: [fetchData],
  filters: {
    numeroPopulacao(valor) {
      return valor.toLocaleString("pt-BR");
    },
  },
  created() {
    this.fetchData("https://restcountries.com/v3.1/region/africa");
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
  cursor: pointer;
  animation: slide 2s forwards;
}

section div {
  background: white;
  border-radius: 5px;
  margin: 20px 0;
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
