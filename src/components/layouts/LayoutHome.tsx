import { NextPage } from 'next';
import { ReactNode } from 'react';

interface ILayoutHome {
    children: ReactNode
}

export const LayoutHome:NextPage<ILayoutHome> = ({ children }) => {
    return (
        <div>
            <h1>LayoutHome</h1>
            <hr />
            { children }
        </div>
    );
};