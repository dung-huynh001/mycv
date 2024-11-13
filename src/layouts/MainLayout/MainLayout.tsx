import { ReactNode } from "react";
import { Header, Sidebar, Footer } from "../common";


function MainLayout({ children }: { children: ReactNode }): JSX.Element {
    return (
        <div>
            <Header />
            <div className="main-content">
                <Sidebar />
                <div className="content">{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default MainLayout;
