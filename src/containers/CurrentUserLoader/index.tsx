import React, { useEffect, useState } from "react"
import axios, { AxiosError } from "axios"
import { Loader, Error, NoData } from "../../components/common"

type Props = {
  children: React.ReactNode
  userId: number | null
}

const CurrentUserLoader = ({ children, userId }: Props): JSX.Element => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<null | string>(null)
  const [data, setData] = useState<null | Record<string, any>>(null)

  useEffect(() => {
    if (!userId) {
      setData(null)
      setError(null)
      return
    }
    const fetchData = async () => {
      setLoading(true)
      setError(null)
      try {
        const { data } = await axios.get<{ user: Record<string, any> }>(
          `/api/users/${userId}`
        )
        setData(data.user)
        setLoading(false)
      } catch (error) {
        const { response } = error as AxiosError<any, any>
        const message = response?.data.error || "Failed ot fetch user"
        setError(message)
        setLoading(false)
      }
    }
    fetchData()
  }, [userId])

  if (loading) return <Loader />
  if (error) return <Error message={error} />
  if (!data) return <NoData />

  return (
    <>
      {React.Children.map(children, (currentChild) => {
        if (React.isValidElement(currentChild)) {
          return React.cloneElement(currentChild, {
            user: data,
          })
        }
        return currentChild
      })}
    </>
  )
}

export default CurrentUserLoader
