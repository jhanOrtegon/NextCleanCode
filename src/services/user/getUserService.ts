import { userAdapter } from '@/adapters/userAdapter';
import axiosHttp from '@/config/axios';
import { IGetUserServiceParams, IUser } from '@/models';
import { AppDispatch } from '@/redux';
import { startLoading } from '@/redux/slices';
import { SwalFireError } from '@/utils';

export  const getUserService = ( params:IGetUserServiceParams) => {
    return async function (dispatch: AppDispatch) {
        try {
            dispatch(startLoading());
            const data = await axiosHttp.get<IUser>('/character/',{params});
            return userAdapter(data.data);
        } catch (error) {
            console.log(error);
            SwalFireError({message:error as string});
        } 
    };
};