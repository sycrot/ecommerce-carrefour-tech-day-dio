import axios from './axios-configure'

export const getAll = async () => {
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
                sellers: data[i].items[0].sellers[0].commertialOffer
            })
        }
    }).catch(err => console.log('Error', err))

    return list
}