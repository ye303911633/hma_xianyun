export const state = () => {
  return {
    // 历史查询
    historyList:[],
    // 订单的详细信息
    orderDetail: {
      // 为了避免模板报错
      seat_infos: {}
    },
    // 总价格
    allPrice: 0,
    userFormList:{}
  }
}


export const mutations = {
  // 把传入的表单数据存储在history
  setHistory(state, data){
    state.historyList.unshift(data)
    console.log(data);
    console.log(state.historyList);

    if(state.historyList.length > 5){
      state.historyList.length = 5;
    }
  },
  // 修改orderDetail的数据
  setOrderDetail(state, data){
    state.orderDetail = data;
  },
  // 保存总价格
  setAllPrice(state, data){
    state.allPrice = data;
  },
  // 把用户写的数据保存起来
  setUserFormList(state, data){
    state.userFormList = data
  }
}