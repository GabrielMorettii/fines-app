import { useCallback } from 'react'

interface IObject {
  [key: string]: any
}

export const useParse = () => {
  const parsePrice = useCallback((price: number) => {
    return new Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL',
    }).format(price)
  }, [])

  const parseQuery = useCallback((data: IObject) => {
    let query = '?'

    Object.keys(data).forEach((key) => !data[key] && delete data[key])

    Object.entries(data).forEach(([key, value]) => {
      query += `${key}=${value}&`
    })

    query = query.slice(0, -1)

    return query
  }, [])

  return { parsePrice, parseQuery }
}
