import { useEffect, useState } from 'react';
//import useFetch from './constant';

interface infoData {
  name: string;
  age: string;
}

interface userData {
  firstName: string;
  lastName: number;
}

function useFetch(url: string, type: 'info'): [infoData]
function useFetch(url: string, type: 'user'): [userData]

function useFetch(url: string, type: 'info' | 'user') {

  const [data, setData] = useState<any>();

  useEffect(() => {
    if (type === 'info')
      setData({
        name: 'khang',
        age: '22'
      })
    else if (type === 'user')
      setData({
        firstName: 'Khangggg',
        lastName: 122
      })
  }, [url, type])

  return [data]
}

export default useFetch;