module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        colors: {
            primary: '#B91C1C',
            dark: '#18181B',
            secondary: '#3F3F46',
            line: '#D9D9D9',
            'line-dark': '#52525B',
            body: '#F3F4F6',
            content: '#111827',
            white: '#FFFFFF',
        },
        fontFamily: {
            body: ['IRANSansX'],
        },
    },
    variants: {
        extend: {
            grayscale: ['hover'],
            visibility: ['group-hover'],
            rotate: ['hover', 'group-hover'],
        },
    },
    plugins: [require('tailwindcss-rtl')],
};
