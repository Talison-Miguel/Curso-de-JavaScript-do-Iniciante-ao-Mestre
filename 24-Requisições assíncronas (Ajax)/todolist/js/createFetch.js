export function createFetch(method, url, data = null ) {
    function handleError(response) {
        console.log(response)

        if(!response.ok) {
            throw  Error(response.status + ": " + response.statusText)
        }
        return response.json()
    }
    
    return fetch(url, {
        method,
        body: data,
        headers: {
            "Content-Type": "application/json;charset=UTF-8"
        }
    })
        .then(response => handleError(response))
}