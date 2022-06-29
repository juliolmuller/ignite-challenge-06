import { Stack, Text } from '@chakra-ui/react';

export interface HighlightValueProps {
  label: string;
  value: number | string;
}

export function HighlightValue({ label, value }: HighlightValueProps) {
  return (
    <Stack align="center" spacing="0">
      <Text
        color="brand.highlight"
        fontSize={['2xl', '3xl', '4xl', '5xl']}
        fontWeight="semibold"
        lineHeight="1.2"
        align="center"
      >
        {value}
      </Text>

      <Text
        fontSize={['lg', 'lg', 'xl', '2xl']}
        fontWeight="semibold"
        align="center"
      >
        {label}
      </Text>
    </Stack>
  );
}
