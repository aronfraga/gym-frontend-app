import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';
import { linkinimgurl } from '../Footer/Helpers';
import Button from '@mui/material/Button';
import Style from './CardStaff.module.css';
import Ratingbystars from '../Ratingbystars/Ratingbystars';

const CardStaff = ({ name, linkedin, rating, img, mail }) => {
	const [isShown, setIsShown] = useState(false);

	const handlerbutton = (event) => {
		setIsShown((current) => !current);
	};

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
							<a href={`${linkedin}`} target='_blank' rel='noreferrer'>
								<img src={linkinimgurl} alt='img' width='30px' height='30px' />
							</a>
							<Rating
								name='read-only'
								value={rating}
								precision={0.1}
								readOnly
							/>
						</Typography>
					</Typography>
					<Typography
						variant='body2'
						color='text.secondary'
						sx={{ color: '#2d2d2d' }}
					>
						Lizards are a widespread group of squamate reptiles, with over 6,000
						species, ranging across all continents except Antarctica.
					</Typography>
					<Typography variant='body2' sx={{ color: '#42428c' }}>
						Contact: {`${mail}`}
					</Typography>
				</CardContent>

				{/* <CardActions>
            <Button onClick={handlerbutton} size="small">Rate Staff</Button>
            {isShown && <Ratingbystars/>}
            </CardActions> */}
			</Card>
		</div>
	);
};

export default CardStaff;
