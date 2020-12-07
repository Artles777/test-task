<template>
    <div
        class="modal__content_info"
        v-if="getNext === false || getSize > 380"
        :style="{
            border:
                !ratingSpeedCount
                || !ratingSpeedVideoCount
                || !ratingQualityCount
                || !ratingPunctualityCount
                ? '1px solid red' : ''
        }"
    >
        <Rating
            v-for="field of getRating"
            :key="field.id"
            :fieldInfo="field"
        />
    </div>
    <form
        id="add-comment"
        method="post"
        class="modal__content_form"
        v-if="getNext === true"
        @submit.prevent="onSubmit"
    >
        <Comment />
        <AddFoto />
    </form> 
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import Rating from '@/components/ModalContent/Rating.vue'
import Comment from '@/components/ModalContent/Comment.vue'
import AddFoto from '@/components/ModalContent/AddFoto.vue'

export default {
    name: 'ModalContentInfo',
    components: {
        Rating,
        Comment,
        AddFoto
    },
    computed: mapGetters([
        'getRating',
        'getNext',
        'getSize',
        'ratingSpeedCount',
        'ratingSpeedVideoCount',
        'ratingQualityCount',
        'ratingPunctualityCount'
    ]),
    methods : {
        ...mapActions(['loadFieldRating']),
        ...mapMutations(['changeOpen']),
        onSubmit () {
            this.changeOpen()
            alert('Спасибо, отзыв опубликован!')
        }
    },
    mounted () {
        this.loadFieldRating()
    }
}
</script>

<style lang="scss" scoped>
    .modal {
        &__content {
            &_info {
                margin: 32px 0;
                display: grid;
                grid-template-columns: repeat(2, 220px);
                grid-template-rows: repeat(2, 1fr);
                grid-row-gap: 23px;

                @media (min-width: 320px) and (max-width: 380px) {
                    grid-template-rows: repeat(4, 1fr);
                    grid-template-columns: 1fr;
                    grid-row-gap: 20px;
                    margin: 26px 0;
                }
            }
        }
    }
</style>
