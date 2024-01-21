<script lang="ts" setup>
defineProps<{
    id: string;
    label?: string;
    type: string;
    placeholder: string;
}>();

const modelValue = defineModel<string>();
</script>

<template>
    <label :for="id" class="w-100 d-flex flex-column items-start content-center">
        <span v-if="!!label" class="w-100 form-label col-grey weight-medium d-block items-center content-between">
            {{ label }}
        </span>

        <div class="position-relative w-100">
            <input
                :id="id" v-model="modelValue" :type="type" :name="id" class="w-100 weight-regular bg-transparent col-grey"
                :placeholder="placeholder"
            >
        </div>
    </label>
</template>

<style lang="scss" scoped>
label {
	.form-label {
		@include font(1.4rem, 100%);
		margin-bottom: 1.2rem;
	}

	input {
		border: 0.1rem solid var(--slate-five);
		padding: 1.2rem 1.5rem;
		@include font(1.6rem, 100%);
        transition: border 0.3s ease-in;

		&:focus {
			border: 0.1rem solid var(--blue);
            outline: none;
		}
	}
}
</style>
