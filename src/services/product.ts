import axios from './axios-configure'

export const getAll = async () => {
    let list:any[] = []

    await axios.get('api/catalog_system/pub/products/search?fq={seller_name}').then(res => {
        let data = res.data

        console.log(data)
        
        for(let i in data) {
            list.push({
                id: data[i].productId,
                name: data[i].productName,
                description: data[i].description,
                image: data[i].items[0].images[0].imageUrl,
                categories: data[i].categories,
                sellers: data[i].items[0].sellers[0].commertialOffer.Price
            })
        }
    }).catch(err => console.log('Error', err))

    return list
}

export const getById = async (id: string) => {
    let product:any[] = []

    await axios.get('api/catalog_system/pub/products/search?fq={seller_name}').then(res => { 
        let data = res.data

        const found = data.find(el => el.productId === id)
        console.log(found)
        product.push(found)
    }).catch(err => console.log("Error", err))

    return product
}

export const search = async (text: string) => {
    let list:any[] = []

    await axios.get('api/catalog_system/pub/products/search?fq={seller_name}').then(res => {
        let data = res.data

        for(let i in data) {
            list.push({
                id: data[i].productId,
                name: data[i].productName,
                description: data[i].description,
                image: data[i].items[0].images[0].imageUrl,
                categories: data[i].categories,
                sellers: data[i].items[0].sellers[0].commertialOffer.Price
            })
        }
    }).catch(err => console.log('Error', err))

    let listResult = list.filter(function(value) {
        return value.name.toLowerCase().indexOf(text.toLowerCase()) > -1
    })

    return listResult
}

export const getCaterogy = async (category: string) => {
    let list:any[] = []

    await axios.get('api/catalog_system/pub/products/search?fq={seller_name}').then(res => {
        let data = res.data

        for(let i in data) {
            list.push({
                id: data[i].productId,
                name: data[i].productName,
                description: data[i].description,
                image: data[i].items[0].images[0].imageUrl,
                categories: data[i].categories,
                sellers: data[i].items[0].sellers[0].commertialOffer.Price
            })
        }
    }).catch(err => console.log('Error', err))

    let listResult = list.filter(function(value) {
        return value.categories.includes(category) > -1
    })

    return listResult
}