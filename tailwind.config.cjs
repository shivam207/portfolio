/** @type {import('tailwindcss').Config} */
module.exports = {
  content:["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Atkinson Hyperlegible', 'sans-serif'], // Set as default sans font
        hyperlegible: ['Atkinson Hyperlegible', 'sans-serif'], // Custom class for explicit use
      },
      colors: {
        darkDesert: 'rgb(20 20 19)',
        lightDesert:'rgb(240 239 234)',
        goldDesert: '#C88A36',
        tealDesert: '#0D9B8C',
        softSand: '#D8C3A5',    // Warm beige, soft background
        paleCream: '#FAF3E0',    // Very light cream, for highlights
        mutedGold: '#CBA135',    // Muted gold, for accents
        calmTeal: '#70A5A5',     // Calm teal, balanced and soothing
        warmClay: '#AA7D57',     // Warm brown, for earthy tones
        pastelMint: '#A7D7C5',   // Pastel mint, refreshing yet subtle
        lightSky: '#A9DFF7',     // Light sky blue, peaceful and airy
        roseDust: '#E6B8C2',     // Soft rose, adds warmth and comfort
        // lightBackground: "#FDFCFB",
        secondBackground: 'rgb(240 239 234)',
        lightBackground: '#FDFCFB',   // Soft white for backgrounds
        lightSurface: '#F7F3F0',      // Slightly darker than the background for sections or cards
        lightBorder: '#E0D6D0',       // Subtle neutral tone for borders
        lightPrimaryText: '#4E4A46',  // Dark neutral for high readability
        lightSecondaryText: '#7D766E', // Muted gray for secondary text
        lightAccent: '#C5A880',       // Warm, subtle accent (like gold/beige)
        lightLink: '#4A94A6',         // Calming blue for links and CTAs
        lightMuted: '#E9E5E2',        // Muted, light color for dividers or less important elements
        lightHighlight: '#F3DEBA',    // Warm, soft highlight for interactive elements
        lightError: '#D98888',        // Light, soft red for errors or alerts
      },
    },
  },
  plugins: [],
}

