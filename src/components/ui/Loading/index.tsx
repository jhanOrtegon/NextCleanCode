import { NextPage } from 'next';
import { ILoading } from './types';

export const Loading:NextPage<ILoading> = ({isLoading}) =>(
    <>
        {isLoading && <h1>Cargando...</h1>}
    </>
);