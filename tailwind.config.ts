import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
        glitch: {
          "0%": {
            transform: "none",
            filter: "invert(0.1)",
          },
          "25%": {
            filter: "invert(0)",
          },
          "50%": {
            filter: "invert(0.2)",
          },
          "75%": {
            filter: "invert(0)",
          },
          "100%": {
            transform: "none",
            filter: "invert(0.1)",
          },
        },
        glitch_wave: {
          "0%":{
            transform: "none",
          },
          "25%": {
            transform: "translate(-5px, 5px)",
          },
          "50%": {
            transform: "translate(5px, -5px)",
          },
          "75%": {
            transform: "translate(-5px, 5px)",
          },
          "100%": {
            transform: "none",
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "gradient-foreground-1": {
          "from, 16.667%, to": {
            opacity: "1",
          },
          "33.333%, 83.333%": {
            opacity: "0",
          },
        },
        "gradient-background-1": {
          "from, 16.667%, to": {
            opacity: "0",
          },
          "25%, 91.667%": {
            opacity: "1",
          },
        },
        "gradient-foreground-2": {
          "from, to": {
            opacity: "0",
          },
          "33.333%, 50%": {
            opacity: "1",
          },
          "16.667%, 66.667%": {
            opacity: "0",
          },
        },
        "gradient-background-2": {
          "from, to": {
            opacity: "1",
          },
          "33.333%, 50%": {
            opacity: "0",
          },
          "25%, 58.333%": {
            opacity: "1",
          },
        },
        "gradient-foreground-3": {
          "from, 50%, to": {
            opacity: "0",
          },
          "66.667%, 83.333%": {
            opacity: "1",
          },
        },
        "gradient-background-3": {
          "from, 58.333%, 91.667%, to": {
            opacity: "1",
          },
          "66.667%, 83.333%": {
            opacity: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "gradient-background-1": "gradient-background-1 8s infinite",
        "gradient-foreground-1": "gradient-foreground-1 8s infinite",
        "gradient-background-2": "gradient-background-2 8s infinite",
        "gradient-foreground-2": "gradient-foreground-2 8s infinite",
        "gradient-background-3": "gradient-background-3 8s infinite",
        "gradient-foreground-3": "gradient-foreground-3 8s infinite",
        pulse: "pulse 2s infinite",
        pingSlow: "ping 4s cubic-bezier(0, 0, 0.4, 1) infinite",
        bounce: "bounce 2.5s infinite",
        spinSlow: "spin 5.3s linear infinite",
        wave: "wave 10.6s infinite",
        glitch: "glitch 1s infinite",
        glitch_wave: "glitch_wave 8s ease-in-out infinite",
        glitch_wave_fast: "glitch_wave 1s ease-in-out infinite",
      },
      gradientColorStops: {
        "gradient-1-start": "#007CF0",
        "gradient-1-end": "#00DFD8",
        "gradient-2-start": "#7928CA",
        "gradient-2-end": "#FF0080",
        "gradient-3-start": "#FF4D4D",
        "gradient-3-end": "#F9CB28",
      },
    },
    fontFamily: {
      inter: "var(--font-inter)",
      actor: "var(--font-actor)",
      clourso: ["Clourso", "sans-serif"]
    },
  },
  plugins: [require("tailwindcss-animate"), require("daisyui")],
}

export default config;
