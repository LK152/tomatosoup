import { ThemeOptions } from '@mui/material';

const lightThemeOptions: ThemeOptions = {
	palette: {
		mode: 'light',
		primary: {
			main: 'rgb(200, 95, 95)',
		},
		secondary: {
			main: '#FFF',
		},
	},
	components: {
		MuiAppBar: {
			styleOverrides: {
				colorPrimary: {
					backgroundColor: 'rgb(159, 86, 70)',
				},
			},
		},
	},
};

export default lightThemeOptions;
