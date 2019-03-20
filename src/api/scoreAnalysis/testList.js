/**
 * Created by kc on 2018/10/29.
 */
import request from '@/utils/request'
import QS from 'qs'

export function getList(query) {
    return request({
        url: '/test/list',
        method: 'post',
        data: QS.stringify(query)
    })
}

export function getDif(query) {
    return request({
        url: 'test/analysis/questions/diffAndDif',
        method: 'post',
        data: QS.stringify(query)
    })
}
