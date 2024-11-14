import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

// import clsx from 'clsx'
// import styles from './Login.module.scss'
import { useAuth } from '~/contexts/AuthContext/AuthContext';
import { Credentials } from '~/core/models';
import { login } from '~/core/services/authService'


function Login() {
    const { authenticate } = useAuth();

    const [credentials, setCredentials] = useState<Credentials>({
        username: '',
        password: ''
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (credentials.username === '' || credentials.password === '') {
            toast.success('🦄 Wow so easy!');
            return;
        }

        const fetchApi = async () => {
            try {
                const response = await login(credentials);
                console.log(response);
            } catch (error) {
                toast.error('Lỗi hệ thống! Không thể kết nối tới máy chủ.');
                console.error('Error:', error);
            }
        };

        fetchApi();
    }


    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className=" col-sm-8 col-md-6">
                    <div className="card bg-white">
                        <div className="card-body p-5">
                            <div className="d-flex flex-column justify-content-center align-items-center gap-2 mb-4">
                                <h2 className="fw-bold text-primary">SIGN IN</h2>
                                <h1 className="fw-bold text-muted">ログイン</h1>
                                <p className="text-muted">ご登録のメールアドレスとパスワードをご入力ください。</p>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="col-form-label fw-bold fs-5">メールアドレス <span
                                        className="text-danger">*</span></label>
                                    <div className="">
                                        <input id="email" placeholder="sagami@sample.com"
                                            className="form-control" name="email" autoComplete='off'
                                            value={credentials.username}
                                            onChange={(e) => { setCredentials({ ...credentials, username: e.target.value }) }} />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="col-form-label fw-bold fs-5">パスワード（8文字以上）<span
                                        className="text-danger">*</span></label>
                                    <div className="">
                                        <div className="position-relative">
                                            <input id="password" type="password" placeholder="パスワードを入力してください"
                                                className="form-control" name="password" autoComplete='off'
                                                value={credentials.password}
                                                onChange={(e) => { setCredentials({ ...credentials, password: e.target.value }) }} />
                                            <span className="position-absolute top-50 translate-middle" style={{
                                                'right': 0,
                                                'zIndex': 9,
                                                'cursor': 'pointer',
                                            }}>
                                                <i className="fa-regular fa-eye-slash" id="toggle_password"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" name="remember" id="remember" />
                                        <label className="form-check-label" htmlFor="remember">
                                            Remember Me
                                        </label>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <button className="btn btn-primary rounded-3 w-100 text-white fs-5" type='submit'>
                                        ログイン
                                    </button>
                                </div>
                            </form>
                            <div className="mb-0">
                                <div className="d-flex justify-content-between">
                                    <Link className="btn btn-link" to="{{ route('password.request') }}">
                                        パスワードをお忘れですか？
                                    </Link>
                                    <Link className="btn btn-link text-decoration-none" to="{{ route('password.request') }}">
                                        登録する
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;