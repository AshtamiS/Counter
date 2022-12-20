import React from 'react'

function Employee() {
    const employee=[
        {username:"ashi",age:22},
        {username:"kunju",age:21},
        {username:"lechu",age:45},
        {username:"jooo",age:76}
    ]
  return (
    <div>
        {employee.map(item=>(
            <>
             <p>Username:{item.username}</p>
           <p> age:{item.age}</p>
            </>
           
        ))}
    </div>
  )
}

export default Employee