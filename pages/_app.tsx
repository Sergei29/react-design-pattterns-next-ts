import type { AppProps } from "next/app"
import React, { useRef } from "react"
import { Hydrate, QueryClient, QueryClientProvider } from "react-query"

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = useRef(new QueryClient())
  const AnyComponent = Component as any

  return (
    <QueryClientProvider client={queryClient.current}>
      <Hydrate state={pageProps.dehydratedState}>
        <AnyComponent {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp
