import { useState } from 'react'
import pattern_Bg from '../../assets/img/register_bg_2.png'
import AuthNavbar from '../../Components/navbars/AuthNavbar'
import Form from './Form'
import Register from './Register'
import ResetPassword from './ResetPassword'
import { Routes, Route, BrowserRouter } from "react-router-dom";



function Login() {
    const pathname = window.location.pathname

    // cosnt [pathname, setPathname] =useState(window.location.pathname)

    return (
        <>
            <div style={{

                backgroundImage:
                    `url(${pattern_Bg})`,
                backgroundSize: 'cover'
            }}
                className='bg-slate-800'
            >
                <AuthNavbar />
                <div className="h-screen bg-none flex bg-no-repeat  ">
                    {pathname==='/auth/signup' ? <Register /> : (pathname==='/auth/resetpassword' ? <ResetPassword /> :( pathname==='/auth/signin' ?  <Form />: <Form />) ) }
                    
                    {/* {console.log(pathname)} */}

                    {/* <BrowserRouter>
                        <Routes>
                            <Route path="/login/signin" element={<Form />}></Route>
                            <Route path="/auth/resetPassword" element={<ResetPassword />}></Route>
                            <Route path="/auth/register" element={<Register />}></Route>
                        </Routes>
                    </BrowserRouter> */}


                </div>
            </div>
        </>
    )
}

export default Login