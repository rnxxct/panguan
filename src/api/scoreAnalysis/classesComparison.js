/**
 * Created by kc on 2018/10/30.
 */
import  request from  '@/utils/request'
import QS from 'qs'
export  function getData(query) {
  return request({
    url:'/test/analysis',
    method:'post',
    data: QS.stringify(query)
  })
}

export  function getVerticalData(query) {
    return request({
        url:'/test/vertical/analysis',
        method:'post',
        data: query
    })
}

export  function getStudentVertical(query) {
    return request({
        url:'/test/student/vertical',
        method:'post',
        data: query
    })
}

export  function getUserClass(query) {
    return request({
        url:'/test/userclass/get',
        method:'post',
        data: QS.stringify(query)
    })
}
