<template>
    <div class="modal__content_form-field">
        <textarea
            class="modal__content_form-area"
            name="form-comment"
            placeholder="Комментарий"
        />
        <p class="modal__content_form-count">12/500</p>
    </div>
</template>

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
                    padding: 15px 12px 12px 10px;
                    color: #7F899E;

                    @media (min-width: 320px) and (max-width: 380px) {
                        height: 144px;
                        padding-left: 12px;
                    }
                }

                &-count {
                    text-align: end;
                    font-size: 12px;
                    color: #7F899E;
                }
            }
        }
    }
</style>
