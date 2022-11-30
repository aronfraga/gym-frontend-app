import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';
import Style from './CardStaff.module.css';

const CardStaff = ({ name, rating, img, mail }) => {

	return (
		<div className={Style.mainwrapper}>
			<Card sx={{ maxWidth: 345 }}>
				<CardMedia component='img' alt={name} height='240' image={img} />
				<CardContent className={Style.contentwrapper}>
					<Typography
						gutterBottom
						variant='h5'
						component='div'
						sx={{ color: '#040430' }}
					>
						{name}
						<Typography gutterBottom variant='h6' component='div'>
							<Rating
								name='read-only'
								value={rating}
								precision={0.1}
								readOnly
							/>
						</Typography>
					</Typography>
					{/* <Typography
						variant='body2'
						color='text.secondary'
						sx={{ color: '#2d2d2d' }}
					>
						Lizards are a widespread group of squamate reptiles, with over 6,000
						species, ranging across all continents except Antarctica.
					</Typography> */}
					<Typography variant='body2' sx={{ color: '#42428c' }}>
						E-mail: {`${mail}`}
					</Typography>
				</CardContent>
			</Card>
		</div>
	);
};

export default CardStaff;
