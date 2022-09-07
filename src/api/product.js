// 提供商品相关的API函数
import request from '@/utils/request'

// 获取商品详情
export const findGoods = (id) => {
  return request('/goods', 'get', { id })
}

// 获取相关推荐商品|猜你喜欢商品
export const findRelevantGoods = ({ id, limit = 16 }) => {
  return request('/goods/relevant', 'get', { id, limit })
}

// 获取热销榜数据
export const findGoodsHot = ({ id, limit = 3, type = 1 }) => {
  return request('/goods/hot', 'get', { id, limit, type })
}
