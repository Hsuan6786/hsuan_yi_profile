import ResumePersonalCard from '@/components/ResumePersonalCard'
import TitleSection from '@/components/TitleSection'
import {
  Heading,
  UnorderedList,
  ListItem,
  HStack,
  Text,
  Box,
} from '@chakra-ui/react'

export default function PersonalCard() {
  const infoList = [
    {
      title: 'Basic Information',
      list: [
        { label: '姓名', value: '黃宣頤' },
        { label: '地址', value: '桃園市桃園區' },
        { label: '學歷', value: ' 嶺東科技大學數位媒體設計系 畢業' },
        { label: 'Mail', value: 'hsuan88815@gmail.com' },
      ],
    },
    {
      title: 'Experience',
      list: [
        { label: '2015', value: '<時光乍現尋鑑動物奇跡>科博館產學合作' },
        { label: '2017', value: '時光門動畫影像社-實習生' },
        { label: '2017', value: '嶺東科技大學畢業專題委員會-執行秘書' },
        { label: '2018', value: '放視大賞 行動裝置類 入圍' },
        { label: '2018', value: '金點新秀贊助獎 數位媒體類 入圍' },
      ],
    },
  ]
  return (
    <Box px={{base: 'lg', sm: 0}}>
      <TitleSection
        heading={'About Me'}
        title={'關於我'}
        viewBtn={false}
        mb="lg"
      />

      <ResumePersonalCard
        imageWidth={{ base: '100%', sm: '363px' }}
        w={{base: '100%', sm: 'min(1130px,85%)'}}
      >
        <Box mt={{ base: 'lg', sm: 0 }}>
          {infoList.map((info, idx) => (
            <_InfoSection
              key={`info-${idx}`}
              index={idx}
              info={info}
            />
          ))}
        </Box>
      </ResumePersonalCard>
    </Box>
  )
}

function _InfoSection({ info, index }) {
  const { list, title } = info
  return (
    <Box pt={index % 2 !== 0 && '2xl'}>
      <Heading
        textStyle={'h3'}
        mb="xxs"
      >
        {title}
      </Heading>
      <UnorderedList
        p="0"
        m="0"
        styleType="none"
      >
        {list.map((item, idx) => (
          <ListItem
            mt="xxs"
            key={`info-list-${idx}`}
          >
            <HStack color="dark-green">
              <Text textStyle={'content'}>{item.label}</Text>
              <Text textStyle={'content'}>{item.value}</Text>
            </HStack>
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  )
}
