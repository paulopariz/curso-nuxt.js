export const state = () => ({
  paisesFavoritos: []
})

export const getters = {
  favoritos (state) {
    return state.paisesFavoritos
  },
  totalFavoritos (state) {
    return state.paisesFavoritos.length
  }
}

export const mutations = {
  addFavorito (state, payload) {
    state.paisesFavoritos.push({ ...payload })
  },
  deleteFvorito (state, payload) {
    state.paisesFavoritos = state.paisesFavoritos.filter(x => x.id !== payload)
  }
}

export const actions = {
  addFavorito ({ commit }, payload) {
    commit('addFavorito', payload)
  },
  deletarFavorito ({ commit }, payload) {
    commit('deleteFvorito', payload)
  }
}
