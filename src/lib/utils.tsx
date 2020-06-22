export const startLocalStorage = (item: string, defVal: string) => {
  const value = window.localStorage.getItem(item)
  if (value !== null) {
    return value;
  }
  window.localStorage.setItem(item, defVal)
  return defVal;
}

export const setLocalStorage = (item: string, val: string) => {
  window.localStorage.setItem(item, val)
}

export interface responseData<T> {
  message: string,
  data: T,
  isFetching: boolean,
}

export function createResponseData<T>(message: string, data: T, isFetching: boolean): responseData<T> {
  return {
    message,
    data,
    isFetching,
  }
}