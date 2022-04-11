<template>
  <section>
    <router-link
      :to="'/' + regiao.region"
      v-for="regiao in paises"
      :key="regiao"
      ><font-awesome-icon icon="arrow-left" /> Voltar</router-link
    >
    <div class="box-pais" v-for="pais in paises" :key="pais.name">
      <img :src="pais.flags.svg" />
      <div class="lista">
        <h3>{{ pais.translations.por.common }}</h3>
        <ul>
          <div>
            <li>
              Nome nativo: <span>{{ pais.translations.por.common }}</span>
            </li>
            <li>
              População: <span>{{ pais.population | numeroPopulacao }}</span>
            </li>
            <li>
              Região: <span>{{ pais.region }}</span>
            </li>
            <li>
              Sub Região: <span>{{ pais.subregion }}</span>
            </li>
            <li>
              Capital:
              <span v-for="capital in pais.capital" :key="capital">{{
                capital
              }}</span>
            </li>
          </div>
          <div>
            <li>
              Domínio de nível superior:
              <span v-for="dominio in pais.tld" :key="dominio">{{
                dominio
              }}</span>
            </li>
            <li>
              Moeda: <span>{{ Object.keys(pais.currencies)[0] }}</span>
            </li>
            <li>
              Idiomas:
              <span v-for="idioma in pais.languages" :key="idioma"
                >{{ idioma }},</span
              >
            </li>
          </div>
        </ul>

        <div>
          <span class="paises-vizinhos">Países vizinhos: </span>
          <span v-for="vizinhos in pais.borders" :key="vizinhos">{{
            vizinhos
          }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import fetchData from "../mixins/fetchData.js";
import TheInput from "../components/TheInput.vue";

export default {
  data() {
    return {
      regiao: this.$route.params.pais,
    };
  },
  filters: {
    numeroPopulacao(valor) {
      return valor.toLocaleString("pt-BR");
    },
  },
  name: "pais",
  components: {
    TheInput,
  },
  computed: {
    local() {
      return this.$route.params.pais;
    },
  },
  mixins: [fetchData],
  created() {
    this.fetchData(`https://restcountries.com/v3.1/name/${this.local}`);
  },
};
</script>

<style scoped>
@keyframes slide {
  from {
    opacity: 0;
    transform: translate3d(-20px, 0px, 0px);
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
  animation: slide 1.2s forwards;
}

section a {
  padding: 15px 25px;
  box-shadow: 0px 0px 4px 0px #c7c4cf;
  border: none;
  border-radius: 3px;
  text-decoration: none;
  color: #555;
  cursor: pointer;
  background: white;
  font-size: 0.8rem;
  font-weight: 400;
}

.box-pais {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  margin: 50px 0;
}

.box-pais img {
  width: 500px;
}

.lista {
  margin: 20px 0 20px 100px;
}

.lista h3 {
  text-overflow: ellipsis;
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.lista ul {
  display: flex;
  flex-wrap: wrap;
}

.lista ul div {
  margin-right: 120px;
}

.lista ul div li {
  margin-bottom: 10px;
  color: #222;
  font-weight: bold;
  font-size: 0.8rem;
  list-style: none;
}

.lista ul div li span {
  border: none;
  padding: 0;
  margin-left: 10px;
  border-radius: 0;
}

.lista > div {
  margin-top: 30px;
}

.lista div .paises-vizinhos {
  margin-top: 50px;
  padding-left: 0;
  color: #222;
  font-weight: bold;
  font-size: 0.8rem;
  border: none;
}

.lista div span {
  font-size: 0.8rem;
  color: #555;
  border: 0.5px solid #c7c4cf;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
}
</style>
