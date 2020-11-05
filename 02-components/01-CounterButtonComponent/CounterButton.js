export const CounterButton = {
  // Шаблон потребуется отредактировать
  template: `<button @click="increment" type="button">{{count}}</button>`,

  // Компонент должен иметь входной параметр
  props: {
    count: {
      type: Number,
      required: false,
      default: 0,
    },
  },

  // Компонент должен иметь модель
  model: {
    prop: 'count',
    event: 'increment',
  },

  methods: {
    increment() {
      this.$emit('increment', this.count + 1);
    },
  },

  // Шаблон лучше держать максимально простым, а логику выносить в методы
};
