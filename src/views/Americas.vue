<template>
  <section>
    <router-link
      tag="div"
      :to="america.region + '/' + america.name.common"
      v-for="america in paises"
      :key="america.name.common"
    >
      <div>
        <img :src="america.flags.png" />
        <h3>{{ america.translations.por.common }}</h3>
        <p>
          População: <span>{{ america.population | numeroPopulacao }}</span>
        </p>
        <p>
          Região: <span>{{ america.region }}</span>
        </p>
        <p v-for="capital in america.capital" :key="capital">
          Capital: <span>{{ capital }}</span>
        </p>
      </div>
    </router-link>
  </section>
</template>

<script>
import fetchData from "../mixins/fetchData.js";

export default {
  name: "Americas",
  mixins: [fetchData],
  filters: {
    numeroPopulacao(valor) {
      return valor.toLocaleString("pt-BR");
    },
  },
  created() {
    this.fetchData("https://restcountries.com/v3.1/region/america");
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
  color: #555;
  flex-wrap: wrap;
  position: relative;
  padding: 15px 50px;
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
