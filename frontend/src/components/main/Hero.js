import logo from '../../assets/iconos/logo_mytinerary.svg'
import { Link } from 'react-router-dom'
import * as React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

const Hero = () => {
    return (
        <div>
            <div className="cajaHero">
                <div className="titulo">
                    <h1>MyTinerary</h1>
                    <img className="logoMyTinerary" src={logo} alt="MyTinerary Logo"></img>
                </div>
                <div>
                    <p className='callToAction'>Find your perfect trip, designed by insiders who know and love their cities!</p>
                </div>
                <div>
                    <p className='callToAction'>Choose your destination</p>
                </div>
                <Link to='/cities'>
                    <Stack direction="row" spacing={2}>
                        <Button variant="contained" endIcon={<SendIcon />}>
                            What are you waiting for?
                        </Button>
                    </Stack>
                </Link>
            </div>
        </div>
    )
}

export default Hero 