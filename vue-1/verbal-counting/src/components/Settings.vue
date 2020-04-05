<template>
  <div class="settings__container">
    <h1 class="settings__title">Привет!</h1>
    <p class="settings__text">
      Добро пожаловать на 24 тренировочный день,
      <br />Ваш последний резльтат: решено 10 из 25.
      <br />Общая точность 80%.
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
        v-model="duration"
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
        min="1" max="10" 
        step="1" 
        v-model="complexity"
      />
      10
      <div>Сложность {{complexity}}</div>
    </div>
    <div v-for="(box, index) in checkboxes" :key="index" class="settings__checkboxes">
      <input type="checkbox" :id="'box' + index" class="settings__checkbox" />
      <label :for="'box' + index" class="settings__checkbox_label">{{box.name}}</label>
    </div>
    <div class="settings__button_container">
    <router-link to="/GameWindow" class="settings__button">Play!</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      duration: 1,
      complexity: 1,
      checkboxes: [
        {
          name: "Суммирование",
          value: false
        },
        {
          name: "Вычитание",
          value: false
        },
        {
          name: "Умножение",
          value: false
        },
        {
          name: "Деление",
          value: false
        },
        {
          name: "Возведение в степень",
          value: false
        }
      ],
    };
  }
};
</script>

<style>
.settings__container {
  width: 50%;
  text-align: left;
  padding: 3rem;
  margin: auto;
  border: 1px solid lightblue;
}
.settings__title_2{
  margin: 2rem 0;

}

.settings__time-range{
 margin: 2rem 0;
}

.settings__complexity-range{
  margin-bottom: 2rem;
}

.settings__checkboxes{
  margin: 1rem 0;
}

.settings__button_container {
  text-align: end;
}

.settings__button {
  text-decoration: none;
  color: darkslategrey;
  border: 1px solid lightgray;
  padding: 0.4rem 1rem;
  box-shadow: -1px 2px 3px 1px lightgray;
}


</style>