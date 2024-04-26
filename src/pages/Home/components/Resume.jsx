import {
  Image,
  Stack,
  UnorderedList,
  ListItem,
  Box,
  Container,
  Center,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react'
import Button from '@/components/Button'

export default function Resume() {
  const content = {
    ui: {
      title: 'UI / UX Design',
      caption: 'Projects Completed',
      amount: 30,
      image: 'illustration_devices',
      list: [
        '了解客戶搜集與分析競業相關資訊。',
        '依據客戶需求提供客製化設計',
        '配合 Bootstrap 及 grid 設計RWD網站。',
        '使用Prototyping展示交互設計流程。',
        '建立Style Guide使設計和開發更協同。',
        '協助開發人員進行測試並給予反饋。',
        '積極與團隊溝通確保設計方向符合技術和業務需求。',
      ],
    },
    visual: {
      title: 'Visual Design',
      caption: 'Banner Design',
      amount: 60,
      image: 'illustration_tools',
      list: [
        '協助官網內容上架、資料維護更新。',
        '子網站與異業網站 UI 設計。',
        '與企劃配合協助設計BANNER。',
        '協助 IG 粉絲專頁製作動畫。',
        '製作報紙等排版印刷物。',
      ],
    },
  }
  return (
    <Box
      mt="5xl"
      py="5xl"
      pos="relative"
    >
      <Image
        pos="absolute"
        zIndex={-1}
        top={0}
        h={'100%'}
        w={'100%'}
        src={useBreakpointValue({
          base: 'assets/bg-home-resume-mobile.png',
          sm: 'assets/bg-home-resume.png',
        })}
      />
      <Center
        flex={1}
        textAlign={'center'}
        justifyItems={'center'}
        alignItems={'center'}
      >
        <Container maxW={'360px'}>
          <Box
            textStyle="h1"
            textColor={'secondary'}
          >
            Resume
          </Box>
          <Text fontSize={'xl'}>關於我</Text>
          <Text
            mt={'xs'}
            textStyle={'content'}
            textColor={'dark-green'}
          >
            擁有4年以上的設計實務經驗，畢業於嶺東科技大學數位媒體設計系，在學期間與科博館進行1年半左右的「石光乍現，尋鑑動物奇跡」停格動畫產學合作。
          </Text>
          <Text
            mt={'xs'}
            textStyle={'content'}
            textColor={'dark-green'}
          >
            大學畢業後於1111人力銀行擔任設計專員，轉職UI/UX設計師，任職於又群資訊有限公司，在職期間推動內部使用Figma，製作Prototyping、Design
            system降低溝通成本。
          </Text>
          <Button
            mt="xl"
            label="View More"
            color="accent"
            rounded={true}
          />
        </Container>
      </Center>
      <Stack
        direction={{ base: 'column', sm: 'row' }}
        w="min(938px,95%)"
        mt="3xl"
        mx="auto"
        spacing="lg"
        px="lg"
        justifyContent={'center'}
        pos="relative"
      >
        <Image
          pos="absolute"
          display={{ base: 'none', sm: 'block' }}
          top="-177px"
          left="lg"
          h="177px"
          src="assets/illustration_girl-laptop.svg"
        />
        <_Card data={content.ui} />
        <_Card data={content.visual} />
      </Stack>
    </Box>
  )
}

function _Card({ data = {} }) {
  const { title, caption, amount, list = [], image } = data
  return (
    <VStack
      flex="1"
      p="2xl"
      bg="primary"
      borderRadius={'24px'}
    >
      <Text textStyle={'h4'}>{title}</Text>
      <Text textStyle={'h1'}>{amount}+</Text>
      <Text
        pb="md"
        textStyle={'body1'}
      >
        {caption}
      </Text>
      <Image
        w="min(165px,80%)"
        h="112px"
        mb="xl"
        src={`assets/${image}.svg`}
      />

      <UnorderedList w="100%" textAlign={'left'}>
        {list.map((i, idx) => (
          <ListItem
            key={`card-${idx}`}
            textStyle={'content'}
          >
            {i}
          </ListItem>
        ))}
      </UnorderedList>
    </VStack>
  )
}
