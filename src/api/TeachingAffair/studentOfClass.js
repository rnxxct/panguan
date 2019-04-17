/**
 * Created by kc on 2018/10/26
 */
import  request from  '@/utils/request'
import QS from 'qs'
export function getList(query) {
  return request({
    url:'/studentOfClass/list',
    method:'post',
    data:QS.stringify(query)
  })
}
export function addStudent(query) {
  return request({
    url:'/studentOfClass/add',
    method:'post',
    data:QS.stringify(query)
  })
}
export function deleteStudent(query) {
  return request({
    url:'/studentOfClass/delete',
    method:'post',
    data:QS.stringify(query)
  })
}
export function updateStudent(query) {
  return request({
    url:'/studentOfClass/update',
    method:'post',
    data:QS.stringify(query)
  })
}
export function changeStudentClass(query) {
    return request({
        url:'/studentclass/change',
        method:'post',
        data:QS.stringify(query)
    })
}
export function importStudents(query) {
  return request({
    url:"/studentOfClass/batchAdd",
    method:'post',
    data:query
  })
}
export function importTestNumber(query) {
  return request({
    url:'/studentOfClass/testNumber/batchAdd',
    method:'post',
    data:query
  })
}
