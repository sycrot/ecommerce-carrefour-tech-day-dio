export const handlePrice = (price: number) => {
    let newPrice = price.toFixed(2).toString()
    let result = newPrice.replace('.', ',')

    return `${result}`
}