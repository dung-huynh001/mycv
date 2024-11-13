import './GlobalStyles.scss';
import { ReactNode } from 'react';


function GlobalStyles({ children }: { children: ReactNode }): JSX.Element {
    return <>{children}</>;
}

export default GlobalStyles;