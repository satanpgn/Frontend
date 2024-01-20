import React, {useEffect} from 'react'
import Navbar from '../components/Navbar'
import { testApi } from '../apis/Api'

const Homepage = () => {

  useEffect(() => {
    testApi().then((res) => {
      console.log(res)
    })
  },[])

  return (
    <div>
    <div className="banner" style={{ background: "url('https://durbarmart.com/uploads/all/gRXmjmWvEZD0ggTzEFGKRNM3hNWruVD6O6j5A5o1.png) center/cover no-repeat", height: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>
    <h1>Welcome to homepage!</h1>
    {/* You can add more text or elements here */}
  </div>

  <h1>Easy Saving Easy Returns</h1>
    </div>
  );
};


export default Homepage
