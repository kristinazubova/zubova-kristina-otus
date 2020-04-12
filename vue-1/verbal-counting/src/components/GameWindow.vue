<template>
  <div class="gamewindow__container">
    <div class="gamewindow__header">
      <div class="gamewindow__button_container">
        <router-link to="/Settings" class="gamewindow__button">Отмена</router-link>
      </div>
      <div class="gamewindow__timer">{{prettyTime}}</div>
    </div>
    <p>Введите ответ и нажмите равно</p>
    <div>
      {{task | replaceDoubleAsterisk}}
      =
      <input type="text" v-model="answer" ref="answerInput" />
    </div>
    <div class="gamewindow__calculator">
      <div class="gamewindow__calculator__keys">
        <div
          v-for="index in 10"
          :key="index"
          class="gamewindow__calculator__key"
          @click="(e) => { handleNumberClick(e, index) }"
        >{{index - 1}}</div>
      </div>
      <div class="gamewindow__calculator_operators">
        <div
          class="gamewindow__calculator_operator"
          v-for="(operator, index) in operators"
          :key="index"
          @click="(e) => { handleEvent(e, operator.value) }"
        >{{operator.value}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      task: "",
      answer: "",
      operators: [
        {
          value: "<"
        },
        {
          value: ">"
        },
        {
          value: "del"
        },
        {
          value: "="
        }
      ],
      timer: 2
    };
  },
  computed: {
    ...mapState(["duration", "complexity", "operations", "answerCounter"]),
    prettyTime() {
      let time = this.timer / 60;
      let minutes = parseInt(time);
      let secondes = Math.round((time - minutes) * 60);
      return minutes + ":" + secondes;
    }
  },
  filters: {
    replaceDoubleAsterisk(value) {
      return value.split("**").join("^");
    }
  },
  mounted() {
    this.generateTask();
    this.setTimer();
  },
  methods: {
    ...mapMutations(["incrementAnswerCounter", "clearAnswerCounter"]),
    setTimer() {
      this.timer = this.duration * 60;

      let intervalID = setInterval(() => {
        if (this.timer === 0) {
          alert("Ваш результат: " + this.answerCounter);
          clearInterval(intervalID);
        } else {
          this.timer--;
        }
      }, 1000);
    },
    generateTask() {
      let task = [];
      let digitsMap = {
        1: 10,
        2: 100,
        3: 1000
      };
      let digitsCount = digitsMap[Math.round(this.complexity / 2)];

      let operationsMap = {
        sum: "+",
        substract: "-",
        multipl: "*",
        division: "/",
        exponent: "**"
      };
      let operations = Object.entries(this.operations).filter(
        ([prop, val]) => val
      );

      let numbersCount = 0;

      if (this.complexity % 2 === 0) {
        numbersCount = 3;
      } else {
        numbersCount = 2;
      }

      for (let i = 0; i < numbersCount; i++) {
        let randomNum = Math.floor(Math.random() * digitsCount);
        let randomOperationIndex =
          Math.floor(Math.random() * operations.length) + 1;
        let randomOperation =
          operationsMap[operations[randomOperationIndex - 1][0]];

        if (task[task.length - 1] === "**" || randomOperation === "**") {
          randomNum = Number(randomNum.toString().substring(0, 1));
        }

        task.push(randomNum);

        if (numbersCount != i + 1) task.push(randomOperation);
      }

      this.task = task.join(" ");
    },
    checkEqual(event) {
      if (this.answer == calc(this.task)) {
        alert("Верно!");
        this.generateTask();
        this.answer = "";
        this.incrementAnswerCounter();
      } else {
        alert("Неверно! Подумайте еще!");
      }

      function calc(fn) {
        return new Function("return " + fn)();
      }
    },
    handleEvent(event, value) {
      if (value == "=") {
        this.checkEqual(event);
      } else if (value == "<") {
        this.$refs.answerInput.setSelectionRange(
          this.$refs.answerInput.selectionStart - 1,
          this.$refs.answerInput.selectionStart - 1
        );
        this.$refs.answerInput.focus();
      } else if (value == ">") {
        this.$refs.answerInput.setSelectionRange(
          this.$refs.answerInput.selectionStart + 1,
          this.$refs.answerInput.selectionStart + 1
        );
        this.$refs.answerInput.focus();
      } else {
        this.answer = "";
      }
    },
    handleNumberClick(event, value) {
      this.answer += (value - 1).toString();
    }
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

.gamewindow__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.gamewindow__timer {
  width: 3rem;
  border: 2px solid lightgray;
  padding: 0.5rem;
}

.gamewindow__calculator {
  display: flex;
  margin: 1rem 0;
}

.gamewindow__calculator__keys {
  width: 75%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  user-select: none;
  cursor: pointer;
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
  border: 2px solid lightgray;
  padding: 0.4rem 1rem;
}

.gamewindow__calculator_operators {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
  width: 25%;
  user-select: none;
  cursor: pointer;
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