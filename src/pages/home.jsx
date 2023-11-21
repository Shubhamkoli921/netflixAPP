import React from 'react'
import Main from './main'

import Row from '../components/row'
import requestsApi from '../request'

const Home = () => {
  return (
    <div>
        <Main />
        <Row rowId="1" title="Upcoming" fetchURl={requestsApi.requestUpcoming}/>
        <Row rowId="2" title="Popular" fetchURl={requestsApi.requestPopular}/>
        <Row rowId="3" title="Top Rated" fetchURl={requestsApi.requestToprated}/>
        <Row rowId="4" title="Science Fiction" fetchURl={requestsApi.requestapifor}/>
    </div>
  )
}

export default Home