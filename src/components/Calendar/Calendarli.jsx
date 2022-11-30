import React from "react";
import style from '../Calendar/Calendarli.module.css'
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';


export default function Calendarli({ name, hour, day, imgUrl, staff }) {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <>


            <li
                style={{
                    gridColumn: `${day}`,
                    gridRow: `${hour}`,
                    backgroundColor: 'var(--primary-color)',
                    color: 'var(--white-color)',
                    fontSize: '14px',
                    fontWeight: '500',
                    position: 'static',
                    alignItems: 'center',
                    justifyContent: 'center',
                    // border: '1px solid black',
                    // borderRadius: '5px',
                }}
            >

                <Typography
                    sx={{ cursor: 'pointer', }}
                    aria-owns={open ? 'mouse-over-popover' : undefined}
                    aria-haspopup="true"
                    onMouseEnter={handlePopoverOpen}
                    onMouseLeave={handlePopoverClose}
                >
                    {name}
                </Typography>

                <Popover
                    id="mouse-over-popover"
                    sx={{

                        pointerEvents: 'none',
                    }}
                    open={open}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    onClose={handlePopoverClose}
                    disableRestoreFocus
                >
                    <Typography component={'div'} sx={{ backgroundColor: 'var(--secondary-color)' }} >
                        <Typography sx={{ p: 1, fontWeight: 500, color: 'white' }} >Clase: {name}</Typography>
                        <Typography sx={{ p: 1, fontWeight: 500, color: 'white' }}>Instructor: {staff}</Typography>
                        <Typography sx={{ p: 1, fontWeight: 500, color: 'white' }}>Horario: {hour}</Typography>
                    </Typography>
                </Popover>

                <img className={style.imagen} src={imgUrl} alt="fotico" />
            </li>



        </>
    )



}