<script lang="ts" setup>
defineProps<{
    title: string;
}>();

defineEmits<(event: "closeModal") => void>();
</script>

<template>
    <Transition name="fade" mode="out-in" appear>
        <div class="modal bg-white position-fixed z-9 overflow-auto">
            <div class="modal__header bg-white position-sticky d-flex items-center content-between">
                <h3 class="col-slate-one weight-medium">
                    {{ title }}
                </h3>
                <button class="close-modal bg-transparent col-slate-one cursor-pointer" @click="$emit('closeModal')">
                    <IconLoader name="close" />
                </button>
            </div>

            <div class="modal__content">
                <slot />
            </div>
        </div>
    </Transition>
    <Transition name="fade" mode="out-in" appear>
        <div class="modal-overlay position-fixed z-8" />
    </Transition>
</template>

<style lang="scss" scoped>
.modal {
    border: 1.5px solid var(--grey);
    width: 75rem;
    max-width: 85vw;
    max-height: 80vh;
    margin: 0 auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: #64646f33 0 0.7rem 2.9rem 0;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }

    &__header {
        top: 0;
        padding: 3.2rem;
        border-bottom: 0.15rem solid var(--grey);

        h3 {
            @include font(3.2rem, 100%);
        }

        .close-modal {
            width: 3rem;
            height: 3rem;
            border: 0.15rem solid var(--grey);
            padding-top: 0.2rem;
        }
    }

    &__content {
        padding: 3.2rem;
    }
}

.modal-overlay {
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
    background-color: #646467a2;
}
</style>
