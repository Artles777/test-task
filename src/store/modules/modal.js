export default {
    state: {
        open : false,
        size: document.documentElement.clientWidth,
        next: true,
        ratingField: [],
        fotos: [],
        message: '',
        rating: {
            speed: {key: "speed", title: "Скорость ", rating: 3},
            speedVideo: {},
            quality: {},
            punctuality: {}
        },
        stars: new Array(4)
            .fill('')
            .map((_, i) => {
                return new Array(5)
                .fill(i)
                .map((_, i) => {
                    return {
                        id: ++i,
                        checked: false
                    }
                }).reverse()
            })
    },

    actions: {
        loadFotos ({ commit }) {
            commit('updateFotos', {
                foto: [
                    { id: 1, src: require('@/assets/img2.jpg') },
                    { id: 2, src: require('@/assets/img3.jpg') },
                    { id: 3, src: require('@/assets/img4.jpg') },
                    { id: 4, src: require('@/assets/img5.jpg') }
                ]
            })
        },
        loadFieldRating ({ commit, getters }) {
            commit('updateFieldRating', {
                fields: [
                    { id: 1, key: 'speed', title: 'Скорость ', stars: getters.getStars[0] },
                    { id: 2, key: 'speedVideo', title: 'Скорость отдачи видео', stars: getters.getStars[1] },
                    { id: 3, key: 'quality', title: getters.getSize > 380 ? 'Качество' : 'Исполнитель солнышка?', stars: getters.getStars[2] },
                    { id: 4, key: 'punctuality', title: getters.getSize > 380 ? 'Пунктуальность' : 'Исполнитель солнышка?', stars: getters.getStars[3] }
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
        },
        deleteFoto (state, id) {
            state.fotos = state.fotos.filter(foto => foto.id !== id)
        },
        changeMessage (state, message) {
            state.message = message
        },
        updateRating (state, data) {
            if (Object.keys(state.rating === data.key)) {
                state.rating[data.key] = data
            }
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
        fotosCount (state) {
            return state.fotos.length
        },
        getSize (state) {
            return state.size
        },
        getOpen (state) {
            return state.open
        },
        getMessage (state) {
            return state.message
        },
        messageCount (state) {
            return state.message.length
        },
        getStars (state) {
            return state.stars
        },
        getDataRating (state) {
            return state.rating
        },
        ratingSpeedCount(state) {
            return Object.keys(state.rating.speed).length
        },
        ratingSpeedVideoCount(state) {
            return Object.keys(state.rating.speedVideo).length
        },
        ratingQualityCount(state) {
            return Object.keys(state.rating.quality).length
        },
        ratingPunctualityCount(state) {
            return Object.keys(state.rating.punctuality).length
        }
    }
}