import React from 'react'
import { Outlet }from 'react-router-dom'
import { useState } from 'react';

function Profile() {
const [changeState, setChangeState] =  useState(true)

   if (changeState) {
    return (
      <>
       <Outlet />  
      </>
    )
   }

}
export default Profile
