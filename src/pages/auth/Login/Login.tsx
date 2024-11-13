import clsx from 'clsx'
import styles from './Login.module.scss'

function Login() {
    return (
        <div className='row'>
            <div className='col-8 offset-2'>
                <div className='card p-3 mt-5'>
                    <div className='card-body'>
                        <div className="mb-3 row">
                            <label htmlFor="username" className="col-sm-2 col-form-label">Username</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="username" />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" id="inputPassword" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;