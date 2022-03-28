<template>
    <div
        class="
            h-screen
            w-screen
            px-4
            pt-6
            lg:py-8
            relative
            z-10
            bg-gray-100
            overflow-y-auto
        "
    >
        <div class="container space-y-8 mx-auto">
            <!-- form -->
            <div
                class="w-full px-6 py-8 rounded-lg bg-white shadow-md space-y-8"
            >
                <div class="flex gap-4">
                    <!-- current authority -->
                    <div class="w-full">
                        <div class="text-sm text-gray-500">
                            Autoridade atual
                        </div>
                        <input
                            v-maska="{ mask: '#*' }"
                            type="text"
                            placeholder="ex. 1432"
                            v-model="current_authority"
                            class="input-base"
                            maxlength="8"
                        />
                        <div class="text-sm text-gray-400">
                            Coloque sua autoridade em pontos.
                        </div>
                    </div>
                    <!-- desired authority -->
                    <desired-auth-select
                        v-model="desired_authority"
                        v-bind:gender="gender"
                    />
                </div>
                <!-- visual current authority -->
                <auth-in-stars
                    v-bind:authority="current_authority"
                    placeholder_null="Sua autoridade irá aparecer aqui."
                    placeholder_zero="Sua autoridade irá aparecer aqui."
                    v-bind:label="
                        'Sua autoridade agora - ' +
                        current_authority +
                        ' pontos.'
                    "
                />
            </div>
            <!-- result -->
            <div class="bg-white shadow-md rounded-lg">
                <!-- head -->
                <div
                    class="
                        text-primary-900
                        uppercase
                        text-center
                        py-6
                        border-b
                        text-lg
                        font-bold
                    "
                >
                    Resultado
                </div>
                <!-- body -->

                <!-- authority needed -->
                <auth-in-stars
                    class="px-6 py-8"
                    v-bind:authority="needed_authority"
                    placeholder_null="Selecione uma autoridade."
                    placeholder_zero="Já alcançou o objetivo selecione outro."
                    v-bind:label="
                        'Autoridade que você precisa - ' +
                        needed_authority +
                        ' pontos.'
                    "
                />

                <!-- necessary hits -->
                <goal-result v-bind:needed_authority="needed_authority" />
            </div>
        </div>

        <gender-select v-model="gender" />
    </div>
</template>

<script>
import GenderSelect from "../components/GenderSelect.vue";
import AuthInStars from "../components/AuthInStars.vue";
import DesiredAuthSelect from "../components/DesiredAuthSelect.vue";
import GoalResult from "../components/GoalResult.vue";
import { maska } from "maska";

export default {
    directives: { maska },
    data() {
        return {
            desired_authority: 0,
            current_authority: 0,
            gender: localStorage.getItem("glx_gender") || "M",
        };
    },
    computed: {
        needed_authority() {
            let need = this.desired_authority - this.current_authority;
            if (need < 0) need = 0;
            return need;
        },
    },
    components: {
        GenderSelect,
        AuthInStars,
        DesiredAuthSelect,
        GoalResult,
    },
};
</script>