import React from 'react'
import { Header } from '../components/Header'
import { CustomButton } from '../components/Button'

const Profile = () => {
  return (
    <div>
       <Header  title="Un paysage dégeu" image="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFuZHNjYXBlfGVufDB8fDB8fHww"  />
        <CustomButton title="A very custom title" additionalCss='text-white bg-black text-center' />
   
    </div>
  )
}

export default Profile