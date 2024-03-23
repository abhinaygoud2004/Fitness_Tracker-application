import React, { useEffect, useState } from "react";
import Progress from "../Charts/Progress";
import { Heading, Box, Button, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import RandomQuote from "../RandomQuote";

function Dashboard() {
  const [userProfile, setUserProfile] = useState(null);
  const calculateBMI = () => {
    if (userProfile) {
      let height = userProfile.height;
      height = height / 100;
      const weight = userProfile.weight;
      let k = weight / (height * height);
      return k.toFixed(2);
    }
    return 0;
  };
  const [bmi, setBMI] = useState(calculateBMI());
  const [cards, setCards] = useState([]);
  const [progresses, setProgresses] = useState([]);
  useEffect(() => {
    const entries = localStorage.getItem("entries");
    if (entries) {
      const cards = JSON.parse(localStorage.getItem("cards"));
      const runningObj = cards.find((c) => c.title === "Running");
      const cyclingObj = cards.find((c) => c.title === "Cycling");
      const walkingObj = cards.find((c) => c.title === "Walking");
      const runningGoal = runningObj.distance;
      const cyclingGoal = cyclingObj.distance;
      const walkingGoal = walkingObj.distance;
      const e = JSON.parse(entries);
      let runningPercent = 0;
      let cyclingPercent = 0;
      let walkingPercent = 0;

      const running = e.filter((e) => e.sport === "running");
      const cycling = e.filter((e) => e.sport === "cycling");
      const walking = e.filter((e) => e.sport === "walking");

      if (running.length > 0) {
        running.forEach((entry) => {
          runningPercent += Number(entry.distance);
        });
        runningPercent = (runningPercent / runningGoal) * 100; // Calculate percentage
      }

      if (cycling.length > 0) {
        cycling.forEach((entry) => {
          cyclingPercent += entry.distance;
        });
        cyclingPercent = (cyclingPercent / cyclingGoal) * 100; // Calculate percentage
      }

      if (walking.length > 0) {
        walking.forEach((entry) => {
          walkingPercent += entry.distance;
        });
        walkingPercent = (walkingPercent / walkingGoal) * 100; // Calculate percentage
      }

      setProgresses([
        {
          name: "Running",
          percent: runningPercent,
        },
        {
          name: "Cycling",
          percent: cyclingPercent,
        },
        {
          name: "Walking",
          percent: walkingPercent,
        },
      ]);
    }
  }, []);
  const getProgress = (title) => {
    if (progresses.length > 0) {
      const item = progresses.find((p) => p.name === title);
      if (item) return Number(item.percent).toFixed(1);
      return 0;
    }
    return 0;
  };
  useEffect(() => {
    const c = localStorage.getItem("cards");
    if (c) setCards(JSON.parse(c));
  }, []);
  useEffect(() => {
    setBMI(calculateBMI());
  }, [userProfile]);
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const fetchUser = async () => {
      const response = await fetch(
        `http://localhost:4000/user-api/get-user/${userId}`
      );
      const user = await response.json();
      setUserProfile(user.payload);
    };

    fetchUser();
  }, []);
  return (
    <div className="container-fluid p-5 h-[80vh]">
      <Heading className="mb-2">Dashboard</Heading>
      <hr />
      <Box className="w-full flex justify-between">
        <Box
          className="w-1/3 rounded-md p-3 justify-center items-center flex"
          mt={4}
          border={"1px solid #181a1b"}
        >
          <Box>
            <Heading textAlign={"center"} as="h2" size="lg" color="black">
              Your BMI Score
            </Heading>
            {bmi < 18.5 && (
              <Heading textAlign={"center"} color={"red.500"}>
                {bmi}
              </Heading>
            )}

            {bmi >= 18.5 && bmi < 25 && (
              <Heading textAlign={"center"} color={"green.500"}>
                {bmi}
              </Heading>
            )}

            {bmi >= 25 && (
              <Heading textAlign={"center"} color={"red.500"}>
                {bmi}
              </Heading>
            )}
            {bmi < 18.5 || bmi >= 25 && (
              <Text>*the ideal BMI score should be 18.5 to 24.9</Text>
            )}
          </Box>
        </Box>
        <Box className="flex justify-center items-center">
          <NavLink to={"/add-entry"}>
            <Button>Add Manual Entry</Button>
          </NavLink>
        </Box>
      </Box>
      <Box className="mt-5">
        <Heading as={"h2"} size="lg">
          Progress
        </Heading>
        <Box
          border={"1px solid #181a1b"}
          className="mt-3 p-3"
          borderRadius={"md"}
        >
          <Heading as="h3" size="md">
            Daily
          </Heading>
          <Box className="flex flex-row p-3 justify-around">
            {cards.map((card) => (
              <Progress
                key={card.id}
                id={card.id}
                name={card.title}
                progress={getProgress(card.title)}
              />
            ))}
          </Box>
        </Box>
      </Box>
      <Box>
        <RandomQuote />
      </Box>
    </div>
  );
}

export default Dashboard;
