<template>
    <div>
        <div class="text-sm text-gray-500 pb-1 flex justify-between">
            <span>{{ label }}</span>
        </div>
        <div
            class="
                w-full
                p-4
                rounded-lg
                border border-dashed border-gray-400
                flex
                items-center
                justify-center
                gap-1
                flex-wrap
            "
        >
            <div
                v-if="authority === null"
                class="h-10 flex items-center text-gray-500"
            >
                {{ placeholder_null }}
            </div>
            <div
                v-else-if="authority == 0"
                class="h-10 flex items-center text-gray-500"
            >
                {{ placeholder_zero }}
            </div>
            <img
                v-else
                class="h-10"
                v-for="(img, index) in authorityinStars(authority)"
                v-bind:key="index"
                v-bind:src="img"
            />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        authority: {
            type: [Number, String],
            default: null,
        },
        placeholder_null: {
            type: String,
            required: true,
        },
        placeholder_zero: {
            type: String,
            required: true,
        },
        label: {
            type: String,
            required: true,
        },
    },
    setup() {
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

        return { authorityStars };
    },

    methods: {
        authorityinStars(authority) {
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
};
</script>