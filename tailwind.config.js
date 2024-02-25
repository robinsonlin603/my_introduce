/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'weather-primary': '#00668A',
                'weather-secondary': '#004E71',
                'gray-primary': '#F4F4F4',
                'black-primary': '#0F0E0E'
            }
        },
        fontFamily: {
            Roboto: ['Roboto', 'sans-serif']
        },
        container: {
            center: true,
            padding: '2rem'
        },
        screens: {
            sm: '640px',
            md: '1024px'
        }
    },
    plugins: []
};
