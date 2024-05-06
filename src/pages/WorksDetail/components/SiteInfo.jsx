import {
  Box,
  List,
  ListItem,
  VStack,
  Text,
  SimpleGrid,
  Icon,
} from '@chakra-ui/react'
import { FaUser, FaBriefcase } from 'react-icons/fa'
import { IoSettingsSharp } from 'react-icons/io5'
import { BsFillPeopleFill } from 'react-icons/bs'

export default function SiteInfo() {
  const data = [
    {
      icon: FaUser,
      title: '角色',
      contentList: ['UI Designer', 'UX Designer', 'Visual Designer'],
    },
    {
      icon: IoSettingsSharp,
      title: '工具',
      contentList: ['Figma', 'Adobe Photoshop'],
    },
    {
      icon: FaBriefcase,
      title: '負責項目',
      contentList: ['資料整合', '客戶溝通', '版面架構設計', '網站測試'],
    },
    {
      icon: BsFillPeopleFill,
      title: '團隊人數',
      contentList: ['4人'],
    },
  ]
  return (
    <SimpleGrid
      pt="2xl"
      mx="auto"
      columns={{ base: 2, sm: 3, md: 4 }}
      spacing={{ base: 'md', sm: 'lg' }}
      justifyContent={'center'}
      w={{ base: '100%', sm: 'min(1130px,85%)' }}
    >
      {data.map((item,idx) => (
        <VStack
          key={`data-${idx}`}
          flex="1"
          justifyContent={'flex-start'}
          alignItems={'center'}
        >
          <Box
            px="sm"
            py="xs"
            borderRadius="100vmax"
            border="10px solid"
            borderColor='beige.300'
          >
            <Icon
              as={item.icon}
              color="accent"
              h="16px"
            />
          </Box>

          <Text
            fontSize={'md'}
            color="secondary"
            py="md"
            fontWeight={'bold'}
          >
            {item.title}
          </Text>
          <List
            spacing={0}
            textAlign={'center'}
          >
            {item.contentList.map((content, idx) => (
              <ListItem
                key={`content-${idx}`}
                textStyle="content"
                color="dark-green"
              >
                {content}
              </ListItem>
            ))}
          </List>
        </VStack>
      ))}
    </SimpleGrid>
  )
}
