export const UserEmptyState = {
    name: '',
    age: 0,
    cc: 0
};

export interface IUserAdapter {
    cc: number,
    name: string,
};

export interface IGetUserServiceParams {
    id: number
}

export interface IUserApi{
    age: number,
    cc: number
    name: string,
}

export interface IUser{
    age: number,
    cc: number
    name: string,
}

export interface ICreateUser extends IUser{
    account: number,
}






