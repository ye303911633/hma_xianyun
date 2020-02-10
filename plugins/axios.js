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
  })    
}