import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {store} from '../app/store'
import { Provider } from 'react-redux'
import React from 'react'


// const DynamicComponentWithNoSSR = dynamic(() => import('../components/MovieDetail'), {
//   ssr: false
// })



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
    <React.StrictMode>
      
  <Provider store={store}>
    <Component {...pageProps} />
    {/* <Router> */}
    {/* <div className='container'> */}
      {/* <DynamicComponentWithNoSSR /> */}
      {/* <Route path="/" exact component={index} />
      <Route path="/movie/:imdbID" component={MovieDetail} />
      <Route component={PageNotFound} />  */}
    {/* </div> */}
    {/* </Router> */}
    </Provider>
     
    </React.StrictMode>
    </div>
  )
}



export default MyApp
