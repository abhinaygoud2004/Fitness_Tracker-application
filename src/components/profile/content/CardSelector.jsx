import React, { useEffect, useState } from "react";
import { Card, CardHeader, Heading, CardBody, Text } from "@chakra-ui/react";
const COLOR = "#1BA1FF";
const SIZE = 50;
const CardSelector = ({ setSelectedCards, selectedCards }) => {
  const cards = [
    { id: 1, title: "Running", distance: 3 },
    { id: 2, title: "Cycling", distance: 3 },
    { id: 3, title: "Walking", distance: 3 },
  ];
  const svgs = {
    1: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={SIZE}
        height={SIZE}
        viewBox="0 0 24 24"
      >
        <path fill={COLOR} d="M20.75 4.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0" />
        <path
          fill={COLOR}
          fill-rule="evenodd"
          d="M9.802 5.93a3.97 3.97 0 0 1 .721-.043c.08.004.17.01.273.02c2.383.248 4.15 2.036 5.328 3.802l.063.094a3.25 3.25 0 0 0 2.704 1.447h1.859a.75.75 0 0 1 0 1.5h-1.86a4.75 4.75 0 0 1-3.952-2.115l-.062-.094A10.95 10.95 0 0 0 14 9.39l-1.884 2.355c-.428.534-.714.894-.907 1.19c-.188.286-.241.445-.255.566c-.024.2.002.403.073.591c.044.114.135.256.386.487c.26.24.626.518 1.172.93l.095.073c.72.546 1.22.924 1.565 1.428c.197.287.352.6.463.93c.193.58.193 1.206.193 2.11V22a.75.75 0 0 1-1.5 0v-1.83c0-1.07-.01-1.435-.116-1.755a2.25 2.25 0 0 0-.277-.558c-.19-.278-.476-.505-1.33-1.152l-.028-.021c-.51-.386-.933-.707-1.252-1.001c-.334-.307-.611-.635-.772-1.056a2.75 2.75 0 0 1-.162-1.3c.052-.448.241-.835.49-1.214c.237-.362.569-.778.968-1.277l1.984-2.479c-.687-.523-1.444-.871-2.264-.956a3.156 3.156 0 0 0-.184-.014a2.513 2.513 0 0 0-.45.03c-1.065.148-2.132.74-4.45 2.057l-1.436.815a.75.75 0 1 1-.742-1.304l1.436-.815l.152-.087c2.12-1.204 3.449-1.96 4.835-2.151M9.23 16.425a.75.75 0 0 1 .096 1.056l-1 1.201l-.097.116c-.642.771-1.113 1.338-1.771 1.646c-.658.308-1.395.308-2.4.307H2.75a.75.75 0 0 1 0-1.5h1.158c1.222 0 1.596-.017 1.913-.165c.318-.149.57-.426 1.352-1.364l1-1.201a.75.75 0 0 1 1.057-.096"
          clip-rule="evenodd"
        />
      </svg>
    ),
    2: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={SIZE}
        height={SIZE}
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke={COLOR}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M14 7a2 2 0 1 0 0-4a2 2 0 0 0 0 4m4 14a3 3 0 1 0 0-6a3 3 0 0 0 0 6M6 21a3 3 0 1 0 0-6a3 3 0 0 0 0 6m5.5-3l1.5-4l-4.882-2l3-3.5l3 2.5h3.5"
        />
      </svg>
    ),
    3: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={SIZE}
        height={SIZE}
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke={COLOR}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        >
          <path d="M12 4a1 1 0 1 0 2 0a1 1 0 1 0-2 0M7 21l3-4m6 4l-2-4l-3-3l1-6" />
          <path d="m6 12l2-3l4-1l3 3l3 1" />
        </g>
      </svg>
    ),
  };

  const handleCardSelect = (card) => {
    if (selectedCards.find((obj) => obj.id == card.id)) {
      setSelectedCards(selectedCards.filter((c) => c.id !== card.id));
    } else {
      setSelectedCards([...selectedCards, card]);
    }
  };

  const [cards_local, setCards_local] = useState([]);
  useEffect(() => {
    const c = localStorage.getItem("cards");
    if (c) setCards_local(JSON.parse(c));
  }, []);

  return (
    <div className="flex flex-row flex-wrap">
      {cards.map(
        (card) =>
          !cards_local.find((obj) => obj.id == card.id) && (
            <Card
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
              key={card.id}
              onClick={() => handleCardSelect(card)}
              borderColor={
                selectedCards.find((obj) => obj.id == card.id)
                  ? "green"
                  : "lightgray"
              }
              margin={2}
              padding={2}
              borderWidth="2px"
            >
              <div className="shadow w-[60px] h-[60px] rounded-full flex justify-center items-center">
                {svgs[card.id]}
              </div>
              <CardHeader>
                <Heading size="md"> {card.title}</Heading>
              </CardHeader>
            </Card>
          )
      )}
    </div>
  );
};

export default CardSelector;
