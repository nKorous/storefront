const ENDPOINT = 'http://localhost:5200'

function getProductList() {
    console.log('getting product list')
    fetch(ENDPOINT + '/productList')
        .then(res => res.json())
        .then(data => loadDataIntoTable(data))
}

function loadDataIntoTable(data) {
    let t = document.getElementById('tableBody')
    t.innerHTML = '' //clear out the old data so there is no DOM duplication

    data.map(row => {
        const { productKey, productName, productDescription, active } = row
        let tr = document.createElement('tr')

        tr.innerHTML = `
            <td>${productKey}</td>
            <td>${productName}</td>
            <td>${productDescription}</td>
            <td>${active}</td>
            `

        t.appendChild(tr)
    })
}

getProductList()