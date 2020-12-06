<template>
    <div class="modal">
        <div class="modal__mask">
            <div class="modal__wrapper">
                <div
                    class="modal__container"
                    :style="{
                        'border-radius': getNext && getSize <= 380 ? 0 : '',
                        'margin-top': getNext && getSize <= 380 ? 0 : ''
                    }"
                >
                    <Header />
                    <hr :style="{display: getNext ? 'block' : ''}" />
                    <Content />
                    <hr />
                    <Footer />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Header from '@/components/ModalHeader/Header.vue'
import Content from '@/components/ModalContent/Content.vue'
import Footer from '@/components/ModalFooter/Footer.vue'

export default {
    name: 'Modal',
    components: {
        Header,
        Content,
        Footer
    },
    computed: mapGetters(['getNext', 'getSize'])
}
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';

    .modal {
        display: block;
        text-align: left;

        &__mask {
            display: flex;
            justify-content: center;
            position: absolute;
            z-index: 1000;
            top: 0;
            left: 0;
            width: 100%;
            background: #666666;
        }

        &__wrapper {
            display: flex;
            align-items: center;
        }

        &__container {
            background: #fff;
            border-radius: 16px;
            margin: 56px 0;
            position: relative;

            & hr {
                &:first-of-type {
                    @media (min-width: 320px) and (max-width: 380px) {
                        display: none;
                    }
                }

                border: 1px solid #EAECF0;
                background: #EAECF0;
                border-radius: 1px;
            }

            @media screen and (min-width: 1300px) {
                max-width: 560px;
                width: 560px;
            }

            @media (min-width: 320px) and (max-width: 380px) {
                max-width: 320px;
                width: 320px;
                border-bottom-right-radius: 0;
                border-bottom-left-radius: 0;
                margin-bottom: 0;
            }
        }

        &__content, &__footer {
            @media (min-width: 320px) and (max-width: 380px) {
                margin-left: 16px;
                margin-right: 16px;
            }
        }
    }
</style>