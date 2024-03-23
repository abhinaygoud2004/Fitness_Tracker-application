import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CallMissedOutgoingIcon from '@mui/icons-material/CallMissedOutgoing';
import IconButton from '@mui/material/IconButton';

function Card1({ title, subtitle, img }) {
    return (

        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                title={title}
                subheader={subtitle}
            />
            <CardMedia
                component="img"
                image={img}
                alt="Paella dish"
            />
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <CallMissedOutgoingIcon color='success' />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Card1