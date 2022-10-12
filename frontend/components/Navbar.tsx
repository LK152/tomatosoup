import { AppBar, Box, Toolbar, Stack, Typography, styled } from '@mui/material';
import NextMuiLink from '@components/NextMuiLink';
import Image from 'next/image';
import TomatoSoup from '@public/TomatoSoup.png';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const Navbar = () => {
	return (
		<Box flexGrow={1}>
			<AppBar position='fixed'>
				<Toolbar component='nav'>
					<Stack direction='row' width='100vw'>
						<NextMuiLink href='/' sx={{ textDecoration: 'none' }}>
							<Box display='flex' alignItems='center'>
								<Box display='flex' width='50px' height='50px'>
									<Image
										src={TomatoSoup}
										alt='logo'
										quality={100}
										priority
									/>
								</Box>
								<Typography
									color='secondary'
									variant='h3'
									fontWeight='500'
								>
									TomatoSoup
								</Typography>
							</Box>
						</NextMuiLink>
					</Stack>
				</Toolbar>
			</AppBar>
			<Offset />
		</Box>
	);
};

export default Navbar;
