import pattern_Bg from '../../assets/img/register_bg_2.png'
import AuthNavbar from '../../Components/navbars/AuthNavbar'
import Form from './Form'
import Register from './Register'
import ResetPassword from './ResetPassword'
import { Routes, Route } from "react-router-dom";



function Login() {
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
                    <Form/>
                    {/* <Routes>
                        <Route exact path="/login/signin" element={<Form />}></Route>
                        <Route exact path="/auth/resetPassword" element={<ResetPassword />}></Route>
                        <Route exact path="/auth/register" element={<Register />}></Route>
                    </Routes> */}
                   

                </div>
            </div>
        </>
    )
}

export default Login