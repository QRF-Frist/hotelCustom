import axios from 'axios';
import { Message } from 'element-ui';

/*
   优化代码
     1 统一处理请求异常
 */

const config = {
  BASE_URL: 'http://127.0.0.1:3030'
}

export default function ajax(url,data={},method="GET"){
   return new Promise((resolve,reject) => {
      let promise;
      console.log(config.BASE_URL+url);
      if (method==='GET'){
        promise = axios.get(
          config.BASE_URL+url,
          {
            params: data
          }
        );
      } 
      else {
        promise = axios.post(
          config.BASE_URL+url,
          data
        );
      }

      promise.then((response) => {
        resolve(response.data)
      }).catch((error) => { // 统一处理请求异常
        console.log(error);
        Message({
          type: 'error',
          message: '服务器繁忙中，请稍后重试！！！'
        });
      });
 });
}



