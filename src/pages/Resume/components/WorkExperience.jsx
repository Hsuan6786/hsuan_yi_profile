import {
  Box,
  Heading,
  Divider,
  UnorderedList,
  ListItem,
  Badge,
  Image,
  useBreakpointValue,
  HStack,
  Text,
  Tag,
  VStack,
} from '@chakra-ui/react'
import TitleSection from '@/components/TitleSection'

export default function WorkExperience() {
  const experiences = [
    {
      index: 0,
      image: 'illustration-job1',
      companyName: '又群資訊有限公司',
      period: '2021.04 - 2023.08',
      position: 'UI / UX 設計師',
      list: [
        '了解客戶資訊，搜集與分析競業相關資訊。',
        '依據客戶需求提供客製化設計。',
        '積極與團隊溝通確保設計方向符合技術和業務需求。',
        '配合 Bootstrap 及 grid 設計 RWD 網站。',
      ],
    },
    {
      index: 1,
      image: 'illustration-job2',
      companyName: '1111人力銀行(台中分公司)',
      period: '2018.10 - 2020.08',
      position: '設計專員',
      list: [
        '協助官網內容上架、資料維護更新。',
        '與團隊合作，進行子網站與異業網站 UI 設計。',
        '配合企劃文案設計BANNER，於時間內準時交付。',
        '中台灣 IG 粉絲專業製作貼文動畫。',
        '製作報紙、公車亭 / 公車體等設計印刷物。',
      ],
    },
  ]
  return (
    <Box
      pos="relative"
      my="5xl"
      py="5xl"
    >
      <Image
        pos="absolute"
        zIndex={-1}
        top={0}
        h={'100%'}
        w={'100%'}
        src={useBreakpointValue({
          base: 'assets/bg-resume-experience-mobile.png',
          sm: 'assets/bg-resume-experience.png',
        })}
      />
      <Image
        display={{ base: 'none', sm: 'block' }}
        pos="absolute"
        top="-80px"
        src="assets/illustration_holding_phone.svg"
      />
      <Image
        display={{ base: 'none', sm: 'block' }}
        pos="absolute"
        right="0"
        src="assets/illustration_cat_jump.svg"
      />
      <Image
        display={{ base: 'none', sm: 'block' }}
        pos="absolute"
        height="175px"
        bottom="-175px"
        zIndex={1}
        src="assets/illustration_Identification card.svg"
      />
      <TitleSection
        heading={'Work Experience'}
        title={'工作經歷'}
        viewBtn={false}
      />
      <Box mt="3xl">
        {experiences.map((experience,index) => (
          <_ExperienceLayout
          key={`experience-${index}`}
           experience={experience} />
        ))}
      </Box>
    </Box>
  )
}

function _ExperienceLayout({ experience }) {
  const { image, companyName, position, period, list, index } = experience
  return (
    <HStack
      pos="relative"
      w={{base: '100%' , sm: 'min(938px, 83.33%)'}}
      mx="auto"
      p={{base: 'lg', sm: 0}}
      alignItems={'center'}
    >
      <Box
        display={{ base: 'none', sm: 'block' }}
        flex="1"
        order={{base: 0, sm :index % 2 === 0 ? 0 : 3}}
      >
        <Image src={`assets/${image}.svg`} />
      </Box>

      <VStack
        mx={{base: '0', sm: '2xl'}}
        order={{base: 0, sm :index % 2 === 0 ? 0 : 2}}
        alignSelf={'stretch'}
        spacing={0}
      >
        <Tag
          size="lg"
          bg="accent"
          py="xs"
          color="beige.100"
          borderRadius="full"
          flexDir="column"
          textStyle={'body2'}
        >
          <Text lineHeight={1}>Job</Text>
          <Text fontSize="20px" fontWeight={'black'}>{index<10 ? `
          0${index + 1}`: index+1}</Text>
        </Tag>
        <Divider
          borderColor="beige.300"
          orientation="vertical"
          opacity={1}
          borderLeftWidth={'2px'}
        />
      </VStack>

      <Box
        flex="1"
        order={0}
        textStyle={'content'}
        color="dark-green"
        p={{base: 'xl', sm: 0}}
      >
        <Text
          textStyle={'h3'}
          color="secondary"
          lineHeight={1}
        >
          {companyName}
        </Text>
        <Box my="sm">
          <Badge
            textStyle={'body1'}
            bg="beige.300"
            color="dark-green"
            mr="xl"
          >
            {period}
          </Badge>
          / {position}
        </Box>
        <UnorderedList>
          {list.map((i,index) => (
            <ListItem textStyle={'content'} color="dark-green" key={`experienceLayout-${index}`}>{i}</ListItem>
          ))}
        </UnorderedList>
      </Box>
    </HStack>
  )
}
