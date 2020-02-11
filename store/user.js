// 用户管理
/* export const state = () => ({
    userInfo: {
        token: '',
        user: { }
    }
}) */
export const state = () => {
    return {
        userInfo: {
            token: '',
            user: { }
        }
    }
}

// 保存用户信息到state
export const mutations = {
    setUserInfo(state, data) {
        state.userInfo = data
    },

    clearUserInfo(state, data){
        state.userInfo = {}
       /*  localStorage.removeItem('store')
        console.log(localStorage) */
    }
};

export const actions = {
    // 登录
    login({commit}, data){
        return this.$axios({
            url: "/accounts/login",
            method: "POST",
            data
        }).then(res=>{
            const data = res.data;
            commit('setUserInfo', data)
            return data;
        })
    },

    // 注册
    register(store, data){
        return this.$axios({
            url: "/accounts/register",
            method: 'POST',
            data
        }).then(res=>{
            const data = res.data;
            store.commit('setUserInfo', data)
            return data;
        })
    },

    // 验证码
    sendCaptcha(store, data){
        return this.$axios({
            url: '/captchas',
            method: 'POST',
            data:{
                tel: data
            }
        })
    }
};