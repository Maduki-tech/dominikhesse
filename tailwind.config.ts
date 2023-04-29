import { type Config } from 'tailwindcss'

export default {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#7EC722',
                blackBG: '#2B2B2BEB',
                text: '#FFFFFFC2',
            },
            backgroundImage: {
                'hero-pattern': "url('https://dominikhesse.de/wp-content/uploads/2020/12/NEU-scaled.jpg')",
            },
        },
    },
    plugins: [],
} satisfies Config
