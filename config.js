// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'Florian',
  imageBackground: false,
  openInNewTab: false,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: 'Guten Morgen,',
  greetingAfternoon: 'Guten Nachmittag,',
  greetingEvening: 'Guten Abend,',
  greetingNight: 'Geh langsam schlafen,',

  // Weather
  weatherKey: '61a3f101463e27dfed033f3f1a22c402',
  weatherIcons: 'OneDark', // 'Nord', 'Dark', 'White'
  weatherUnit: 'C', // 'F', 'C'
  language: 'de', // More languages in https://openweathermap.org/current#multi

  trackLocation: false, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: '51.1833',
  defaultLongitude: '7.0833',

  // Autochange
  autoChangeTheme: false,

  // Autochabge by OS
  changeThemeByOS: false, 

  // Autochange by hour options (24hrs format, string must be in: hh:mm)
  changeThemeByHour: false,
  hourDarkThemeActive: '18:30',
  hourDarkThemeInactive: '07:00',

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Github',
      icon: 'github',
      link: 'https://github.com/',
    },
    {
      id: '2',
      name: 'Nextcloud',
      icon: 'cloud',
      link: 'https://cloud.flowei.tech/',
    },
    {
      id: '3',
      name: 'WhatsApp',
      icon: 'message-circle',
      link: 'https://web.whatsapp.com',
    },
    {
      id: '4',
      name: 'YouTube',
      icon: 'youtube',
      link: 'https://youtube.com',
    },
    {
      id: '5',
      name: 'Twitch',
      icon: 'twitch',
      link: 'https://twitch.com',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'shopping-cart',
  secondListIcon: 'wrench',

  // Links
  lists: {
    firstList: [
      {
        name: 'Amazon',
        link: 'https://amazon.de',
      },
      {
        name: 'Geizhals',
        link: 'https://geizhals.de',
      },
      {
        name: 'Mindfactory',
        link: 'https://mindfactory.de',
      }
    ],
    secondList: [
      {
        name: 'Trello',
        link: 'https://trello.com/',
      },
      {
        name: 'Figma',
        link: 'https://figma.com/',
      },
      {
        name: 'TS Admin Interface',
        link: 'https://tsi.flowei.tech',
      },
    ],
  },
};
