import axios from 'axios'
// import { resolve, reject } from 'any-promise';

export default function ajax(url, data = {}, method="GET"){

  return new Promise((resolve, reject)=> {
    let promise

    if(method === 'GET'){
      promise = axios.get(url,{
        params: data
      })
    }else{
      promise = axios.post(url,data)
    }

    //返回的promise的结果，进行接收
    promise.then(

      response => {
        resolve(response.data)
      },

      error => {
        alert('请求出错:' + error.message)
      }
    )

  })

}