import React from 'react'
import { Outlet,Link } from 'react-router-dom'

function Profile() {
  return <>
  <div>
  <h1>Profile</h1>
  <h3>The subcomponents are</h3>
<ul>
<Link to="details"><li>Profile details</li></Link>
<Link to="resetpassword"> <li>Reset password</li></Link>
  </ul>
  </div>
  <Outlet/>
  </>
}

export default Profile