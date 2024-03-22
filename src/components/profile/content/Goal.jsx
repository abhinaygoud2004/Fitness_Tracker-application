import React, { useState } from "react";
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
function Goal({ name }) {
  const [goal, setGoal] = useState(3);
  const [goalInput, setGoalInput] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row">
          <svg
            width="105"
            height="106"
            viewBox="0 0 105 106"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_dd_301_180)">
              <circle
                cx="48.5644"
                cy="49.0603"
                r="33.7561"
                fill="url(#paint0_linear_301_180)"
              />
            </g>
            <path
              d="M53.2312 36.2313C55.318 36.2313 57.0255 34.5208 57.0255 32.4301C57.0255 30.3395 55.318 28.629 53.2312 28.629C51.1443 28.629 49.4369 30.3395 49.4369 32.4301C49.4369 34.5208 51.1443 36.2313 53.2312 36.2313ZM47.2173 59.0383L48.2986 54.2869L52.2826 58.0881V67.591C52.2826 68.6363 53.1363 69.4916 54.1798 69.4916C55.2232 69.4916 56.0769 68.6363 56.0769 67.591V56.8717C56.0769 55.8264 55.6595 54.838 54.9007 54.1158L52.0929 51.436L53.2312 45.7342C55.3691 48.1828 58.2958 49.8035 61.5027 50.3147C62.641 50.4857 63.6654 49.5734 63.6654 48.4141C63.6654 47.4828 62.9825 46.7035 62.0529 46.5515C59.1692 46.0763 56.7788 44.3658 55.5078 42.1231L53.6106 39.0822C52.8518 37.9418 51.7135 37.1816 50.3855 37.1816C49.8164 37.1816 49.4369 37.3717 48.8678 37.3717L41.3172 40.5646C40.6299 40.859 40.0441 41.3491 39.6326 41.9743C39.2211 42.5994 39.002 43.3319 39.0027 44.0807V48.5851C39.0027 49.6304 39.8564 50.4857 40.8998 50.4857C41.9432 50.4857 42.797 49.6304 42.797 48.5851V44.0237L46.2118 42.6933L43.1764 58.0881L35.7396 56.5676C34.7152 56.3585 33.7097 57.0237 33.501 58.05V58.1261C33.2923 59.1524 33.9563 60.1597 34.9808 60.3688L42.778 61.9272C43.7478 62.1201 44.7544 61.9261 45.5836 61.3865C46.4127 60.8469 46.9989 60.0044 47.2173 59.0383Z"
              fill="url(#paint1_linear_301_180)"
            />
            <defs>
              <filter
                id="filter0_dd_301_180"
                x="0.595273"
                y="0.202805"
                width="103.933"
                height="104.821"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="4.44159" dy="4.44159" />
                <feGaussianBlur stdDeviation="8.88317" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_301_180"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feMorphology
                  radius="1.77663"
                  operator="dilate"
                  in="SourceAlpha"
                  result="effect2_dropShadow_301_180"
                />
                <feOffset dx="-3.55327" dy="-4.44159" />
                <feGaussianBlur stdDeviation="4.44159" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_dropShadow_301_180"
                  result="effect2_dropShadow_301_180"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_301_180"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_301_180"
                x1="25.3571"
                y1="23.7432"
                x2="70.5058"
                y2="73.9554"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#D6D6D6" stop-opacity="0.45" />
                <stop offset="1" stop-color="white" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_301_180"
                x1="48.564"
                y1="28.629"
                x2="48.564"
                y2="69.4916"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#1BA1FF" />
                <stop offset="1" stop-color="#0057FF" />
              </linearGradient>
            </defs>
          </svg>
          <div className="flex justify-center items-center">
            <div>
              <Heading as="h3" fontSize="xl" color="brand.dark">
                {name}
              </Heading>
              <Text>{goal} kilometers</Text>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <Button
            h="1.75rem"
            size="sm"
            onClick={() => {
              openModal();
            }}
          >
            {"Change"}
          </Button>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Change Your Running Goal</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              value={goalInput}
              placeholder="Enter Kilometers"
              type="number"
              variant={"outline"}
              onChange={(e) => setGoalInput(e.target.value)}
            />
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => {}}>Cancel</Button>
            <Button
              onClick={() => {
                setGoal(goalInput);
                closeModal();
              }}
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default Goal;
