<template>
  <div class="gamewindow__container">
    <div class="gamewindow__button_container">
      <router-link to="/Settings" class="gamewindow__button">Отмена</router-link>
    </div>
    <div>
      <input type="number" />*
      <input type="number" />
    </div>
    <div class="gamewindow__calculator">
      <div class="gamewindow__calculator__keys">
        <div v-for="index in 10" :key="index" class="gamewindow__calculator__key">{{index - 1}}</div>
      </div>
      <div class="gamewindow__calculator_operators">
        <div
          class="gamewindow__calculator_operator"
          v-for="(operator, index) in operators"
          :key="index"
        >{{operator.value}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      operators: [
        {
          value: "<"
        },
        {
          value: ">"
        },
        {
          value: "?"
        },
        {
          value: "="
        }
      ]
    };
  }
};
</script>

<style>
.gamewindow__container {
  display: inline-block;
  width: 27rem;
  border: 2px solid lightblue;
  padding: 3rem;
  margin: auto;
}

.gamewindow__calculator {
  display: flex;
}

.gamewindow__calculator__keys {
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
}
.gamewindow__calculator__key {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.7rem;
  font-weight: bold;
  width: 4rem;
  height: 4rem;
  border: 1px solid orange;
  border-radius: 50%;
  margin: 15px;
  background-color: orange;
  box-shadow: 0 2px 5px 3px darkgray;
}

.gamewindow__calculator__key:first-child {
  order: 1;
}

.gamewindow__button_container {
  text-align: start;
  margin: 2rem 1.5rem;
}

.gamewindow__button {
  text-decoration: none;
  color: darkslategrey;
  border: 1px solid lightgray;
  padding: 0.4rem 1rem;
  box-shadow: -1px 2px 3px 1px lightgray;
}

.gamewindow__calculator_operators {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30%;

}

.gamewindow__calculator_operator {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.7rem;
  font-weight: bold;
  width: 4rem;
  height: 4rem;
  border: 1px solid lightgray;
  border-radius: 50%;
  background-color: lightgray;
  box-shadow: 0 2px 5px 3px darkgray;
}
</style>