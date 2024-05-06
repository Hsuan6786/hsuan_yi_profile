import { Input, Stack } from '@chakra-ui/react'
import CustomButton from '@/components/Button'

export default function InputSendEmail({link}) {
 
  return (
    <Stack
      display={'flex'}
      w="100%"
      flexDirection={{ base: 'column', sm: 'row' }}
      gap={'md'}
    >
      <Input
        py="12px"
        flex="1"
        variant={'filled'}
        bg="primary"
        value={link}
        isReadOnly={true}
        focusBorderColor="accent"
        _hover={{backgroundColor: 'transparent'}}
      />
      <CustomButton
        color="accent"
        rightIcon={false}
      >
        <a href={`mailto: ${link}`}> Visit Website </a>
      </CustomButton>
    </Stack>
  )
}
