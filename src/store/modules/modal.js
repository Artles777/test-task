export default {
    state: {
        open : false,
        size: document.documentElement.clientWidth,
        next: true,
        ratingField: [],
        fotos: []
    },

    actions: {
        loadFotos ({ commit }) {
            commit('updateFotos', {
                foto: [
                    { id: 1, src: 'img2.jpg' },
                    { id: 2, src: 'img3.jpg' },
                    { id: 3, src: 'img4.jpg' },
                    { id: 4, src: 'img5.jpg' }
                ]
            })
        },
        loadFieldRating ({ commit, getters }) {
            commit('updateFieldRating', {
                fields: [
                    { id: 1, title: 'Скорость ' },
                    { id: 2, title: 'Скорость отдачи видео' },
                    { id: 3, title: getters.getSize > 380 ? 'Качество' : 'Исполнитель солнышка?' },
                    { id: 4, title: getters.getSize > 380 ? 'Пунктуальность' : 'Исполнитель солнышка?' }
                ]
            })
        }
    },

    mutations: {
        pushField (state, field) {
            state.ratingField.push(field)
        },
        updateFieldRating (state, { fields }) {
            state.ratingField = fields
        },
        updateFotos (state, { foto }) {
            state.fotos = foto
        },
        pushFoto (state, foto) {
            state.fotos.push(foto)
        },
        updateNext (state) {
            state.size <= 380 ? state.next = false : state.next = true
        },
        changeNext (state) {
            state.next = !state.next
        },
        changeOpen (state) {
            state.open = !state.open
        }
    },

    getters: {
        getRating (state) {
            return state.ratingField
        },
        getNext (state) {
            return state.next
        },
        getFotos (state) {
            return state.fotos
        },
        getSize (state) {
            return state.size
        },
        getOpen (state) {
            return state.open
        }
    }
}