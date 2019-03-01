/**
 * Created by kc on 2018/10/30.
 */
import  request from  '@/utils/request'
import QS from 'qs'
export function getList(query) {
  return request({
    url: '/test/check',
    method: 'post',
    data: QS.stringify(query)
  });
}
export function getImgUrls(query) {
  return request({
    url: '/test/check/url',
    method: 'post',
    data: QS.stringify(query)
  });
}
export function getAllStudent(query) {
  return request({
    url:'/test/check',
    method:'post',
    data:QS.stringify(query)
  })
}
export function getListMore(query) {
  return request({
    url:'test/check/detail',
    method:'post',
    data:QS.stringify(query)
  })
}
export function updateSingleQuestion(query) {
  return request({
    url:'test/check/detail/update',
    method:'post',
    data:QS.stringify(query)
  })
}
export function updateIsDone(query) {
  return request({
    url:'test/check/detail/update/isDone',
    method:'post',
    data:QS.stringify(query)
  })
}
