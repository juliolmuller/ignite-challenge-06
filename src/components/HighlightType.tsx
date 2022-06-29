import {
  CSSObject,
  Img,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

export interface HighlightTypeProps {
  iconSrc: string;
  title: string;
}

export function HighlightType({ iconSrc, title }: HighlightTypeProps) {
  const isMdDisplay = useBreakpointValue({ base: false, md: true });
  const beforeCSS: CSSObject = {
    content: '" "',
    transform: 'translateY(-50%)',
    pos: 'absolute',
    top: '50%',
    left: '-6',
    height: '2',
    width: '2',
    borderRadius: '50%',
    bg: 'brand.highlight',
  };

  return (
    <Stack align="center" spacing="6" w="40">
      {isMdDisplay && <Img src={iconSrc} alt={title} h={85} />}

      <Text
        pos="relative"
        w="fit-content"
        fontSize="2xl"
        fontWeight={['medium', 'medium', 'semibold']}
        align="center"
        _before={isMdDisplay ? undefined : beforeCSS}
      >
        {title}
      </Text>
    </Stack>
  );
}
