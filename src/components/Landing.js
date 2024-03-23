import React, { useState } from 'react';
import Card1 from './Card1';
import './landing.css'

import image1 from '../images/1.jpeg';
import image2 from '../images/2.jpeg';
import image3 from '../images/3.jpeg';
import image4 from '../images/4.jpeg';
import image5 from '../images/5.jpeg';
import image6 from '../images/6.jpeg';
import { Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export default function Landing() {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div className='bg-white'>
            <div className='p-10 container-fluid mx-6'>


                <Card className='rounded-md mb-10'
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                >
                    <Image
                        objectFit='cover'
                        src='https://img.freepik.com/free-vector/fitness-concept-illustration_1284-61329.jpg'
                        alt='fitness'
                    />

                    <Stack >
                        <CardBody>
                            <Heading size='md'>Welcome to fitness tracker</Heading>
                            <Text py='2'>
                                Empower your fitness journey with our all-in-one solution - track, set, and achieve your goals effortlessly.
                            </Text>
                        </CardBody>

                        <CardFooter>
                            <NavLink to="/signup">
                                <Button variant='solid' colorScheme='blue' >
                                    Get Started
                                </Button>
                            </NavLink>
                        </CardFooter>
                    </Stack>
                </Card>
                <div className="card-container flex justify-between mb-2">
                    <NavLink to="/nutrition">
                    <Card1 title={"Know your Food"} subtitle={""} img={image1} />
                    </NavLink>
                    <NavLink to="/exercise">
                    <Card1 title={"Fitness Training"} subtitle={""} img={image2} />
                    </NavLink>
                    <NavLink to="/track-calories">
                    <Card1 title={"Track your calories"} subtitle={""} img={image3} />
                    </NavLink>
                </div>
                <div className="card-container flex justify-between">
                    <NavLink to="/">
                    <Card1 title={"Integrated Chat Bot"} subtitle={""} img={image4} />
                    </NavLink>
                    <NavLink to="/dashboard">
                    <Card1 title={"Monitor your progress on the Dashboard"} subtitle={""} img={image5} />
                    </NavLink>
                    <NavLink to="/recommendations">
                    <Card1 title={"Personalized Food Recommendations"} subtitle={""} img={image6} />
                    </NavLink>
                </div>
            </div>
        </div>
    );
}
