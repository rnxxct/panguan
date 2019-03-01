/**
 * Created by kc on 2018/12/22.
 */
import  request from  '@/utils/request'
import QS from 'qs'

export function getList(query) {
  return request({
    url:'multiTest/list',
    method:'post',
    data:QS.stringify(query)
  })
}
export function getTestList(query) {
  return request({
    url:'/multiTest/test/list',
    method:'post',
    data:QS.stringify(query)
  })
}
export function addExamGroup(query) {
  return request({
    url:'/multiTest/add',
    method:'post',
    data:QS.stringify(query)
  })
}
export function updateExamGroup(query) {
  return request({
    url:'/multiTest/update',
    method:'post',
    data:QS.stringify(query)
  })
}
export function getGradeList(query) {
  return request({
    url:'/multiTest/check',
    method:'post',
    data:QS.stringify(query)
  })
}
export function getGradeAnalysisList(query) {
  return request({
    url:'/multiTest/classesComparison',
    method:'post',
    data:QS.stringify(query)
  })
}
export function getQuotaList(query) {
  return request({
    url:'/multiTest/quotaHitAndContributionRate',
    method:'post',
    data:QS.stringify(query)
  })
}
