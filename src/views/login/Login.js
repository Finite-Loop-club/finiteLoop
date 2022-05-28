import pattern_Bg from '../../assets/img/register_bg_2.png'
import Form from './Form'


function Login() {
    return (
        <>
            <div style={{
                backgroundImage:
                    `url(${pattern_Bg})`,
                backgroundSize:'cover'
            }} className="h-screen bg-slate-800 flex bg-no-repeat  ">

            <Form/>

            </div>
        </>
    )
}

export default Login