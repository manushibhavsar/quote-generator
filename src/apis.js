export const fetchQuotes = async () =>{

    await fetch("https://type.fit/api/quotes", {
        method: "GET" // default, so we can ignore
    }).then(resp => {
      console.log(resp)
      return resp.json()
      // console.log(resp.json())
    })
  
}