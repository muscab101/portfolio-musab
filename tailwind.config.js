// // tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       keyframes: {
//         bounceCustom: {
//           '0%': { transform: 'translateY(0px)', opacity: '0' },
//           '25%': { transform: 'translateY(150px)', opacity: '0.5' },
//           '50%': { transform: 'translateY(350px)', opacity: '1' },
//           '100%': { transform: 'translateY(500px)', opacity: '0.1' },
//         },
//       },
//       animation: {
//         bounceCustom: 'bounceCustom 2s ease-in-out infinite',
//       },
//     },
//   },
//   plugins: [],
// }



// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        scrollX: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        scrollX: 'scrollX 20s linear infinite',
      },
    },
  },
  plugins: [],
}
