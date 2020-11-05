import { MeetupView } from './MeetupView.js';
import { MEETUP_ID, fetchMeetup } from './data.js';

export const MeetupPage = {
  name: 'MeetupPage',

  template: `<div v-if="meetup">
    <meetup-view :meetup="rawMeetup"></meetup-view>
  </div>`,

  components: {
    MeetupView,
  },

  data: {
    rawMeetup: null,
  },

  mounted() {
    this.getMeetup();
  },
  computed: {
    meetup() {
      if(this.rawMeetup) {
        return {
          ...this.rawMeetup,
        };
      }
    },
  },
  methods: {
    async getMeetup() {
      this.rawMeetup = await fetchMeetup(MEETUP_ID);
    },
  },
};
