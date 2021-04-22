import { IoSearchSharp, IoPersonCircleSharp } from 'react-icons/io5';
import ColorModeToggle from './ColorModeToggle/index';
import SmallScreenMenu from './SmallScreenMenu';
import IconLinkButton from './IconLinkButton';
import { AiFillGithub } from 'react-icons/ai';
import { Flex, Box } from '@chakra-ui/react';
import SearchBar from './SearchBar';
import React from 'react';
import Logo from './Logo';

const Header = ({ data, SearchController }) => {

    return (
        <>
            <Flex py={6} alignItems="center">
                <Box mr="6" minW={200} display={{ base: 'none', md: 'block' }}>
                    <Logo />
                </Box>
                <Box flex={1} w={{ base: '75vw', md: '20vw' }} justifySelf="center">
                    <SearchBar
                        SearchController={SearchController}
                        data={data}
                        type="text"
                        placeholder="Search by country"
                        icon={<IoSearchSharp />}
                    />
                </Box>
                <Box ml="4" display={{ base: 'none', sm: 'block' }}>
                    <ColorModeToggle />
                </Box>
                <Box ml="4" display={{ base: 'none', lg: 'block' }}>
                    <IconLinkButton
                        href={"https://github.com/glyxs/covid-tracker"}
                        icon={<AiFillGithub fontSize="24px" />} />
                </Box>
                <Box ml="4" display={{ base: 'none', lg: 'block' }}>
                    <IconLinkButton
                        text={<strong>Author</strong>}
                        href={"https://stepanpavlov.com"}
                        icon={<IoPersonCircleSharp fontSize="24px" />} />
                </Box>
                <Box ml="4" display={{ base: 'block', lg: 'none' }}>
                    <SmallScreenMenu />
                </Box>
            </Flex>
        </>
    );
};

export default Header;
