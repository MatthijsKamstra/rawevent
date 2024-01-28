export interface IUser {
	username: string;
	roles: Roles;
	token: string;
	organisation: string;
	domains: Domains;
	substationManagement: boolean;
	allowedOrganisations?: string[]; // new so optional for now
}

export interface Domains {
	TARIFF_SWITCHING: boolean;
	COMMON: boolean;
	PUBLIC_LIGHTING: boolean;
}

export interface Roles {
	ROLE_ADMIN: boolean;
	ROLE_MANAGER: boolean;
	ROLE_READONLY: boolean;
	ROLE_APPLICATION_WEB_OPERATOR: boolean;
	ROLE_APPLICATION_WEB_INSTALLATION: boolean;
	ROLE_APPLICATION_WEB_NET_MANAGEMENT: boolean;
}
