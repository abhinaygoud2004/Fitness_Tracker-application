import { Box, Text, VStack, Input, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function Data() {
  const [list, setList] = useState([]);
  const [editing, setEditing] = useState(false);
  const [userProfile, setUserProfile] = useState(null);

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

  useEffect(() => {
    if (userProfile) {
      const l = [
        { id: 1, name: "Age", value: userProfile.age, color: "green" },
        { id: 2, name: "Height", value: userProfile.height, color: "green" },
        { id: 3, name: "Weight", value: userProfile.weight, color: "green" },
        {
          id: 4,
          name: "Gender",
          value: userProfile.sex === "0" ? "Male" : "Female",
          color: "green",
        },
      ];
      setList([...l]);
    }
  }, [userProfile]);

  const handleSave = async () => {
    try {
      const userId = localStorage.getItem("userId");
      const updatedProfile  = {
        age: list[0].value,
        height: list[1].value,
        weight: list[2].value,
        sex: list[3].value === "Male"? "0" : "1",
      };
      const response = await fetch(
        `http://localhost:4000/user-api/update-user/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedProfile),
        }
      );
      const user = await response.json();
      console.log(user);
      setUserProfile(user.payload);
      setEditing(false);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleChange = (event, id) => {
    const updatedList = list.map((item) => {
      if (item.id === id) {
        return { ...item, value: event.target.value };
      }
      return item;
    });
    setList(updatedList);
  };

  return (
    <VStack as="ul" spacing={0} listStyleType="none">
      {list.map((item) => (
        <Box
          key={item.id}
          as="li"
          w="full"
          py={3}
          px={5}
          d="flex"
          borderBottomWidth={1}
          borderColor="brand.light"
          alignItems="center"
          justifyContent="space-between"
        >
          {editing ? (
            <>
              <Text color="brand.dark">{item.name}</Text>
              <Input
                value={item.value}
                onChange={(event) => handleChange(event, item.id)}
              />
            </>
          ) : (
            <>
              <Text color="brand.dark">{item.name}</Text>
              <Text color={`brand.${item.color}`} fontWeight="bold">
                {item.value}
              </Text>
            </>
          )}
        </Box>
      ))}
      <Box
        padding={2}
        className={
          "flex-row flex w-full " +
          (editing ? "justify-end" : "justify-between")
        }
      >
        {!editing ? (
          <Button onClick={() => setEditing(true)}>Edit</Button>
        ) : (
          <Button onClick={handleSave}>Save</Button>
        )}
      </Box>
    </VStack>
  );
}

export default Data;
