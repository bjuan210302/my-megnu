import { Badge, Card, Group, Image, Stack, Text, Title, useMantineColorScheme, useMantineTheme } from "@mantine/core";
import { Plate } from "../model/model";
import { IconCirclePlus } from "@tabler/icons"
import { MouseEventHandler } from "react";
type PlateCardProps = {
  plate: Plate;
}

export function PlateCard(props: PlateCardProps) {
  const { plate } = props;
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder py={9} px={11}
      sx={{
        cursor: 'pointer',
      }}>
      <Image radius='md'
        src={plate.img}
        height={121}
        width='100%'
        mb={11}
        sx={{
          border: '1px solid rgba(0, 0, 0, 0.1)',
          borderRadius: '8px',
        }}
      />

      <Title order={3} weight={700} size={22} mb={6}>
        {plate.name}
      </Title>

      <Text size="sm" color="dimmed" mb={11}>
        {plate.desc}
      </Text>

      <Group position="right" mt="md" >
        <Badge color="gray" variant="light" size="xl" px={20}>
          ${plate.price}
        </Badge>
      </Group>
    </Card>
  )
}

export function EmptyCard(props: { onClick: MouseEventHandler<HTMLDivElement> }) {
  const theme = useMantineTheme();
  const { onClick } = props;
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';
  return (
    <Card shadow="sm" radius="md" withBorder
      sx={{
        cursor: 'pointer',
        background: dark ? theme.colors.dark[8] : theme.colors.gray[0],
      }}
      onClick={onClick}>
      <Stack w='100%' h='100%' align='center' justify='center'>
        <IconCirclePlus size={150}
          fill={dark ? theme.colors.dark[6] : 'white'}
          color={dark ? theme.colors.dark[7] : theme.colors.gray[1]} />
      </Stack>
    </Card>
  )
}