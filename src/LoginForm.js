// import React, {useState} from 'react';
//
// const LoginForm = () => {
//   const [userdata, setUserdata] = useState({})
//   const [message, setMessage] = useState("")
//
//   const changeInput = (e) => {
//     setUsername (e.target.value)
//   }
//   const login = (e) => {
//     e.preventDefault()
//     if (userdata.username === 'admin' && userdata.password === 'admin'){
//       setMessage('Добро пожаловать!')
//     } else {
//       setMessage('Ошибка авторизации')
//     }
//
//     setUserdata({...userdata, [e.target.name]: e.target.value})
//   }
//
//   return (
//     <div>
//         <form>
//           <label htmlFor="username">Username</label>
//           <input type="text" value={username} id={"username"} onChange={changeInput} name={"username"}/>
//
//           <label htmlFor="password">Password</label>
//           <input type="text" value={password} id={"password"} onChange={changeInput} name={"password"}/>
//
//           <button onClick={login}>Login</button>
//           <div>
//             {message}
//
//           </div>
//
//         </form>
//     </div>
//   );
// };
//
// export default LoginForm;