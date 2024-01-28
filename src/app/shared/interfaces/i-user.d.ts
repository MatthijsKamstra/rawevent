export interface IUser {

	roles?: Roles;
	token?: string;



	firstName: string;
	company: string;
	lastName: string;
	id: string;
	_id: string;
	middleName: string;
	email: string;
	userName: string;

}

export interface Roles {
	ROLE_ADMIN: boolean;
	ROLE_MANAGER: boolean;

}
