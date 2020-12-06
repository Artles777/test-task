<template>
    <div class="modal__content_rating">
        <label for="speed" class="modal__content_rating-label">
            {{ fieldInfo.title }}
        </label>
        <div class="modal__content_rating-stars">
            <span 
                v-for="star of stars"
                :key="star.id"
                @click="check(star)"
                :class="{checked: star.checked}"
                class="modal__content_rating-star icon-star"
            />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        fieldInfo: {
            type: Object,
            requered: true
        }
    },
    data () {
        return {
            stars: [
                { id: 5, checked: false },
                { id: 4, checked: false },
                { id: 3, checked: false },
                { id: 2, checked: false },
                { id: 1, checked: false }
            ]
        }
    },
    methods: {
        check (star) {
            this.stars.forEach(el => el.checked = false)
            star.checked = true
        }
    },
    mounted () {
        this.stars.forEach(el => el.id <= 3 && this.fieldInfo.id === 1 ? el.checked = true : '')
    }
}
</script>

<style lang="scss" scoped>
@import '@/style/fontello.scss';

    .modal {
        &__content {
            &_rating {

                // &:first-of-type {
                //     & > div {
                //         & > span {
                //             &:nth-child(3) ~ span, &:nth-child(3) {
                //                 color: #53C6D1;
                //             }
                //         }
                //     }
                // }

                &-stars {
                    margin-top: 8px;
                    direction: rtl;
                }

                &-star {
                    @media (min-width: 320px) and (max-width: 380px) {
                        margin-right: 2px;
                    }


                    font-size: 24px;
                    color: #EAECF0;

                    &:hover, &:hover ~ & {
                        color: #53C6D1;
                    }
                }
            }
        }
    }
    .checked, .checked ~ span  {
        color: #53C6D1;
    }
</style>
