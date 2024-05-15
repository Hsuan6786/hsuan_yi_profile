import { Box, Container, Center, Text } from '@chakra-ui/react'
import Button from '@/components/Button'
import { Children, isValidElement } from 'react'
import {useNavigate} from 'react-router-dom'

export default function TitleSection({ heading, title, content, children, viewBtnLink,viewBtn = true, ...reset }) {
  let afterSlot = null
  Children.forEach(children, (child) => {
    if (!isValidElement(child)) return null
    if (child.props.slot === 'after') {
      afterSlot = child
    }
  })
  const navigate = useNavigate()
  return (
      <Center
        flex={1}
        flexDir={'column'}
        textAlign={'center'}
        justifyItems={'center'}
        alignItems={'center'}
        {...reset}
      >
    
          <Box
            textStyle="h2"
            textColor={'secondary'}
          >
            {heading}
          </Box>
          <Text
            textColor={'beige.400'}
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
            onClick={()=> navigate(viewBtnLink)}
          />}
      </Center>
 
  )
}
