<script lang="ts" setup>
const { name, filled = false } = defineProps<{
    name: string;
    filled?: boolean;
}>();

const hasStroke = ref(false);
const icon = ref("");

async function fetchIcon() {
    try {
        const iconsImport = import.meta.glob("../assets/icons/**/**.svg", {
            as: "raw",
            eager: false,
        });

        const rawIcon = await iconsImport[`../assets/icons/${name}.svg`]();
        if (rawIcon.includes("stroke"))
            hasStroke.value = true;

        icon.value = rawIcon;
    }
    catch (error) {
        throw createError({
            statusCode: 414,
            statusMessage: `Icon "${name}" not found`,
        });
    }
}

await fetchIcon();

watchEffect(() => {
    fetchIcon();
});
</script>

<template>
    <span class="icon" :class="{ 'icon--fill': !filled, 'icon--stroke': hasStroke && !filled }" v-html="icon" />
</template>

<style>
.icon.icon--fill,
.icon.icon--fill * {
	fill: currentColor !important;
}

.icon.icon--stroke,
.icon.icon--stroke * {
	stroke: currentColor !important;
}
</style>
