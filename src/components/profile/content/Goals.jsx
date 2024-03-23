import React, { useEffect, useState } from "react";
import {
  Text,
  Heading,
  Button,
  Modal,
  Badge,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  HStack,
  Input,
} from "@chakra-ui/react";
import CardSelector from "./CardSelector";
import Goal from "./Goal";

function Goals() {
  const [goal, setGoal] = useState(3);
  const [editingGoal, setEditingGoal] = useState(false);
  const [goalInput, setGoalInput] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }
  const [selectedCards, setSelectedCards] = useState([]);

  const [cards, setCards] = useState([]);
  useEffect(() => {
    const c = localStorage.getItem("cards");
    if (c) setCards(JSON.parse(c));
  }, []);
  return (
    <div>
      <div>
        {cards.map((card) => (
          <Goal
            name={card.title}
            setCards={setCards}
            distance={card.distance}
          />
        ))}
      </div>
      <Button
        onClick={() => {
          openModal();
        }}
      >
        <Text>Add Goal</Text>
      </Button>
      <Modal
        isOpen={isModalOpen}
        size={"xl"}
        onClose={() => {
          setSelectedCards([]);
          closeModal();
        }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select Sport</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CardSelector
              selectedCards={selectedCards}
              setSelectedCards={setSelectedCards}
            />
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={() => {
                setCards([...cards, ...selectedCards]);
                localStorage.setItem(
                  "cards",
                  JSON.stringify([...cards, ...selectedCards])
                );
                setSelectedCards([]);
                closeModal();
              }}
            >
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default Goals;
