export const state = () => {
  return {
    // 历史查询
    historyList:[]
  }
}


export const mutations = {
  // 把传入的表单数据存储在history
  setHistory(state, data){
    state.historyList.push(data)
  }
}