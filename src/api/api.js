import request from '@/plugin/axios'

let url = 'http://rap2.taobao.org:38080/app/mock/246880'

// 首页数据
export function tableData(params) {
  return request({
    url: url + '/table',
    method: 'get',
    params
  })
}