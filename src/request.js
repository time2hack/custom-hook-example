export default (url, params) => fetch(url, params)
  .then(response => {
    if (response.status === 200) {
      try {
        return response.json()
      } catch (e) {
        return response.text()
      }
    }
    return response
  })