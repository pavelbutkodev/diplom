import Templates from "../layout/Templates";
import SpecificTemp from "../layout/SpecificTemp";
import Main from "../layout/Main";
import CreateTemp from "../layout/CreateTemp";

export const routes = [
	{
		path: '/templates/',
		component: Templates,
		exact: true,
	},
	{
		path: '/doc:id/',
		component: SpecificTemp,
		exact: true,
	},
	{
		path: '/main/',
		component: Main,
		exact: true,
	},
	{
		path: '/create/',
		component: CreateTemp,
		exact: true,
	}
];