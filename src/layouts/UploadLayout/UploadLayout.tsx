import { ReactNode } from 'react';
import { Header, Sidebar, Footer } from "../common";


function UploadLayout({ children }: { children: ReactNode }): JSX.Element {
    return (
        <div>
            <Header />
            <div className="">
                <Sidebar />
                <div className="content">{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default UploadLayout;
