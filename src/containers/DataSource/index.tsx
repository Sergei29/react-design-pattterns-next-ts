import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { AxiosError } from "axios"

const Centered = styled.p`
  justify-content: center;
  font-weight: 600;
`

const Loader = () => <Centered>Loading...</Centered>
const Error = ({ message }: { message: string }) => (
  <Centered>{message}</Centered>
)
const NoData = () => <Centered>No data</Centered>

type Props<T> = {
  children: React.ReactNode
  getData: (...args: any[]) => Promise<T> | T
  resourceName: string
}

const DataSource = <M extends unknown>({
  children,
  getData,
  resourceName,
}: Props<M>): JSX.Element => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<null | string>(null)
  const [data, setData] = useState<null | M>(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setError(null)
      try {
        const received = await getData()
        setData(received)
        setLoading(false)
      } catch (error) {
        const { response } = error as AxiosError<any, any>
        const message =
          response?.data.error ||
          (error as Error).message ||
          `Failed ot fetch data`
        setError(message)
        setLoading(false)
      }
    }
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading) return <Loader />
  if (error) return <Error message={error} />
  if (!data) return <NoData />

  return (
    <>
      {React.Children.map(children, (currentChild) => {
        if (React.isValidElement(currentChild)) {
          return React.cloneElement(currentChild, {
            [resourceName]: data,
          })
        }
        return currentChild
      })}
    </>
  )
}

export default DataSource
