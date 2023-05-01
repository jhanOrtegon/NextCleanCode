import { IUserApi,  IUser } from '@/models';

export const userAdapter = (user: IUserApi): IUser => {
    return{
        cc: user.cc,
        name: user.name,
        age: 26
    };
};  