import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import Home from "./pages/Home";
import { ThemeProvider } from "@material-tailwind/react";
import Login from "./components/Login/Login";
import { ChakraProvider, theme } from "@chakra-ui/react";
import ExerciseDetail from "./pages/ExerciseDetail";
// import HydrationReminder from "./components/HydrationReminder";
import { Helmet } from "react-helmet";
import SignUp from "./components/SignUp/SignUp";
import FitnessTracking from "./components/FitnessTracking/FitnessTracking";
import Main from "./components/profile/Main";
// import DailyCalorieIntake from "./components/Calculators/DailyCalorieIntake";
import DailyCalorieIntake from "./components/Calculators/DailyCalorieIntake";
import NutritionTable from "./components/Nutrition/Nutrition";
// import Media from "./components/Media/Media";
// import Test from "./components/Test";
import Header from "./components/Header";
import { Toaster } from "react-hot-toast";
import Dashboard from "./components/dashboard/Dashboard";
import AddEntry from "./components/dashboard/AddEntry";
import Recommendations from "./components/Recommendations";
import Landing from "./components/Landing";

function App() {
  const activityData = {
    running: 30,
    cycling: 20,
    weightlifting: 15,
    yoga: 10,
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Fitness Tracker</title>
        <link rel="canonical" href="http://localhost:3004" />
      </Helmet>
      <ChakraProvider theme={theme}>
        <React.StrictMode>
          <ThemeProvider>
            <BrowserRouter>
              <Toaster
                position="bottom-center"
                reverseOrder={false}
                gutter={8}
                containerClassName=""
                containerStyle={{}}
                toastOptions={{
                  className: "",
                  duration: 5000,
                  style: {
                    background: "#363636",
                    color: "#fff",
                  },

                  // Default options for specific types
                  success: {
                    duration: 3000,
                    theme: {
                      primary: "green",
                      secondary: "black",
                    },
                  },
                }}
              />
              <Header />
              <Routes>
                {/* <Route path="/" element={<HomePage />} /> */}
                <Route path="/" element={<Landing />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/tracking" element={<FitnessTracking />} />
                <Route path="/track-calories" element={<HomeScreen />} />
                <Route path="/recommendations" element={<Recommendations />} />
                <Route
                  path="/daily-calorie-calculator"
                  element={<DailyCalorieIntake />}
                />
                <Route path="/profile" element={<Main />} />
                <Route path="/nutrition" element={<NutritionTable />} />
                <Route path="/exercise/:id" element={<ExerciseDetail />} />
                <Route path="/add-entry" element={<AddEntry />} />
                
              </Routes>
            </BrowserRouter>
          </ThemeProvider>
        </React.StrictMode>
      </ChakraProvider>
    </div>
  );
}

export default App;
