module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    fontFamily: {
      'tmodel1': ['Chakra Petch', 'sans-serif'],
      'tmodel2': ['Source Sans Pro', 'sans-serif'],
    },
    extend: {
      height: {
        '90ph': '90%',
        '10ph': '10%',
        '20ph': '20%',
        '15ph': '15%',
        'hwd' : '1.875rem'
      },
      width: {
        'wwd' : '1.875rem',
        '90pw' : '90%'
      },
      backgroundImage: {
        'random': "url('/src/img/paisaje-5.jpg')",
        'random1': "url('/src/img/random-1.jpg')",
        'random2': "url('/src/img/random-2.jpg')",
        'random3': "url('/src/img/random-3.jpg')",
        'random4': "url('/src/img/random-4.jpg')",
        'random5': "url('/src/img/random-5.jpg')",
        'foto11': "url('/src/img/evento-1.jpg')",
        'foto12': "url('/src/img/evento-2.jpg')",
        'foto13': "url('/src/img/evento-3.jpg')",
        'foto14': "url('/src/img/evento-4.jpg')",
        'foto20': "url('/src/img/evento-5.jpg')",
        'foto21': "url('/src/img/wedding-1.jpg')",
        'foto22': "url('/src/img/wedding-2.jpg')",
        'foto23': "url('/src/img/wedding-3.jpg')",
        'foto24': "url('/src/img/wedding-4.jpg')",
        'foto30': "url('/src/img/wedding-5.jpg')",
        'foto31': "url('/src/img/paisaje-1.jpg')",
        'foto32': "url('/src/img/paisaje-2.jpg')",
        'foto33': "url('/src/img/paisaje-3.jpg')",
        'foto34': "url('/src/img/paisaje-4.jpg')",
      
      },
      rotate: {
        '360': '360deg',
      },
      transitionProperty: {
        'text': 'text',
      }
    },
  },
  plugins: [],
}
