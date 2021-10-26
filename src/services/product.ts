import faker from 'faker'

class ProductService {
  products: { id: string, name: string, price: number, image: string}[]
  constructor() {
    this.products = []
    this.generate()
  }

  generate() {
    const limit = 100
    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl()
      })
    }
  }

  create() {}

  find() {
    return this.products
  }

  findOne(id: string) {
    return this.products.find(item => item.id === id)
  }

  update() {}

  delete() {}
}

export default ProductService;