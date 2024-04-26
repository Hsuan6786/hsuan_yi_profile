import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  VStack,
  Text,
  Box,
  Image,
  StackDivider,
  HStack,
} from '@chakra-ui/react'
import { useRef } from 'react'
import SvgIcon from '@/components/SvgIcon'
import { useNavigate } from 'react-router-dom'
import { IoIosArrowDroprightCircle } from 'react-icons/io'
import SocialMediaLinks from '@/components/SocialMediaLinks'

export default function MenuMobile({ menus }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  const navigate = useNavigate()
  return (
    <>
      <Button
        ref={btnRef}
        onClick={onOpen}
        leftIcon={<SvgIcon name="menu" />}
        variant="unstyled"
      />
      <Drawer
        isOpen={isOpen}
        size="full"
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerContent bg="primary">
          <DrawerHeader bg={`rgba(237, 233, 225, 0.7)`}>
            <Image
              src="assets/logo.svg"
              alt="I am Hsuan"
              cursor={'pointer'}
              onClick={() => navigate('/')}
            />
            <DrawerCloseButton />
          </DrawerHeader>

          <DrawerBody>
            <VStack
              divider={
                <StackDivider
                  m="0"
                  borderColor="beige.300"
                />
              }
              align="stretch"
              spacing="0"
            >
              {menus.map((menu, idx) => (
                <HStack
                  key={`menu-${idx}`}
                  px="lg"
                  py="xl"
                  onClick={() => {
                    navigate(menu.to)
                    onClose()
                  }}
                >
                  <Image src="assets/star.svg" />
                  <Text
                    textStyle={'content'}
                    color="dark-green"
                    flex="1"
                  >
                    {menu.label}
                  </Text>
                  <IoIosArrowDroprightCircle size="24px" />
                </HStack>
              ))}
            </VStack>
          </DrawerBody>

          <DrawerFooter>
            <SocialMediaLinks
              mx="auto"
              pb="2xl"
              socialMedias={['104', 'cakeresume', 'mail']}
            />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
