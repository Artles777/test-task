<template>
    <div class="modal__content_rating">
        <label for="speed" class="modal__content_rating-label">
            {{ fieldInfo.title }}
        </label>
        <div class="modal__content_rating-stars">
            <span 
                v-for="star of fieldInfo.stars"
                :key="star.id"
                @click="check(star)"
                :class="{checked: star.checked}"
                class="modal__content_rating-star icon-star"
            />
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
    props: {
        fieldInfo: {
            type: Object,
            requered: true
        }
    },
    computed: mapGetters(['getRating', 'getDataRating']),
    methods: {
        ...mapMutations(['updateRating']),
        check (star) {
            this.fieldInfo.stars.forEach(el => el.checked = false)
            star.checked = true
            this.updateRating({
                key: this.fieldInfo.key,
                title: this.fieldInfo.title,
                rating: star.id
            })
            console.log(this.getDataRating)
        }
    },
    mounted () {
        this.fieldInfo.stars.forEach(el => el.id <= 3 && this.fieldInfo.id === 1 ? el.checked = true : '')
    }
}
</script>

<style lang="scss" scoped>
@import '@/style/fontello.scss';

    .modal {
        &__content {
            &_rating {
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
