/* eslint-disable react-hooks/exhaustive-deps */
import {  getUserService } from '@/services';
import { HomeComponent } from './component';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useEffect } from 'react';
import { createUser } from '@/redux/slices';

const HomePage = () => {
    
    const dispatch = useAppDispatch();
    
    dispatch(createUser({account:33,age:25,cc:10545, name:'jhan'}));
    console.log(dispatch);
    
    useEffect(()=>{
        console.log('hola');
        dispatch(getUserService({id:93}));
    },[dispatch]);
    

    return (
        <HomeComponent />
    );
};

export default HomePage;