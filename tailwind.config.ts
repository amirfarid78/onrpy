import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                'fade-in': {
                    from: { opacity: "0", transform: 'translateY(10px)' },
                    to: { opacity: "1", transform: 'translateY(0)' },
                },
            },
            animation: {
                float: 'float 6s ease-in-out infinite',
                'float-slow': 'float 8s ease-in-out infinite',
                'float-delayed': 'float 7s ease-in-out infinite 2s',
                'fade-in': 'fade-in 1s ease-out forwards',
            },
            colors: {
                primary: {
                    DEFAULT: "#FF6B35",
                    dark: "#E55A2B",
                    light: "#FF8555",
                },
                accent: {
                    DEFAULT: "#FFC107",
                    hover: "#FFB300",
                },
                gold: {
                    DEFAULT: "#FFD700",
                    light: "#FFE44D",
                    dark: "#D4AF37",
                },
                surface: {
                    DEFAULT: "#FFFFFF",
                    highlight: "#FFF9F0",
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
};

export default config;
