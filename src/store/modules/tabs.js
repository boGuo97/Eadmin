import { frameInRoutes } from '@/router/router.js'
import cookies from '@/libs/cookies.js'
import router from '@/router'

// 默认选择路由表中第一项
let openPageFister = {
  name: frameInRoutes[0].name,
  path: frameInRoutes[0].path,
  title: frameInRoutes[0].meta.title
}

export default {
  namespaced: true,
  state: {
    // 标签页数据
    openPage: [openPageFister],
    // 当前页面
    current: openPageFister.name
  },
  actions: {
   /**
    * @description 添加一个标签页
    * @param {String} currentName 
    */
    add({ state, commit, dispatch }, currentName) {
      return new Promise(async resolve => {
        // 获取当前路由数据
        let newPage = {}
        frameInRoutes.forEach(value => {
          if(value.name === currentName) {
            newPage.name = value.name;
            newPage.path = value.path;
            newPage.title = value.meta.title;
          }
        })
        state.openPage.push(newPage)
        // 持久化
        await cookies.set('tabs-open-page', JSON.stringify(state.openPage))
        resolve()
      })
    },
    /**
     * @description 关闭标签页
     * @param {String} currentName
     */
    close({ state, commit, dispatch }, currentName) {
      return new Promise(async resolve => {
        const isCurrent = state.current === currentName
        // 如果关闭的是当前页面
        if(isCurrent) {
          let newCurrent = state.openPage[0]
          let len = state.openPage.length
          for(let i = 0; i < len; i++) {
            if(state.openPage[i].name === currentName) {
              if(i == len - 1) {
                newCurrent = state.openPage[i - 1]
              } else {
                newCurrent = state.openPage[i + 1]
              }
              break
            }
          }
          if(len === 1) {
            router.push({
              name: openPageFister.name
            })
            commit('currentActive', openPageFister.name)
          } else {
            router.push({
              name: newCurrent.name
            })
            commit('currentActive', newCurrent.name)
          }
        }
        let currentIndex = 0
        state.openPage.forEach((value, index) => {
          if(value.name === currentName) {
            currentIndex = index
          }
        })
        // 删除选中项
        state.openPage.splice(currentIndex, 1)
        // 当tbas为空时，调用empty
        if(state.openPage.length === 0) {
          commit('empty')
          router.push({
            name: openPageFister.name
          })
        }
        // 持久化
        await cookies.set('tabs-open-page', JSON.stringify(state.openPage))
        // end
        resolve()
      })
    },
    /**
     * @description 打开一个新的标签页
     * @param {Object} param0 
     * @param {String} currentName 
     */
    open({ state, commit, dispatch }, currentName) {
      console.log(currentName)
      return new Promise(async resolve => {
        // 已经打开的标签页
        let openPage = state.openPage
        let openPageIndex = 0
        const openPageEd = openPage.find((item, index) => {
          const same = item.name === currentName
          openPageIndex = same ? index : openPageIndex
          return same
        })
        if(!openPageEd) {
          await dispatch('add', currentName)
        }
        commit('currentActive', currentName)
        // end
        resolve()
      })
    }
  },
  mutations: {
    /**
     * @description 当标签页为空时，选中路由表第一项
     * @param { Array } state 
     */
    empty(state) {
      state.openPage.push(openPageFister)
    },
    /**
     * @description 当前选中页面
     * @param {Object} state 
     * @param {String} fullPath 
     */
    currentActive(state, fullPath) {
      state.current = fullPath
      cookies.set('tabs-open-current', fullPath)
    },
    /**
     * @description 初始化标签页数据
     * @param {Array} router 
     */
    init(state, data) {
      if(data.length > 0) {
        state.openPage = data[0].list
        state.current = data[0].name
        router.push({
          name: data[0].name
        })
      }
    }
  }
}