const Service = {};

Service.request = (url) => {
    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
    })
    .then(response => response.json())
}

export default Service