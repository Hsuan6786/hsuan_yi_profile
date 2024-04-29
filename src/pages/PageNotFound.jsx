import { Image, Text, Box } from "@chakra-ui/react";
import CustomButton from '@/components/Button'
import {useNavigate} from 'react-router-dom'


export default function ErrorPage() {
  const navigate = useNavigate() 

  return (
    <Box pt={'5xl'} textAlign="center">
      <Image src="assets/illustration-404.svg" />
      <Text my="2xl" textStyle={'h3'}>
      page not found...
      </Text>
      <CustomButton
        variant="outline"
        rightIcon={true}
        label="Back Home"
        color="accent"
        onClick={()=> navigate('/')}
      />
    </Box>
  );
}