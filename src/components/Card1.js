import React from 'react';
import { Box, Image, Text, IconButton } from '@chakra-ui/react';
import { MdCallMissedOutgoing } from 'react-icons/md';

function Card1({ title, subtitle, img }) {
    return (
        <Box className='border p-2 m-3 bg-white border-[#ccc] rounded-md' width="355px" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={img} alt="Food" height="150px" objectFit="cover" />
            <Box p="6">
                <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
                    {title}
                </Box>
                <Text mt="2" color="gray.600" fontSize="sm">
                    {subtitle}
                </Text>
            </Box>
            <Box px="6" pb="6">
                <IconButton aria-label="Add to favorites" icon={<MdCallMissedOutgoing />} colorScheme="green" />
            </Box>
        </Box>
    );
}

export default Card1;
