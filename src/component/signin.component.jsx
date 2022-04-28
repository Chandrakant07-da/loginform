import React, {useState} from 'react'
// import './signin.styles.css'

const SignIn = () => {

     const [name,setName]= useState("");
     const [email,setEmail]= useState("");
     const [password,setPassword]= useState("");
     const [allEntry, setAllEntry]= useState("");

     const submitForm=(event)=>{
          event.preventDefault();
          const newEntry= {name:name,email:email,password:password}

          setAllEntry([...allEntry, newEntry]);

          console.log(allEntry);
     }

     return (

          <>
               
               <h2> Welcom to my form </h2>
               <h2> In this form we will use Regular expresions for Validations </h2>

               <form action="" onSubmit={submitForm}>
                    <div>
                         <label htmlFor="name">Name</label>
                         <input 
                              type="text" 
                              name="name"
                              id="name"
                              value={name}
                              onChange={(event)=> setName(event.target.value)}
                              />
                    </div>

                    <div>
                         <label htmlFor="email">Email</label>
                         <input 
                              type="text" 
                              name="email"
                              id="email"
                              value={email}
                              onChange={(event)=> setEmail(event.target.value)}

                              />
                    </div>

                    <div>
                         <label htmlFor="password">Password</label>
                         <input 
                              type="password" 
                              name="password"
                              id="password"
                              value={password}
                              onChange={(event)=> setPassword(event.target.value)}

                              />
                    </div>

                    <button type='submit'>Log In</button>
               </form>

           
          </>
     )

}

export default SignIn;