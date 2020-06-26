import * as Github from '../lib/githubApi';
import { useState, useEffect } from 'react';

export const LStorage  = {
  start: <T, >(item: string, defVal: T) => {
    const value = LStorage.get<T | null>(item);
    if (!value) {
      LStorage.save(item, defVal);
      return defVal;
    }
    return value;
  },

  save: <T, >(item: string, val: T) => {
    localStorage.setItem(item, JSON.stringify(val))
  },

  get: <T, >(item: string): T => {
    const i = localStorage.getItem(item)
    return JSON.parse(i);
  }
}

export interface Fetching<T> {
  request: (URL: string) => Promise<Github.Response<T>>,
  render: (data: T) => any, 
  message: string,
}

export const generateUseResponseData = <T, >(fetchingObj: Fetching<T>) => {

  // return (urlRequest: string | null): [any, (url: string) => void] => {
  return (urlRequest: string = '', after: (data: T) => void = null): [any, (url: string) => void] => {
    const [url, setUrl] = useState(urlRequest);
    const [display, setDisplay] = useState(null)

    let fetching = true;
    let data: Github.Response<T> = null;
    let message = fetchingObj.message;

    const set = (url: string) => setUrl(url);

    useEffect(() => {
      if (url !== '') {
        fetching = true;
        data = null;
        message = fetchingObj.message;
        setDisplay(determineDisplay());

        fetchingObj.request(url)
          .then(res => {
            if (after) {
              after(res.data);
            }
            console.log('got PAGE!')
            fetching = false;
            data = res;
            message = res.message;

            setDisplay(determineDisplay());
          })
      }
    }, [url])

    const determineDisplay = () => {
      console.log('displaying')
      if (!fetching) {
        if (data) {
          if (data.success) {
            return fetchingObj.render(data.data);
          }
          return data.message;
        }
      }
      return message;
    }

    return [display, set];
  }
}
