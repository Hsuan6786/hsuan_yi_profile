import { HStack, Circle, Image, Link, Box } from '@chakra-ui/react'
import Icon104 from '/public/assets/icon-light-104.svg'
import IconBehance from '/public/assets/icon-light-behance.svg'
import IconMail from '/public/assets/icon-light-mail.svg'
import IconCake from '/public/assets/icon-light-cakeresume.svg'
import { contacts } from '@/config/data'

export default function SocialMediaLinks({
  justifyContent = 'center',
  socialMedias,
  size,
  ...others
}) {
  const defaultContacts = ['104', 'cakeresume', 'behance', 'mail']

  return (
    <HStack
      {...others}
      justifyContent={justifyContent}
    >
      {(socialMedias || defaultContacts).map(
        (i, idx) =>
          contacts[i] && (
            <Link
              key={`media-${idx}`}
              color="white"
              target="_blank"
              href={contacts[i].to}
            >
              <Circle
                size={size || '32px'}
                bg="black"
                color="white"
                p="xxs"
              >
                <Image src={contacts[i].icon} />
              </Circle>
            </Link>
          )
      )}
    </HStack>
  )
}
