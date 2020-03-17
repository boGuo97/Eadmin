import Cookies from 'js-cookie'

const cookies = {}

// 存储
cookies.set = function(name = 'none', value = '无效数据', cookieSetting = {}) {
  let currentCookieSetting = {
    // 默认存储时间为一天
    expires: 1
  }
  Object.assign(currentCookieSetting, cookieSetting)
  Cookies.set(`ev-${name}`, value, currentCookieSetting)
}

// 获取
cookies.get = function(name = 'none') {
  return Cookies.get(`ev-${name}`)
}

// 删除
cookies.remove = function (name = 'none') {
  return Cookies.remove(`ev-${name}`)
}

export default cookies