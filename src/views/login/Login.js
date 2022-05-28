import pattern_Bg from '../../assets/img/register_bg_2.png'
import AuthNavbar from '../../Components/navbars/AuthNavbar'
import Form from './Form'


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
                    <Form />

                </div>
            </div>
        </>
    )
}

export default Login