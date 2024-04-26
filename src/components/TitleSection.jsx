import { Box, Container, Center, Text } from '@chakra-ui/react'
import Button from '@/components/Button'
import { Children, isValidElement } from 'react'

export default function TitleSection({ heading, title, content, children, viewBtn = true }) {
  let afterSlot = null
  Children.forEach(children, (child) => {
    if (!isValidElement(child)) return null
    if (child.props.slot === 'after') {
      afterSlot = child
    }
  })
  return (
    <>
      <Center
        flex={1}
        flexDir={'column'}
        textAlign={'center'}
        justifyItems={'center'}
        alignItems={'center'}
      >
    
          <Box
            textStyle="h2"
            textColor={'secondary'}
          >
            {heading}
          </Box>
          <Text
            textColor={'dark-orange'}
            textStyle={'content'}
          >
            {title}
          </Text>
          {content && (
            <Text
              mt={'xs'}
              textStyle={'content'}
              textColor={'dark-green'}
            >
              {content}
            </Text>
          )}
          {afterSlot}
         {viewBtn && <Button
            mt="xl"
            label="View More"
            color="accent"
            rounded={true}
          />}
      </Center>
    </>
  )
}
