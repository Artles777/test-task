<template>
    <div class="modal__footer">
        <div class="modal__footer_wrapper">
            <button
                class="modal__footer_btn"
                type="submit"
                name="push-comment"
                v-if="getNext"
                form="add-comment"
                :disabled="
                    !fotosCount
                    || !messageCount
                    || !ratingSpeedCount
                    || !ratingSpeedVideoCount
                    || !ratingQualityCount
                    || !ratingPunctualityCount
                "
            >
                Отправить
            </button>
            <button class="modal__footer_btn" v-if="!getNext" @click="changeNext" >
                Продолжить
            </button>
        </div>
    </div>
</template>

<script>
import { mapGetters , mapMutations } from 'vuex'

export default {
    computed: mapGetters([
        'getNext',
        'fotosCount',
        'messageCount',
        'ratingSpeedCount',
        'ratingSpeedVideoCount',
        'ratingQualityCount',
        'ratingPunctualityCount'
    ]),
    methods: mapMutations(['updateNext', 'changeNext']),
    mounted () {
        this.updateNext()
    }
}
</script>

<style lang="scss" scoped>
    .modal {
        &__footer {
            margin: 16px;
            margin-left: 32px;

            &_wrapper {
                text-align: end;
            }

            &_btn {
                color: #FFFFFF;
                background: #53C6D1;
                border-radius: 6px;
                padding: 9px 12px;
                font-family: Montserrat;
                font-size: 15px;
                font-weight: 600;
                letter-spacing: -0.03rem;
                cursor: pointer;

                &:disabled {
                    border: 1px solid red;
                }
            }

            @media (min-width: 320px) and (max-width: 380px) {
                margin-left: 16px;
                margin-right: 16px;
            }
        }
    }
</style>
