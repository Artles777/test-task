<template>
    <div class="modal__divider" v-if="!getNext"></div>
    <div class="modal__header">
        <span
            class="modal__header_back"
            v-if="getNext && getSize <= 380"
            @click="changeNext">
            arrow_back
        </span>
        <h3 class="modal__header_text">
                {{ getSize > 380 ? 'Мой отзыв' : 'Новый отзыв'}}
        </h3>
        <button class="modal__header_close" @click="changeOpen">
            &times;
        </button>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
    computed: mapGetters(['getSize', 'getNext']),
    methods: mapMutations(['changeNext', 'changeOpen'])
}
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';

    .modal {
        &__divider {
                position: absolute;
                left: 46%;
                top: 4px;
                width: 24px;
                height: 3px;
                background: #CFD3DD;
                border-radius: 4px;
                text-align: center;
            }

        &__header {
            display: flex;
            justify-content: space-between;
            margin: 18px 18px 16px 32px;

            &_back {
                font-family: "Material icons";
                color: #9AA2B7;
                font-size: 21px;
                margin-left: 2px;
            }

            &_close {
                color: $color-btn-close;
                font-size: 31px;
                line-height: 1.4rem;
                cursor: pointer;
            }

            @media (min-width: 320px) and (max-width: 380px) {
                margin: 18px 16px 16px 16px;

                &_close {
                    line-height: 1.2rem;
                    padding-left: 6.5rem;
                }
            }
        }
    }
</style>
