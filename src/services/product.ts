/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Product } from '../types/Product'
import axios from './axios-configure'

export const getAll = async () => {
    let list:Product[] = []

    await axios.get('api/catalog_system/pub/products/search?fq={seller_name}').then(res => {
        let data = res.data
        
        for(let i in data) {
            list.push({
                id: data[i].productId,
                name: data[i].productName,
                description: data[i].description,
                image: data[i].items[0].images[0].imageUrl,
                categories: data[i].categories,
                sellers: data[i].items[0].sellers[0].commertialOffer.Price,
                productClusters: data[i].productClusters
            })
        }
    }).catch(err => console.log('Error', err))

    return list
}

export const getById = async (id: string) => {
    let product:Product[] = await getAll()

    const found = product.find(el => el.id === id)

    return found
}

export const search = async (text: string) => {
    let list:Product[] = await getAll()

    let listResult = list.filter(function(value) {
        return value.name.toLowerCase().indexOf(text.toLowerCase()) > -1
    })

    return listResult
}

export const getCaterogy = async (category: string) => {
    let list:any[] = await getAll()
    

    let listResult:Product[] = []

    for(let i in list) {
        let categoryUp = category.replace('+', ' ')
        if (list[i].categories.includes(`/${categoryUp}/`) === true) {
            listResult.push({
                id: list[i].id,
                name: list[i].name,
                description: list[i].description,
                image: list[i].image,
                categories: list[i].categories,
                sellers: list[i].sellers,
                productClusters: list[i].productClusters
            })
        }
    }

    return listResult
}

export const getProductClusters = async (productCluster: number) => {
    let list:Product[] = await getAll()

    let listResult:any[] = []

    list.forEach(e => {
        if (e.productClusters[productCluster]) {
            listResult.push(e)
        }
    })

    return listResult
}