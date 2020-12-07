<template>
    <div class="modal__content_form-foto">
        <div class="modal__content_form-foto-plus">
            <input
                id="add-foto"
                form="add-comment"
                name="add-foto"
                type="file"
                class="modal__content_form-foto-plus-input"
                multiple
                @change="addFoto"
            >
            <label for="add-foto" class="modal__content_form-foto-plus-label">+</label>
        </div>
        <div v-for="foto of getFotos" :key="foto.id" class="modal__content_form-foto-wrapper">
            <img :src="foto.src" accept="image/*" alt="" class="modal__content_form-foto-item">
            <button class="modal__content_form-foto-del" type="reset" @click="delFoto(foto)">delete_outline</button>
        </div>
        <img src="" alt="" class="img">
        <p class="valid-fotos" v-if="getFotos.length === 0">Добавьте фото</p>
    </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
    computed: mapGetters(['getFotos', 'getSize']),
    methods: {
        ...mapActions(['loadFotos']),
        ...mapMutations(['pushFoto', 'deleteFoto']),
        addFoto (event) {
            this.pushFoto({ id: Date.now(), src: URL.createObjectURL(event.target.files[0]) })
        },
        delFoto (foto) {
            this.deleteFoto(foto.id)
        }
    },
    mounted () {
        this.loadFotos(),
        this.getSize <= 380 ?
            this.pushFoto({ id: 5, src: require('@/assets/img6.jpg') })
            : false
    }
}
</script>

<style lang="scss" scoped>
    .valid-fotos {
        color: red;
        font-weight: 700;
        width: 10rem;
        display: flex;
        align-items: center;
    }
    .modal {
        &__content {
            &_form {
                &-foto {
                    display: grid;
                    grid-template-columns: repeat(5, 80px);
                    grid-gap: 8px;
                    margin: 14px 0;

                    @media (min-width: 320px) and (max-width: 380px) {
                        grid-template-columns: repeat(3, 80px);
                        margin-bottom: 127px;
                    }

                    &-item {
                        width: 80px;
                        height: 80px;
                    }

                    &-plus {
                        position: relative;
                        max-width: 80px;
                        max-height: 80px;
                        
                        &-input {
                            opacity: 0;
                            position: absolute;
                            overflow: hidden;
                            z-index: -1;
                        }

                        &-label {
                            color: #9AA2B7;
                            background: #F3F4F6;
                            border: 1px solid #EAECF0;
                            border-radius: 6px;
                            display: flex;
                            padding: 21px 30px;
                            cursor: pointer;
                            font-size: 31px;
                        }
                    }

                    &-wrapper {
                        position: relative;
                        max-width: 80px;
                        max-height: 80px;

                        &:hover {
                            .modal__content_form-foto-del {
                                display: block;
                            }
                        }
                    }

                    &-del {
                        display: none;
                        font-family: "Material icons";
                        font-size: 24px;
                        color: #fff;
                        background: rgba(0, 0, 0, 0.6);
                        border-radius: 4px;
                        position: absolute;
                        right: 8px;
                        top: 8px;
                        padding: 4px;
                        cursor: pointer;
                    }
                }
            }
        }
    }
</style>
