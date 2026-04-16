/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx}'],
    theme: {
        extend: {
            colors: {
                luxuryBlack: '#0B0B0F',
                luxuryGold: '#C9A227',
                luxuryGray: '#B7B7B7',
            },
        },
    },
    plugins: [],
};
