import { IUser } from "./i-user";


interface IFakeDatabase {
	[key: string]: IUser;
}

interface IDatabase {
	fakedatabase: IFakeDatabase;
}
