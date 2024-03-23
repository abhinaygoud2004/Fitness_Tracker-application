import * as React from 'react';
import { styled } from '@mui/material/styles';
import image1 from '../images/1.jpeg'
import image2 from '../images/2.jpeg'
import image3 from '../images/3.jpeg'
import image4 from '../images/4.jpeg'
import image5 from '../images/5.jpeg'
import image6 from '../images/6.jpeg'
import './landing.css'
import IconButton from '@mui/material/IconButton';
import Card1 from './Card1';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function Landing() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div className='main'>
            <Card1 title={"Know your Food"} subtitle={""} img={image1} />
            <Card1 title={"Fitness Training"} subtitle={""} img={image2} />
            <Card1 title={"Track your calories"} subtitle={""} img={image3} />
            <Card1 title={"Integrated Chat Bot"} subtitle={""} img={image4} />
            <Card1 title={"Monitor your progress on the Dashboard"} subtitle={""} img={image5} />
            <Card1 title={"Personalized Food Recommendations"} subtitle={""} img={image6} />

        </div>
    );
}