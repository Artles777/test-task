<template>
    <div class="modal__content_description">
        <img
            src="@/assets/img1.jpg"
            alt="Фото в свадебном платье"
            class="modal__content_description-image"
        >
        <div class="modal__content_description-wrapper">
            <h3 class="modal__content_description-title">
                Фоточки в свадебном платьице
            </h3>
            <p class="modal__content_description-subtitle">
                Алена Смирнова
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .modal {
        &__content {
            &_description {
                display: flex;
                align-items: center;

                &-image {
                    margin-right: 20px;
                }

                &-title {
                    margin-bottom: 3px;
                }

                &-subtitle {
                    margin-top: 7px;
                    font-size: 12px;
                    color: #50586A;
                }

                @media (min-width: 320px) and (max-width: 380px) {
                    display: block;

                    &-image {
                        width: 84px;
                        height: 56px;
                    }

                    &-wrapper {
                        margin-top: 14px;
                    }

                    &-subtitle {
                        margin-top: 5px;
                    }
                }
            }
        }
    }
</style>
