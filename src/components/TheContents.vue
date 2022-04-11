<template>
  <section>
    <router-link
      tag="div"
      :to="pais.region + '/' + pais.name.common"
      v-for="pais in paises"
      :key="pais.name.common"
    >
      <div :title="pais.name.common">
        <img :src="pais.flags.png" />
        <h3>{{ pais.translations.por.common }}</h3>
        <p>
          População: <span>{{ pais.population | numeroPopulacao }}</span>
        </p>
        <p>
          Região: <span>{{ pais.region }}</span>
        </p>
        <p v-for="capital in pais.capital" :key="capital">
          Capital: <span>{{ capital }}</span>
        </p>
      </div>
    </router-link>
  </section>
</template>

<script>
import fetchData from "../mixins/fetchData.js";

export default {
  name: "TheContents",
  mixins: [fetchData],
  filters: {
    numeroPopulacao(valor) {
      return valor.toLocaleString("pt-BR");
    },
  },
  created() {
    this.fetchData("https://restcountries.com/v3.1/all");
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
  animation: slide 3.5s forwards;
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
