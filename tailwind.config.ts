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
        background: "#080C14",
        card: "#0F172A",
        "card-border": "#1E293B",
        primary: {
          DEFAULT: "#00E676",
          hover: "#00C853",
          light: "#B9F6CA",
          dark: "#00A144",
          muted: "rgba(0, 230, 118, 0.15)",
        },
        brand: {
          accent: "#3B82F6",
          purple: "#8B5CF6",
          amber: "#F59E0B",
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
        'primary-glow': 'radial-gradient(circle, rgba(0, 230, 118, 0.25) 0%, rgba(8, 12, 20, 0) 70%)',
      },
    },
  },
  plugins: [],
};
export default config;
