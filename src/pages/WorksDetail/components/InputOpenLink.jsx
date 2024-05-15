import { Input, Stack } from '@chakra-ui/react'
import CustomButton from '@/components/Button'

export default function InputSendEmail({link}) {
 
  return (
    <Stack
      display={'flex'}
      w="100%"
      alignItems={{ base: 'center', sm: 'stretch' }}
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
        <a target='_blank' href={`${link}`}> Visit Website </a>
      </CustomButton>
    </Stack>
  )
}
