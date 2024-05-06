import {
  Box,
  Image,
  UnorderedList,
  ListItem,
  Stack,
  Text,
  VStack,
  Divider,
} from '@chakra-ui/react'
import SvgIcon from '@/components/SvgIcon'

export default function SiteDetails() {
  return (
    <Box
      mx="auto"
      w={{ base: '100%', sm: 'min(938px, 83.33%)' }}
    >
      <Content />
      <Image src={require('/public/assets/works-JY_CHYUN_snapshot.jpg')} />
    </Box>
  )
}

function Content() {
  return (
    <Box py="4xl">
      <Text
        textStyle="h3"
        color="secondary"
        textAlign={'center'}
      >
        Site Details
      </Text>
      <DetailList
        title="客戶背景"
        titleEn="Client Profile"
        content="枝群專注於連接器和天線相關組件的研發和製造，為客戶提供高品質的產品和服務。"
      />

      <DetailList
        title="產品目的"
        titleEn="Product Purpose"
      >
        <Text>創建B2B平台，展示產品資訊，提供諮詢管道。</Text>
        <UnorderedList>
          <ListItem>
            網站主要面向國際客戶，擁有多語系，並以英文版為主。
          </ListItem>
          <ListItem>傳統產業設計-工業金屬類</ListItem>
          <ListItem>詢價表單設計</ListItem>
          <ListItem>多階層選單 (menu )、搜尋框設計</ListItem>
        </UnorderedList>
      </DetailList>

      <DetailList
        title="設計理念"
        titleEn="Design Concept"
        content="以客戶的標準色為主色，展現簡約與現代感融合，通過精心製作的圖像和視覺元素，營造出令人印象深刻的品牌形象，並為用戶提供清晰、直觀的導航體驗。"
      />
    </Box>
  )
}

function DetailList(props) {
  const { title, titleEn, content, children } = props
  return (
    <Box
      mx="auto"
      w={{ base: '100%', sm: 'min(746px,70%)' }}
    >
      <Stack
        py="3xl"
        flexDir={{ base: 'column', sm: 'row' }}
        spacing={'4xl'}
        alignItems={'center'}
      >
        <SvgIcon
          size="36px"
          name="bullet_point"
        />
        <Box
          flex="1"
          textAlign={'center'}
        >
          <Text
            textStyle={'body2'}
            color="beige.400"
          >
            {titleEn}
          </Text>
          <Text
            color="secondary"
            textStyle={'h4'}
          >
            {title}
          </Text>
        </Box>
        <Box flex="3">{children || <Text>{content}</Text>}</Box>
      </Stack>
      <Divider
        borderColor={'beige.300'}
        borderBottomWidth={'2px'}
      />
    </Box>
  )
}
