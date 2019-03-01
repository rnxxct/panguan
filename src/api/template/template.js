/**
 * Created by kc on 2018/11/5.
 */
import  request from  '@/utils/request'
import QS from 'qs'
export function templateAdd(query) {
  return request({
    url:'/template/add',
    method:'post',
    data:QS.stringify(query)
  })
}
export function templateUpdate(query) {
  return request({
    url:'/template/update',
    method:'post',
    data:QS.stringify(query)
  })
}
export function getTemplateList(query) {
  return request({
    url:'/template/list',
    method:'post',
    data:QS.stringify(query)
  })
}
export function deleteTemplate(query) {
  return request({
    url:'/template/delete',
    method:'post',
    data:QS.stringify(query)
  })
}
export function getTemplateUrls(query) {
  return request({
    url:'/template/url/list',
    method:'post',
    data:QS.stringify(query)
  })
}
export function getTemplate(query) {
  return request({
    url:'/template/get',
    method:'post',
    data:QS.stringify(query)
  })
}
