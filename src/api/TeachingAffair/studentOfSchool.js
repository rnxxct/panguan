/**
 * Created by kc on 2018/10/25
 */
import  request from  '@/utils/request'
import QS from 'qs'
export function getList(query) {
  return request({
    url:'/studentOfSchool/list',
    method:'post',
    data:QS.stringify(query)
  })
}

export function getMultiClasses(query) {
  return request({
    url:'multi/studentOfSchool/list',
    method:'post',
    data:QS.stringify(query)
  })
}

export function addTeacher(query) {
  return request({
    url:'/teacher/add',
    method:'post',
    data:QS.stringify(query)
  })
}
export function deleteTeacher(query) {
  return request({
    url:'/user/delete',
    method:'post',
    data:QS.stringify(query)
  })
}
export function updateTeacher(query) {
  return request({
    url:'/teacher/update',
    method:'post',
    data:QS.stringify(query)
  })
}
