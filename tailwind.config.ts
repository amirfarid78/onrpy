import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
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
