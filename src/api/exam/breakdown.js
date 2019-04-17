import  request from  '@/utils/request'
import QS from 'qs'

export  function getList(query) {
  return request({
    url:'/breakdown/list',
    method:'post',
    data: QS.stringify(query)
  })
}
export  function getQuestion(query) {
  return request({
    url:'/breakdown/questions',
    method:'post',
    data: QS.stringify(query)
  })
}
export  function getQuestionAndKnowledge(query) {
    return request({
        url:'/breakdown/questions/knowledge',
        method:'post',
        data: QS.stringify(query)
    })
}
export  function addBreakdown(query) {
    return request({
        url:'/breakdown/add',
        method:'post',
        data: query,
    })
}
export  function updateBreakdown(query) {
    return request({
        url:'/breakdown/update',
        method:'post',
        data: query,
    })
}
export  function deleteBreakdown(query) {
    return request({
        url:'/breakdown/delete',
        method:'post',
        data: QS.stringify(query),
    })
}
export  function getBreakdownName(query) {
    return request({
        url:'/breakdown/name',
        method:'post',
        data: QS.stringify(query),
    })
}
export  function getKnowledgeBreakdown(query) {
    return request({
        url:'/breakdown/knowledge',
        method:'post',
        data: QS.stringify(query),
    })
}
export function createExam(query) {
    return request({
        url:'/test/question/breakdown/create',
        method:'post',
        data:query
    })
}

