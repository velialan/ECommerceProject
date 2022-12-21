import {Product} from '../reducers/product.slice'

type ResponseKind = 'success' | 'failure'

type NetworkResponse<T> = {
  kind: ResponseKind
  body?: T
}

export const fetchProducts = async (): Promise<NetworkResponse<Product[]>> => {
  const response = await fetch(`https://dummyjson.com/products`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
  if (response.ok) {
    const json = await response.json() 
    return {
      kind: 'success',
      body: json.products,
    }
  } else {
    return {
      kind: 'failure',
    }
  }
}
