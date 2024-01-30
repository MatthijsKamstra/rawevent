import { Environment } from "src/app/shared/interfaces/i-environment";

export const environment: Environment = {
	production: false,
	apiEnabled: false,
	text: 'This is development environment',
	// Development Stapi Base URL
	apiUrl: "http://localhost:1337",
};
