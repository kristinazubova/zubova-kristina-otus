<template>
  <div class="settings__container">
    <h1 class="settings__title">Привет!</h1>
    <p class="settings__text">
      Добро пожаловать на текущий тренировочный день,
      <br />Ваш последний резльтат: решено {{ answerCounter }}.
    </p>
    <h2 class="settings__title_2">Настройки</h2>
    <div class="settings__time-range">
      1
      <input
        type="range"
        id="time"
        list="time"
        min="1"
        max="15"
        step="1"
        @change="(e) => { this.changeDuration(e.target.value) }"
        :value="duration"
      />
      15
      <div>Длительность {{duration}} минут</div>
    </div>
    <div class="settings__complexity-range">
      1
      <input
        type="range"
        id="complexity"
        list="complexity"
        min="1"
        max="5"
        step="1"
        @change="(e) => { this.changeComplexity(e.target.value) }"
        :value="complexity"
      />
      5
      <div>Сложность {{complexity}}</div>
    </div>
    <div v-for="(box, index) in checkboxes" :key="index" class="settings__checkboxes">
      <input
        type="checkbox"
        :id="'box' + index"
        class="settings__checkbox"
        :checked="operations[box.key]"
        @change="(e) => { toggleOperation(e.target.checked, box.key) }"
      />
      <label :for="'box' + index" class="settings__checkbox_label">{{box.name}}</label>
    </div>
    <div class="settings__button_container">
      <router-link to="/GameWindow" class="settings__button">Play!</router-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      checkboxes: [
        {
          name: "Суммирование",
          key: "sum"
        },
        {
          name: "Вычитание",
          key: "substract"
        },
        {
          name: "Умножение",
          key: "multipl"
        },
        {
          name: "Деление",
          key: "division"
        },
        {
          name: "Возведение в степень",
          key: "exponent"
        }
      ]
    };
  },
  computed: mapState([
    "duration", 
    "complexity", 
    "operations", 
    "answerCounter"
  ]),
  methods: {
    ...mapMutations([
      "changeDuration",
      "changeComplexity",
      "addOperation",
      "deleteOperation"
    ]),
    toggleOperation(value, type) {
      if (value) {
        this.addOperation(type);
      } else {
        this.deleteOperation(type);
      }
    }
  }
};
</script>

<style>
.settings__container {
  width: 50%;
  text-align: left;
  padding: 3rem;
  margin: auto;
  border: 2px solid lightblue;
}
.settings__title_2 {
  margin: 2rem 0;
}

.settings__time-range {
  margin: 2rem 0;
}

.settings__complexity-range {
  margin-bottom: 2rem;
}

.settings__checkboxes {
  margin: 1rem 0;
}

.settings__button_container {
  text-align: end;
}

.settings__button {
  text-decoration: none;
  color: darkslategrey;
  border: 2px solid lightgray;
  padding: 0.4rem 1rem;
}
</style>