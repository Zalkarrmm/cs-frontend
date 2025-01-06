// fetch(url)
// .then(res => JSON.parse(res))
// .catch(e => throw(e))
// задача: написать retryFetch который будет переотправлять запрос в случае неудачи
// retryFetch(url, (retryCount, timeout)) - принимает в аргументы сам путь, затем вторым аргументом объект из (количество попыток, максимальное количество времени загрузки в секундах)

export const retryFetch = (url, {retryCount, timeOut}) => { // url: string, {retryCount: number, timeOut: number}
  let currentTry = 1

  const retry = () => {
    clearTimeout(timer)


    while(currentTry <= retryCount) {
      retryFetch(url, {retryCount, timeOut})
      currentTry += 1
    }

    throw e
  }

  setTimeout(() => {
    retry()
  }, retryCount)
  
  fetch(url)
    .then(res => JSON.parse(res))
    .catch(e => {
      if(retryCount > 0){
        retry()
      }

      throw e
    })
}