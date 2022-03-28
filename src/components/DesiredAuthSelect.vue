<template>
    <div class="w-full">
        <div class="text-sm text-gray-500">Autoridade que deseja</div>
        <select
            v-model="modelValue"
            class="input-base"
            v-on:change="
                $emit('update:modelValue', parseInt($event.target.value))
            "
        >
            <option value="0" disabled>Selecione</option>
            <option
                v-for="(auth, index) in authorities"
                v-bind:key="index"
                v-bind:value="auth.value"
            >
                {{ auth[gender] }}
            </option>
        </select>
    </div>
</template>

<script>
export default {
    setup() {
        const authorities = [
            { M: "Pai", F: "Mãe", value: 100 },
            { M: "Anjo", F: "Anjo", value: 500 },
            { M: "Deus", F: "Deusa", value: 1000 },
            { M: "Todo Poderoso", F: "Toda Poderosa", value: 5000 },
            { M: "Mister", F: "Miss", value: 10000 },
            { M: "Lenda", F: "Lenda", value: 50000 },
            { M: "Prêmie", F: "Prêmie", value: 100000 },
            { M: "Guardião", F: "Guardiã", value: 500000 },
            { M: "Imperador", F: "Imperatriz", value: 1000000 },
            { M: "Soberano", F: "Soberada", value: 5000000 },
            { M: "Protetor", F: "Protetora", value: 10000000 },
        ];

        return { authorities };
    },
    props: {
        modelValue: {
            type: Number,
            required: true,
        },
        gender: {
            type: String,
            required: true,
        },
    },
};
</script>