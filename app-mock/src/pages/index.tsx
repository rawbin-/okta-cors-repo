import styles from './index.less';
import { request } from '@@/plugin-request/request'
import { useEffect } from 'react';

const apiMock = () => {
  return request('/mockapi/a/mock/api')
}
export default function IndexPage() {
  useEffect(() => {
    const timer = setInterval(() =>{
      apiMock().catch((err) => {
        console.error('cause an error',err)
      })
    },3000)
    return () => {
      clearInterval(timer)
    }
  },[])
  return (
    <div>
      there is a mock api on this page ,see the devtools
    </div>
  );
}
