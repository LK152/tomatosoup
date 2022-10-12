import * as React from 'react';
import type { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import {
	ThemeProvider,
	CssBaseline,
	createTheme,
	responsiveFontSizes,
} from '@mui/material';
import createEmotionCache from 'utility/createEmotionCache';
import lightThemeOptions from 'styles/theme/lightThemeOptions';
import Head from 'next/head';
import Navbar from '@components/Navbar';
import { Box } from '@mui/material';

interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();
const lightTheme = responsiveFontSizes(createTheme(lightThemeOptions));

const MyApp: React.FC<MyAppProps> = (props) => {
	const {
		Component,
		emotionCache = clientSideEmotionCache,
		pageProps,
	} = props;

	return (
		<Box
			sx={{
				minWidth: '100vw',
				minHeight: '100vh',
				backgroundColor: 'rgb(240, 150, 130)',
			}}
		>
			<CacheProvider value={emotionCache}>
				<Head>
					<title>Tomato Soup</title>
				</Head>
				<ThemeProvider theme={lightTheme}>
					<CssBaseline />
					<Navbar />
					<Component {...pageProps} />
				</ThemeProvider>
			</CacheProvider>
		</Box>
	);
};

export default MyApp;
