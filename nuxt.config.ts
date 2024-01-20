// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ["~/assets/scss/main.scss"],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
						@import "@/assets/scss/abstract/_variables.scss"; 
						@import "@/assets/scss/abstract/_mixins.scss";
					`,
                },
            },
        },
    },
    devtools: { enabled: true },
});
