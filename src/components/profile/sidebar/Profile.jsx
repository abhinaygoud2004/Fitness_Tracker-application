import { useState, useRef, useEffect } from "react";
import "./profile.css";
import {
  Avatar,
  AvatarBadge,
  Badge,
  Button,
  Heading,
  HStack,
  InputGroup,
  InputRightElement,
  Input,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";

function Profile() {
  const UserProfile = ({ userProfile }) => {
    const getInitials = (name) => {
      const initials = name
        .split(" ")
        .map((n) => n[0])
        .join("");
      return initials.toUpperCase();
    };
    if (!userProfile) return null;
    return (
      <div className="avatar">
        <div className="avatar-initials">
          {getInitials(userProfile.username)}
        </div>
      </div>
    );
  };

  const [userProfile, setUserProfile] = useState(null);
  const [editingName, setEditingName] = useState(false);
  const [userName, setUserName] = useState(userProfile?.username);
  useEffect(() => {
    if (userProfile) {
      setUserName(userProfile.username);
    }
  }, [userProfile]);
  const handleClick=()=>{
    if(userProfile){
        
    }
  }

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
    <VStack spacing={3} py={5} borderBottomWidth={1} borderColor="brand.light">
      <UserProfile userProfile={userProfile} />
      <VStack spacing={1}>
        {editingName ? (
          <InputGroup>
            <Input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              onBlur={() => setEditingName(false)}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {"Save"}
              </Button>
            </InputRightElement>
          </InputGroup>
        ) : (
          <Heading
            as="h3"
            fontSize="xl"
            color="brand.dark"
            onClick={() => setEditingName(true)}
          >
            {userName}
          </Heading>
        )}
        <Text color="brand.gray" fontSize="sm">
          {userProfile ? userProfile.email : "<EMAIL>"}
        </Text>
      </VStack>
    </VStack>
  );
}

export default Profile;
