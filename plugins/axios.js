import { Message } from 'element-ui'

/* export default function ({ $axios, redirect }) {
    $axios.onRequest(config => {
      console.log('Making request to ' + config.url)
    })
  
    $axios.onError(error => {
      const code = parseInt(error.response && error.response.status)
      if (code === 400) {
        redirect('/400')
      }
    })
  } */

export default (data) => {
  data.$axios.onError((err)=>{
    const { statusCode, message } = err.response.data
    // console.log(err.response);
    if(statusCode === 400){
      Message.error(message)
    }

     // 当前请求的token是有问题，401一般是因为token是错误或者过期，403是因为接口没有传token
     if(statusCode === 401 || statusCode === 403){
       console.log(data);
       
      // 跳转到登录页
      data.redirect(200, "/user/login", {
          returnUrl: data.route.fullPath
      })
  }
  })    
}