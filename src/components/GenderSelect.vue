<template>
    <div
        class="
            absolute
            right-8
            bottom-8
            z-50
            flex flex-col
            items-center
            justify-center
            rounded-lg
            p-2
            border border-gray-300
            bg-white
        "
    >
        <div class="py-1">F</div>
        <div class="h-12 w-6 p-1 bg-primary-500 rounded-full relative">
            <button
                v-on:click.prevent.stop="toggleGender()"
                type="button"
                class="
                    absolute
                    h-4
                    w-4
                    bg-white
                    rounded-full
                    transform
                    duration-300
                "
                v-bind:class="{
                    'translate-y-6': modelValue === 'M',
                }"
            ></button>
        </div>
        <div class="py-1">M</div>
    </div>
</template>

<script>
export default {
    props: {
        modelValue: {
            type: String,
            required: true,
        },
    },
    methods: {
        toggleGender() {
            let emitGender = "M";
            this.modelValue === "M" ? (emitGender = "F") : (emitGender = "M");

            this.$emit("update:modelValue", emitGender);
            localStorage.setItem("glx_gender", emitGender);
        },
    },
};
</script>