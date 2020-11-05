import { agendaItemTitles, agendaItemIcons } from '../02-MeetupPageComponent/data.js';

export const MeetupAgendaItem = {
  name: 'MeetupAgendaItem',

  template: `<div class="meetup-agenda__item">
      <div class="meetup-agenda__item-col">
        <img class="icon" alt="icon" :src="'/assets/icons/icon-' + getIcon + '.svg'" />
      </div>
      <div class="meetup-agenda__item-col">{{agendaItem.startsAt}} - {{agendaItem.endsAt}}</div>
      <div class="meetup-agenda__item-col">
        <h5 class="meetup-agenda__title">{{getTitle}}</h5>
        <p v-if="agendaItem.type === 'talk'">
          <span>{{agendaItem.speaker}}</span>
          <span class="meetup-agenda__dot"></span>
          <span class="meetup-agenda__lang">{{agendaItem.language}}</span>
        </p>
        <p v-if="agendaItem.description">{{agendaItem.description}}</p>
      </div>
    </div>`,

  props: {
    agendaItem: {
      type: Object,
      required: true,
    },
  },

  // Возможно, тут потребуется computed
  computed: {
    getTitle() {
      if (this.agendaItem.title) {
        return this.agendaItem.title
      } else {
        return agendaItemTitles[this.agendaItem.type]
      }
    },
    getIcon() {
      return agendaItemIcons[this.agendaItem.type]
    }
  },

};
