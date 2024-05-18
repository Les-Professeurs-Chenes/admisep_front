import './Auth.css'
import logo from '../../assets/logo.png'


export default function Login() {


  return (
    <>
        <div className="login">
            <div className="logo">
                <img src={logo} />
            </div>

            <div className="login-container">
                <h1 className="title">Login</h1>
                <p className="subtitle">Login with your Moodle ISEP Credentials (ex: exam12345) </p>
                <input type="text" className="input input-bordered" placeholder="Username" />
                <input type="password" className="input input-bordered" placeholder="Password" />
                <button className="btn btn-primary">Login</button>
            </div>
        </div>
    </>
  )
}
