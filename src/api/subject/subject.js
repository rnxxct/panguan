/**
 * Created by kc on 2018/10/22.
 */
import  request from  '@/utils/request'
import QS from 'qs'

export  function getList() {
  return request({
    url:'/subject/list',
    method:'get',
    data: QS.stringify()
  })
}

export  function getUserSubject() {
    return request({
        url:'/subject/user',
        method:'get',
        data: QS.stringify()
    })
}

export function addSubject(query) {
  return request({
    url:'/subject/add',
    method:'post',
    data: QS.stringify(query)
  })
}
export function deleteSubject(query) {
  return request({
    url:'/subject/delete',
    method:'post',
    data: QS.stringify(query)
  })
}
export function updateSubject(query) {
  return request({
    url:'/subject/update',
    method:'post',
    data: QS.stringify(query)
  })
}
