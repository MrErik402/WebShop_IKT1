/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Src/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "tarsas1": {
          light: "#F5EBEB",
          dark: "#DBAFA0"
        },
        "tarsas2": {
          light: "#E4D0D0",
          dark: "#BB8493"
        },
        "tarsas3": {
          light: "#D5B4B4",
          dark: "#704264"
        },
        "tarsas4": {
          light: "#867070",
          dark: "#49243E"
        }
      }
    }
  }
}

