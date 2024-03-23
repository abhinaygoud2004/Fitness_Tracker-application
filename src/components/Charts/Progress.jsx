import React from "react";
import { CircularProgress, CircularProgressLabel, Box } from "@chakra-ui/react";

const Progress = ({ progress, name }) => {
  return (
    <Box textAlign="center">
      <CircularProgress
        value={progress}
        color="green.400"
        size="160px"
        thickness="12px"
      >
        <CircularProgressLabel>{`${progress}%`}</CircularProgressLabel>
      </CircularProgress>
      <Box mt={4}>{name}</Box>
    </Box>
  );
};

export default Progress;
