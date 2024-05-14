import {
  Box,
  Image,
  UnorderedList,
  ListItem,
  Stack,
  Text,
  useBreakpointValue,
  Divider,
} from '@chakra-ui/react'
import SvgIcon from '@/components/SvgIcon'

export default function SiteDetails({ work }) {
  return (
    <Box
      mt="3xl"
      pos="relative"
      py="4xl"
    >
      <Box
        pos="absolute"
        zIndex={-1}
        top={0}
        w={'100%'}
        h="100%"
      >
        <Image
          w={'100%'}
          h={'10%'}
          src={require('/public/assets/bg_work-detail-site.png')}
        />
        <Box
          h="90%"
          bg="beige.100"
        />
      </Box>

      <Box
        mx="auto"
        w={{ base: '100%', sm: 'min(938px, 83.33%)' }}
      >
        <Content work={work} />
        <Image
          px={{ base: 'lg', sm: 0 }}
          src={work.projectSnapShotPath}
        />
      </Box>
    </Box>
  )
}

function Content({work}) {
  return (
    <Box pb="4xl">
      <Text
        textStyle="h3"
        color="secondary"
        textAlign={'center'}
      >
        Site Details
      </Text>
      <DetailList
        title={'客戶背景'}
        titleEn="Client Profile"
        content={work.projectInfo.customerBackground}
      />

      <DetailList
        title="產品目的"
        titleEn="Product Purpose"
      >
        <Text>{work.projectInfo.productPurpose.title}</Text>
        <UnorderedList>
          {work.projectInfo.productPurpose.content.map((content) => (
            <ListItem> {content} </ListItem>
          ))}
        </UnorderedList>
      </DetailList>

      <DetailList
        title="設計理念"
        titleEn="Design Concept"
        content={work.projectInfo.designConcept}
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
      px={{ base: 'lg', sm: 0 }}
    >
      <Stack
        py="3xl"
        flexDir={{ base: 'column', md: 'row' }}
        spacing={{ base: '0', md: '4xl' }}
        alignItems={{ base: 'flex-start', md: 'center' }}
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
            textAlign="left"
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
        <Box
          pt={{ base: 'md', sm: 0 }}
          flex="3"
        >
          {children || <Text>{content}</Text>}
        </Box>
      </Stack>
      <Divider
        borderColor={'beige.300'}
        borderBottomWidth={'2px'}
      />
    </Box>
  )
}
