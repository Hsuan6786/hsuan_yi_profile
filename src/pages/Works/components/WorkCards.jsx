import {
  Card,
  Image,
  Grid,
  CardFooter,
  Text,
  Box,
  Flex,
} from '@chakra-ui/react'
import Pagination from './Pagination'
import { useNavigate } from 'react-router-dom'

export default function WorkCards() {
  const works = [
    {
      year: '2023',
      image: 'project1',
      name: 'JY CHYUN Official Website',
    },
    {
      year: '2023',
      image: 'project2',
      name: 'Y·UN Design Official Website',
    },
    {
      year: '2023',
      image: 'project3',
      name: 'HENGXU',
    },
    {
      year: '2023',
      image: 'project4',
      name: 'ATC Official Website',
    },
    {
      year: '2023',
      image: 'project5',
      name: 'Goodtop Official Website',
    },
    {
      year: '2023',
      image: 'project6',
      name: 'Septemberwine Official Website',
    },
  ]
  return (
    <Box px={{ base: 'lg', sm: 'none' }}>
      <Grid
        px={{ base: 'md', lg: '3xl' }}
        mt="4xl"
        mb="5xl"
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
        }}
        gridAutoRows="auto"
        columnGap={'lg'}
        rowGap={{ base: 'lg', sm: '3xl' }}
      >
        {works.map((work, idx) => (
          <_WorkCard
            key={`work-${idx}`}
            work={work}
          />
        ))}
      </Grid>
      <Pagination />
    </Box>
  )
}

function _WorkCard({ work }) {
  const navigate = useNavigate()
  return (
    <Box
      minW="0"
      pl={{ base: '0', sm: 'md', lg: 'xl' }}
    >
      <Card
        pos="relative"
        bg={{ base: 'transparent', sm: 'beige.300' }}
        w="100%"
        h="100%"
        borderRadius={24}
        variant={{ base: 'unstyled', sm: 'elevated' }}
        onClick={() => navigate('/works/details')}
      >
        <Box pos="relative">
          <_Badge />
          <Image
            w="100%"
            h={{ base: '460px', sm: '226px', lg: '413px' }}
            objectFit="cover"
            src={`assets/${work.image}.png`}
            alt={work.name}
            borderTopRadius="24"
            borderBottomRadius={{ base: '24', sm: 0 }}
          />
        </Box>

        <CardFooter
          p="lg"
          flexDir={'column'}
        >
          <Text
            textStyle={{ base: 'body1', sm: 'body2' }}
            color="dark-green"
          >
            {work.year}
          </Text>
          <Text
            textStyle={'content'}
            color="secondary"
          >
            {work.name}
          </Text>
        </CardFooter>
      </Card>
    </Box>
  )
}

function _Badge() {
  return (
    <Flex
      pos="absolute"
      top={{ base: 'calc(100% - 88px - 16px)', sm: '20px' }}
      left={{ base: 'calc(100% - 88px - 16px)', sm: `-${'xl'}` }}
      flexDir={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      w="88px"
      h="88px"
      bg="accent"
      borderRadius={'100vmax'}
    >
      <Text
        textStyle={'content'}
        color="white"
      >
        UI/UX
      </Text>
      <Text
        textStyle="body2"
        color="white"
      >
        Design
      </Text>
    </Flex>
  )
}