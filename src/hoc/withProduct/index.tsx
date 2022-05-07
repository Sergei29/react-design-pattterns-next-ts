import React, { useState, useEffect } from "react"
import axios, { AxiosError } from "axios"

type Args = {
  url: string
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  setData: React.Dispatch<React.SetStateAction<Record<string, any> | null>>
  setError: React.Dispatch<React.SetStateAction<string | null>>
}

const fetchData = async ({ url, setData, setError, setLoading }: Args) => {
  setLoading(true)
  setError(null)
  try {
    const { data } = await axios.get<Record<string, any>>(url)
    setData(data)
    setLoading(false)
  } catch (error) {
    const { response } = error as AxiosError<any, any>
    const message =
      response?.data.error || (error as Error).message || "Failed ot fetch data"
    setError(message)
    setLoading(false)
  }
}

type NewProps<M> = Omit<M, "loading" | "error" | "data">

const withProduct = <T extends { productId: number }>(
  WrappedComponent: React.FunctionComponent<T>
): React.FunctionComponent<NewProps<T>> => {
  const NewComponent = (props: NewProps<T>) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<null | string>(null)
    const [data, setData] = useState<null | Record<string, any>>(null)

    useEffect(() => {
      fetchData({
        url: `/api/products/${props.productId}`,
        setData,
        setError,
        setLoading,
      })
    }, [props.productId])

    const newProps = { ...props, loading, data, error } as any
    return <WrappedComponent {...(newProps as T)} />
  }

  return NewComponent
}

export default withProduct
