import React, { use, useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()

  // const [data ,setData]= useState([])
  // useEffect(()=>{
  //   fetch('https://api.github.com/users/hiteshchoudhary')
  //   .then(response=>response.json())
  //   .then(data=>{
  //     console.log(data)
  //     setData(data)
  //   })
  // },[])

  return (
    <>
      <div className='bg-gray-600 text-center text-3xl text-white p-6 '>Github followers: {data.followers}
      <img src={data.avatar_url} alt="Git picture" width={300} />
     </div>
    </>
  )
}

export default Github

export const githubInfoLoader = async()=>{
  const response = await fetch('https://api.github.com/users/hiteshchoudhary')
  return response.json()

}