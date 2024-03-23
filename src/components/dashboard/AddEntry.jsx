import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  VStack,
  HStack,
  Box,
  Text,
  Spacer,
  Heading,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function AddEntry() {
  const SportOptions = [
    { value: "running", label: "Running" },
    { value: "cycling", label: "Cycling" },
    { value: "walking", label: "Walking" },
  ];
  const [formData, setFormData] = useState({
    distance: "",
    duration: "",
    sport: "",
    date: "",
    time: "",
    title: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., sending data to backend or handling locally
    console.log("Form submitted:", formData);
    let entries = [];
    const entriesString = localStorage.getItem("entries");
    if (entriesString) {
      entries = JSON.parse(entriesString);
    }
    localStorage.setItem("entries", JSON.stringify([...entries, formData]));
    nav('/dashboard')
  };
  const nav = useNavigate()
  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div className="p-5 w-1/2">
        <Heading>Manual Entry</Heading>
        <div className="flex px-5">
          <form onSubmit={handleSubmit} className="w-full mt-5">
            <VStack spacing={4} align="stretch">
              <FormControl>
                <FormLabel htmlFor="title">Title</FormLabel>
                <Input
                  id="title"
                  name="title"
                  type="text"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Title"
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="sport">Sport</FormLabel>
                <Select
                  id="sport"
                  name="sport"
                  value={formData.sport}
                  onChange={handleChange}
                  placeholder="Select sport"
                >
                  {SportOptions.map((sport, index) => (
                    <option key={index} value={sport.value}>
                      {sport.label}
                    </option>
                  ))}
                </Select>
              </FormControl>
              <div className="flex flex-row justify-between gap-4">
                <FormControl>
                  <FormLabel htmlFor="distance">Distance (km)</FormLabel>
                  <Input
                    id="distance"
                    name="distance"
                    type="number"
                    value={formData.distance}
                    onChange={handleChange}
                    placeholder="Distance"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="duration">Duration (hr)</FormLabel>
                  <Input
                    id="duration"
                    name="duration"
                    type="text"
                    value={formData.duration}
                    onChange={handleChange}
                    placeholder="Duration"
                  />
                </FormControl>
              </div>
              <div className="flex flex-row justify-between gap-4">
                <FormControl>
                  <FormLabel htmlFor="date">Date</FormLabel>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="time">Time</FormLabel>
                  <Input
                    id="time"
                    name="time"
                    type="time"
                    value={formData.time}
                    onChange={handleChange}
                  />
                </FormControl>
              </div>
              <div className="flex flex-row justify-center">
                <Button type="submit" colorScheme="blue">
                  Submit
                </Button>
              </div>
            </VStack>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddEntry;
