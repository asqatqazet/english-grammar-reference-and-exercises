/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        container: {
            center: false,
        },
        extend: {
            colors: {
                "asheh-kok": "var(--asheh-kok)",
                "kok": "var(--kok)",
                "hara-kok": "var(--hara-kok)",
                "orange": "var(--orange)",
                "rust-red": "var(--rust-red)"
            },
            fontFamily: {
                sans: ["var(--sans)"],
                serif: ["var(--serif)"],
                cormorant: ["var(--cormorant-serif)"],
                proza: ["var(--proza-serif)"],
            }
        },
    },
    plugins: [require('daisyui')],
    daisyui: {
        styled: true,
        themes: false,
        base: true,
        utils: true,
        logs: true,
        rtl: false,
        prefix: "",
        darkTheme: "dark",
    },
}
