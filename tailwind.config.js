module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    fontFamily: {
      'tmodel1': ['Chakra Petch', 'sans-serif'],
      'tmodel2': ['Source Sans Pro', 'sans-serif'],
    },
    extend: {
      height: {
        '90ph': '90%',
        '10ph': '10vh',
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
        'random6': "url('/src/img/random-6.jpg')",
        'random7': "url('/src/img/random-7.jpg')",
      
      },
      rotate: {
        '360': '360deg',
      },
      transitionProperty: {
        'text': 'text',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
