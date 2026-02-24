import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            fontFamily: {
                cormorantGaramond: ['var(--font-cormorant-garamond)', 'serif'],
                poppins: ['var(--font-poppins)', 'sans-serif'],
            },
        },
    },
    plugins: [],
};

export default config;