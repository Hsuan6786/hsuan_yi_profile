import { HStack, Circle, Image, Link, Box } from '@chakra-ui/react'
import Icon104 from '/public/assets/icon-light-104.svg'
import IconBehance from '/public/assets/icon-light-behance.svg'
import IconMail from '/public/assets/icon-light-mail.svg'
import IconCake from '/public/assets/icon-light-cakeresume.svg'

export default function SocialMediaLinks({
  justifyContent = 'center',
  socialMedias,
  size,
  ...others
}) {
  const defaultPlatforms = ['104', 'cakeresume', 'behance', 'mail']

  const platforms = {
    104: {
      icon: Icon104,
      to: '',
    },
    cakeresume: {
      icon: IconCake,
      to: '',
    },
    behance: {
      icon: IconBehance,
      to: '',
    },
    mail: {
      icon: IconMail,
      to: '',
    },
  }
  return (
    <HStack
      {...others}
      justifyContent={justifyContent}
    >
      {(socialMedias || defaultPlatforms).map(
        (i, idx) =>
          platforms[i] && (
            <Link
              key={`media-${idx}`}
              color="white"
              href="#"
            >
              <Circle
                size={size || '32px'}
                bg="black"
                color="white"
                p="xxs"
              >
                <Image src={platforms[i].icon} />
              </Circle>
            </Link>
          )
      )}
    </HStack>
  )
}
