import { ReactNode } from "react";
import clsx from 'clsx';
import styles from './AuthLayout.module.scss';


function AuthLayout({ children }: { children: ReactNode }): JSX.Element {
    return (
        <div className={clsx(styles['wrapper'])}>
            <div className={clsx('container')}>
                {children}
            </div>
        </div>
    );
}

export default AuthLayout;
