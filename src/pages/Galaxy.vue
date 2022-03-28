<template>
    <div
        class="
            h-screen
            w-screen
            px-4
            py-6
            lg:py-8
            flex
            justify-center
            relative
            z-10
            bg-gray-100
        "
    >
        <div class="container space-y-8">
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
                    <div class="w-full">
                        <div class="text-sm text-gray-500">
                            Autoridade que deseja
                        </div>
                        <select v-model="desired_authority" class="input-base">
                            <option value="null" disabled>Selecione</option>
                            <option
                                v-for="(auth, index) in authorities"
                                v-bind:key="index"
                                v-bind:value="auth['value']"
                            >
                                {{ auth[gender] }}
                            </option>
                        </select>
                    </div>
                </div>
                <!-- visual current authority -->
                <div>
                    <div class="text-sm text-gray-500">Sua autoridade agora</div>

                    <div
                        class="
                            w-full
                            p-4
                            rounded-lg
                            border border-dashed border-primary-500
                            flex
                            items-center justify-center
                            gap-1
                            flex-wrap
                        "
                    >
                        <div v-if="current_authority <= 0" class="h-10 text-gray-500 flex items-center">
                            Sua autoridade irá aparecer aqui
                        </div>
                        <img
                            v-else
                            class="h-10"
                            v-for="(img, index) in getCurrentAuthorityInStars()"
                            v-bind:key="index"
                            v-bind:src="img"
                        />
                    </div>
                </div>
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
                <div class="px-6 py-8">
                    <div class="flex gap-4">
                        <div
                            class="
                                border border-dashed border-primary-500
                                p-4
                                rounded-lg
                                flex
                                items-center
                                justify-center
                            "
                        >
                            .
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <GenderSelect v-model="gender" />
    </div>
</template>

<script>
import GenderSelect from "../components/GenderSelect.vue";
import { maska } from "maska";

export default {
    directives: { maska },
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

        const starImgBase = "https://galaxy.mobstudio.ru/server_pics/a4/";

        const authorityStars = [
            { value: 5859375, img: starImgBase + "10.png" },
            { value: 1171875, img: starImgBase + "9.png" },
            { value: 234375, img: starImgBase + "8.png" },
            { value: 46875, img: starImgBase + "7.png" },
            { value: 9375, img: starImgBase + "6.png" },
            { value: 1875, img: starImgBase + "5.png" },
            { value: 375, img: starImgBase + "4.png" },
            { value: 75, img: starImgBase + "3.png" },
            { value: 25, img: starImgBase + "2.png" },
            { value: 5, img: starImgBase + "1.png" },
            { value: 4, img: starImgBase + "04.png" },
            { value: 3, img: starImgBase + "03.png" },
            { value: 2, img: starImgBase + "02.png" },
            { value: 1, img: starImgBase + "01.png" },
        ];

        return { authorities, authorityStars };
    },
    data() {
        return {
            desired_authority: null,
            current_authority: 0,
            gender: localStorage.getItem("glx_gender") || "M",
        };
    },
    methods: {
        getCurrentAuthorityInStars() {
            let authority = this.current_authority;
            let imgs = [];

            this.authorityStars.forEach((authStar) => {
                if (authStar.value <= authority) {
                    let times = Math.floor(authority / authStar.value);
                    authority = authority - times * authStar.value;

                    for (let index = 0; index < times; index++) {
                        imgs.push(authStar.img);
                    }
                }
            });

            return imgs;
        },
    },
    components: {
        GenderSelect,
    },
};
</script>