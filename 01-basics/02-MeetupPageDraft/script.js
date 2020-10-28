import Vue from './vue.esm.browser.js';

/** URL адрес API */
const API_URL = 'https://course-vue.javascript.ru/api';

/** ID митапа для примера; используйте его при получении митапа */
const MEETUP_ID = 6;

/**
 * Возвращает ссылку на изображение митапа для митапа
 * @param meetup - объект с описанием митапа (и параметром meetupId)
 * @return {string} - ссылка на изображение митапа
 */
function getMeetupCoverLink(meetup) {
  return `${API_URL}/images/${meetup.imageId}`;
}

/**
 * Словарь заголовков по умолчанию для всех типов элементов программы
 */
const agendaItemTitles = {
  registration: 'Регистрация',
  opening: 'Открытие',
  break: 'Перерыв',
  coffee: 'Coffee Break',
  closing: 'Закрытие',
  afterparty: 'Afterparty',
  talk: 'Доклад',
  other: 'Другое',
};

/**
 * Словарь иконок для для всех типов элементов программы.
 * Соответствует имени иконок в директории /assets/icons
 */
const agendaItemIcons = {
  registration: 'key',
  opening: 'cal-sm',
  talk: 'tv',
  break: 'clock',
  coffee: 'coffee',
  closing: 'key',
  afterparty: 'cal-sm',
  other: 'cal-sm',
};

function fetchMeetup() {
  return fetch(`${API_URL}/meetups/${MEETUP_ID}`, {
    method: 'GET',
  })
    .then(res => res.json())
    .then(res => res)
}


export const app = new Vue({
  el: '#app',

  data: {
    rawMeetup: null,
  },

  mounted() {
    // Требуется получить данные митапа с API
    this.getMeetup();
  },

  computed: {
    meetup(){
      if (this.rawMeetup){
        return {
          ...this.rawMeetup,
          cover: this.rawMeetup.imageId ? getMeetupCoverLink(this.rawMeetup) : '',
          localDate: new Date(this.rawMeetup.date).toLocaleString(
            navigator.language,
            {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            },
          ),
          // dateTime: this
          date: new Date(this.rawMeetup.date),
          agenda: this.rawMeetup.agenda.map(item => {
            return {...item,
              title: item.title ?? agendaItemTitles[item.type],
              icon: `icon-${agendaItemIcons[item.type]}`
            };
          })

        };
      } else {
        return null
      }

    },
  },


  methods: {
    async getMeetup() {
      this.rawMeetup = await fetchMeetup();
    },

    // Получение данных с API предпочтительнее оформить отдельным методом,
    // а не писать прямо в mounted()
  },
});
