<template>
    <div class="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="goal in goals" v-bind:key="goal.id" class="border rounded-lg">
            <div class="flex gap-4 items-center p-4">
                <img v-bind:src="goal.img" class="h-20 w-20" />
                <div>
                    <div class="text-2xl font-bold text-gray-700">
                        {{
                            neededHits(goal).toLocaleString(undefined, {
                                maximumFractionDigits: 2,
                            })
                        }}
                    </div>
                    <div class="text-gray-500">Acertos.</div>
                </div>
            </div>
            <div class="p-4 text-sm text-gray-400 border-t">
                {{ goal.desc }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        needed_authority: {
            type: Number,
            required: true,
        },
    },
    setup() {
        const goals = {
            gball_25: {
                id: "gball_25",
                type: "gold",
                value: 25,
                img: "https://i.ibb.co/7WXSNmB/gball-25.png",
                desc: "Gold mirando ouro / 25 pontos cada acerto.",
            },
            gball_75: {
                id: "gball_75",
                type: "gold",
                value: 75,
                img: "https://i.ibb.co/HFT9Fp3/gball-75.png",
                desc: "Gold mirando prata / 75 pontos cada acerto.",
            },
            fball_50: {
                id: "fball_50",
                type: "fire",
                value: 50,
                img: "https://i.ibb.co/T1s9XQx/fball-50.png",
                desc: "Fire mirando ouro / 50 pontos cada acerto.",
            },
            fball_150: {
                id: "fball_150",
                type: "fire",
                value: 150,
                img: "https://i.ibb.co/74kX5wv/fball-150.png",
                desc: "Fire mirando prata / 150 pontos cada acerto.",
            },
            xball_550: {
                id: "xball_550",
                type: "explosive",
                value: 550,
                img: "https://i.ibb.co/56nwpCS/xball-550.png",
                desc:
                    "Explosiva mirando 9 barris válidos (raro) / 550 pontos cada acerto.",
            },
            xball_500: {
                id: "xball_500",
                type: "explosive",
                value: 500,
                img: "https://i.ibb.co/sytqkqm/xball-500.png",
                desc:
                    "Explosiva mirando 8 barris válidos (médio) / 500 pontos cada acerto.",
            },
            xball_450: {
                id: "xball_450",
                type: "explosive",
                value: 450,
                img: "https://i.ibb.co/vx983xS/xball-450.png",
                desc:
                    "Explosiva mirando 7 barris válidos (comum) / 450 pontos cada acerto.",
            },
        };
        return { goals };
    },
    methods: {
        neededHits(goal) {
            return Math.ceil(this.needed_authority / goal.value);
        },
    },
};
</script>
