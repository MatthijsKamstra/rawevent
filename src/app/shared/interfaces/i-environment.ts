export interface Environment {
	production: boolean,
	apiEnabled: boolean,
	// displayVersion: string,
	// projectVersion: string,
	text: string,
	apiUrl: string,
	// feature: IFeature,
}

export interface IFeature {
	dashboard: boolean,
	map: boolean,
}
