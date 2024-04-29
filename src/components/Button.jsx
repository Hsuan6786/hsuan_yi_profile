import { Button as ChakraBtn, Icon, Image } from '@chakra-ui/react'
import { useMemo } from 'react'
import ArrowIcon from '/public/assets/icon-arrow_open.svg'
import SvgIcon from '@/components/SvgIcon'

export default function Button(props) {
  const { rightIcon = true} = props;
  const btnRightIcon = rightIcon? (
    <SvgIcon
      name="arrow_open"
    />
  ) : null

  const roundedStyle = {
    borderRadius: '100vmax',
  }
  const types = {
    outline: {
      border: '1.5px solid',
      borderColor: props.color,
      _hover: { bg: props.color, color: '#fff' },
    },
    solid: {
      bg: props.color,
      color: props.textColor || 'white',
      _hover: { bg: 'black', color: '#fff' },
    },
  }

  const getStyles = useMemo(() => {
    const variant = props.variant || 'solid'
    let styles = types[variant] || {}
    if (props.rounded) {
      styles = {
        ...styles,
        ...roundedStyle,
      }
    }
    return styles
  }, [props])

  return (
    <ChakraBtn
      px={'xl'}
      py="xs"
      textStyle={'content'}
      h={'auto'}
      {...props}
      {...getStyles}
      rightIcon={btnRightIcon}
    >
      {props.label}
    </ChakraBtn>
  )
}
