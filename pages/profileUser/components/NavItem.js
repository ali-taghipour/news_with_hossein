import React from 'react'
import {
    Flex,
    Text,
    Icon,
    Link,
    Menu,
    MenuButton,
    MenuList
} from '@chakra-ui/react'

export default function NavItem({ icon, title, description, active, navSize }) {
    return (
        <div className={`flex flex-col w-full mt-5 ${navSize == "small" ? "items-center" : "items-start"}`} >
            <Menu placement="right" >
                <Link
                    backgroundColor={active && "red"}
                    px={30}
                    py={5}
                    borderRadius={2}
                    _hover={{ textDecor: 'none', backgroundColor: "#9da0a6" }}
                    w={navSize == "large" && "100%"}

                >
                    <MenuButton w="100%">
                        <div className="flex">
                            <Icon as={icon} fontSize="xl" color={"#ffffff"} />
                            <Text ml={5} display={navSize == "small" ? "none" : "flex"} color={ "#ffffff"}>{title}</Text>
                        </div>
                    </MenuButton>
                </Link>
            </Menu>
        </div>
    )
}
