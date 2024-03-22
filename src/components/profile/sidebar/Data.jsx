import { Box, Text, VStack, Input, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function Data() {
  const [list, setList] = useState([]);
  const [editing, setEditing] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const handleValueBlur = (e) => {
    const value = e.target.value;
    const id = e.target.id;
    console.log(id, "the id");
    const index = list.findIndex((item) => item.id === id);
    const newList = [...list];
    newList[index].value = value;
    setList([...newList]);
  };
  console.log(userProfile);
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
        { id: 3, name: "Age", value: userProfile.age, color: "green" },
        { id: 1, name: "Height", value: userProfile.height, color: "green" },
        { id: 2, name: "Weight", value: userProfile.weight, color: "green" },
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
              <Input defaultValue={item.value} onBlur={handleValueBlur} />
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
      <Box padding={2} className={"flex-row flex w-full "+(editing? "justify-end" : "justify-between")}>
        {!editing ? (
          <Button onClick={() => setEditing(true)}>Edit</Button>
        ) : (
          <Button onClick={() => setEditing(false)}>Save</Button>
        )}
      </Box>
    </VStack>
  );
}

export default Data;
