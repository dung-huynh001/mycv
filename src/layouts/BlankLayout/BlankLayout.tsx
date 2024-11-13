import { ReactNode } from "react";


function BlankLayout({ children }: { children: ReactNode }): JSX.Element {
    return (
        <div>
            <div className="">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default BlankLayout;
