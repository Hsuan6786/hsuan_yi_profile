import { Input, Stack } from '@chakra-ui/react'
import CustomButton from '@/components/Button'

export default function InputSendEmail(props) {
  const email = 'hsuan88815@gmail.com'
  return (
    <Stack
      {...props}
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
        value={email}
        isReadOnly={true}
        focusBorderColor="accent"
        _hover={{backgroundColor: 'transparent'}}
      />
      <CustomButton
        {...props.btnattr}
        color="accent"
        rightIcon={false}
      >
        <a href={`mailto: ${email}`}> Sent email </a>
      </CustomButton>
    </Stack>
  )
}
