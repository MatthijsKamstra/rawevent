import { IUser } from "./i-user";


interface IFakeLogin {
	[key: string]: IUser;
}

interface ILoginDatabase {
	fakelogin: IFakeLogin;
}
