<template>
    <div class="modal__content">
        <Description v-if="!getNext || getSize > 380" />
        <Info />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Description from '@/components/ModalContent/Description.vue'
import Info from '@/components/ModalContent/Info.vue'

export default {
    name: 'ModelContent',
    components: {
        Description,
        Info
    },
    computed: mapGetters(['getNext', 'getSize'])
}
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';

    .modal {
        &__content {
            margin: 22px 32px 13px 32px;

            @media (min-width: 320px) and (max-width: 380px) {
                margin-top: 14px;
                margin-left: 16px;
                margin-right: 16px;
            }
        }
    }
</style>
