import React from 'react'

function User({username,age}) {
    // console.log(props);
  return (
    <div>User - data sharing <br/>
        USERNAME:{username}
        <br/>
        AGE:{age}
    </div>
  )
}

export default User