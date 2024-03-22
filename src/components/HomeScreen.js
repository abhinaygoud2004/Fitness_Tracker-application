import React, { useEffect, useState } from 'react';
import { Progress } from "@material-tailwind/react";
import { v4 as uuid } from "uuid";
import { Button, Input, InputGroup, InputLeftAddon, } from '@chakra-ui/react';
import { Link } from 'react-router-dom'
import { Select } from '@chakra-ui/react'

const HomeScreen = () => {
    const [showModal, setShowModal] = useState(false)
    const [allMeals, setAllMeals] = useState([{ mealId: uuid(), mealName: 'dosa', mealCalories: '500' }])
    const [allWorkouts, setAllWorkouts] = useState([{ workoutId: uuid(), workoutName: 'Gym', workoutCalories: '300' }])

    const [mealCard, setMealCard] = useState(false)
    const [workoutCard, setWorkoutCard] = useState(false)
    const [tempDailyCaloriesLimit, setTempDailyCaloriesLimit] = useState(2000)
    const [dailyCaloriesLimit, setDailyCaloriesLimit] = useState(2000)
    const [caloriesConsumed, setCaloriesConsumed] = useState(0)
    const [caloriesBurned, setCaloriesBurned] = useState(0)

    const [mealName, setMealName] = useState('');
    const [mealCalories, setMealCalories] = useState('');

    const [workoutName, setWorkoutName] = useState('');
    const [workoutDuration, setWorkoutDuration] = useState();
    const [workoutHeartRate, setWorkoutHeartRate] = useState();
    const [workoutBodyTemp, setWorkoutBodyTemp] = useState();

    const [workoutCalories, setWorkoutCalories] = useState('');

    const handleFormSubmit1 = (e) => {
        e.preventDefault();

        console.log('Meal Name:', mealName);
        console.log('Meal Calories:', mealCalories);

        setAllMeals([...allMeals, { mealId: uuid(), mealName: mealName, mealCalories: mealCalories }])

        setMealName('');
        setMealCalories('');
    };

    const handleFormSubmit2 = (e) => {
        e.preventDefault();

        console.log('Workout Name:', workoutName);
        console.log('Workout Calories:', workoutCalories);

        setAllWorkouts([...allWorkouts, {
            workoutId: uuid(),
            workoutName: workoutName,
            workoutCalories: workoutCalories,
            workoutBodyTemp: workoutBodyTemp,
            workoutDuration: workoutDuration,
            workoutHeartRate: workoutHeartRate
        }])
        setWorkoutName('');
        setWorkoutCalories('');
        setWorkoutHeartRate();
        setWorkoutBodyTemp();
        setWorkoutDuration();
    };

    useEffect(() => {
        let c = 0;
        allMeals?.map(item => {
            c += Number(item.mealCalories)
        })
        setCaloriesConsumed(c)
    }, [allMeals])

    useEffect(() => {
        let c = 0;
        allWorkouts?.map(item => {
            c += Number(item.workoutCalories)
        })
        setCaloriesBurned(c)
    }, [allWorkouts])

    useEffect(() => {
        const predictCaloriesBurned = async () => {
            const apiUrl = 'http://127.0.0.1:5000/predict_calories';
            const userData = {
                Gender: 0,
                Age: 27,
                Height: 181,
                Weight: 72,
                Duration: Number(workoutDuration),
                Heart_Rate: Number(workoutHeartRate),
                Body_Temp: Number(workoutBodyTemp),
            };

            try {
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(userData),
                });

                if (!response.ok) {
                    throw new Error('Failed to calculate calories');
                }

                const data = await response.json();
                setWorkoutCalories(data.calories);
            } catch (error) {
                console.error('Error:', error.message);
            }
        }
        if (workoutDuration && workoutBodyTemp && workoutHeartRate)
            predictCaloriesBurned()
    }, [workoutBodyTemp, workoutDuration, workoutHeartRate])

    return (
        <div>
        

        </div >
    );
};

export default HomeScreen;
