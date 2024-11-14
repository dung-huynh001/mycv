import { ReactNode } from "react";
import clsx from 'clsx';
import styles from './AuthLayout.module.scss';


function AuthLayout({ children }: { children: ReactNode }): JSX.Element {
    return (
        <div className={clsx(styles['wrapper'])}>
            <main className="container">
                <div className="d-flex justify-content-center align-items-center" style={{
                    minHeight: '100vh'
                }}>
                    {children}
                </div>
            </main>
        </div>
    );
}

export default AuthLayout;
