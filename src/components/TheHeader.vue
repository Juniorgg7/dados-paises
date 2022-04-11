<template>
  <header>
    <div>
      <router-link tag="h1" to="/">Qual País ?</router-link>
    </div>
    <div>
      <p><font-awesome-icon icon="moon" /><span>Dark Mode</span></p>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 50px;
  box-shadow: 0px 0px 4px 0px #c7c4cf;
  color: #555;
  background: #fff;
}

header p {
  cursor: pointer;
}

header p span {
  margin-left: 5px;
}

header h1 {
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
}
</style>
