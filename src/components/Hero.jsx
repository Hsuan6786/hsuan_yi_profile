import {
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
  Image,
  Container,
  VStack,
} from '@chakra-ui/react'
import { GoChevronRight } from 'react-icons/go'

export default function HeroSection({ title, svgImage, children }) {
  return (
    <Box
      pos="relative"
      pt="2xl"
    >
      <Image
        pos="absolute"
        top="0"
        left="0"
        zIndex="-1"
        src="assets/curve.svg"
      />
      <Box
        mx={'auto'}
        px="lg"
        display={'flex'}
        justifyContent={'space-between'}
        flexDir={{ base: 'column', sm: 'row' }}
        w={{ base: '100%', sm: 'min(938px, 83.33%)' }}
      >
        <VStack
          flex={1}
          alignItems={'flex-start'}
          justifyContent={'center'}
        >
          <Text textStyle={'h1'}>{title}</Text>
          <Breadcrumb
            spacing="8px"
            separator={<GoChevronRight color="grey.500" />}
          >
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">{title}</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          {children}
        </VStack>
        <Box
          mt="2xl"
          flex={1}
          maxH="368px"
        >
          <Image
            w="100%"
            h="100%"
            src={`assets/${svgImage}.svg`}
          />
        </Box>
      </Box>
    </Box>
  )
}
