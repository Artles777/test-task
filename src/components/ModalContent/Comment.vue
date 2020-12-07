<template>
    <div class="modal__content_form-field">
        <textarea
            class="modal__content_form-area"
            form="add-comment"
            name="form-comment"
            placeholder="Комментарий"
            :value="getMessage"
            @input="updateMessage"
            :style="{'border-color': messageCount === 0 ? 'red' : ''}"
        />
        <p class="modal__content_form-count">{{ messageCount }}/500</p>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
    computed: mapGetters(['getMessage', 'messageCount']),
    methods: {
        ...mapMutations(['changeMessage']),
        updateMessage (e) {
            this.changeMessage(e.target.value)
        }
    }
}
</script>

<style lang="scss" scoped>
    .modal {
        &__content {
            &_form {
                &-area {
                    font-family: Montserrat;
                    width: 100%;
                    height: 100px;
                    resize: none;
                    outline: none;
                    background: #FAFAFA;
                    border: 1px solid #EAECF0;
                    border-radius: 6px;
                    font-size: 16px;
                    padding: 10px 12px 12px 12px;
                    color: #7F899E;

                    @media (min-width: 320px) and (max-width: 380px) {
                        height: 144px;
                        padding-left: 12px;
                        padding-top: 17px;
                    }
                }

                &-count {
                    text-align: end;
                    font-size: 12px;
                    color: #7F899E;
                    line-height: 1rem;
                }
            }
        }
    }
</style>
