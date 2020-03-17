// 获取项目公共配置文件
import pageSetting from '@/config/setting.js'
import cookies from '@/libs/cookies.js'

export default {
  namespaced: true,
  state: {
    // 主题列表
    themeList: pageSetting.theme.list,
    // 当前选中主题
    activeName: pageSetting.theme.list[0].name
  },
  getters: {
    activeChange(state) {
      return state.themeList.find(theme => theme.name === state.activeName)
    }
  },
  actions: {
    /**
     * @description 激活一个主题
     * @param {String} themeValue 需要激活的主题名称
     */
    set ({ state, commit, dispatch }, themeName) {
      return new Promise(async resolve => {
        state.activeName = state.themeList.find(e => e.name === themeName) ? themeName : state.themeList[0].name
        commit('dom')

        // 持久化
        await cookies.set('theme-active', state.activeName)
        // end
        resolve()
      })
    }
  },
  mutations: {
    /**
     * @description 将 vuex 中的主题应用到 dom
     * @param {Object} state state
     */
    dom (state) {
      document.body.className = `gb-${state.activeName}`
    },
    /**
     * @description 初始化主题
     * @param {Object} state 
     */
    init(state) {
      let themeActive = cookies.get('theme-active')
      if(themeActive) {
        document.body.className = `gb-${themeActive}`
      } else {
        document.body.className = `gb-${state.activeName}`
      }
    }
  }
}