import { Badge, Card, Group, Image, Stack, Text, Title, useMantineColorScheme, useMantineTheme } from "@mantine/core";
import { Plate } from "../model/model";
import { IconCirclePlus } from "@tabler/icons"
import { useState } from "react";
import { NewPlateModal } from "./Modals";
type PlateCardProps = {
  plate: Plate;
}

export function PlateCard(props: PlateCardProps) {
  const { plate } = props;
  const [isPlateModalOpen, setIsPlateModalOpen] = useState(false);
  return (
    <>
      <Card shadow="sm" p="lg" radius="md" withBorder py={9} px={11}
        sx={{
          cursor: 'pointer',
        }}
        onClick={() => setIsPlateModalOpen(true)}>
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

        <Text size="sm" color="dimmed" mb={11} lineClamp={2}>
          {plate.desc}
        </Text>

        <Group position="right" mt="md" >
          <Badge color="gray" variant="light" size="xl" px={20}>
            ${plate.price}
          </Badge>
        </Group>
      </Card>
      <NewPlateModal plate={plate} isOpen={isPlateModalOpen} setOpened={setIsPlateModalOpen} />
    </>
  )
}

export function EmptyCard() {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();
  const [isPlateModalOpen, setIsPlateModalOpen] = useState(false);
  const dark = colorScheme === 'dark';
  return (
    <>
      <Card shadow="sm" radius="md" withBorder
        sx={{
          cursor: 'pointer',
          background: dark ? theme.colors.dark[8] : theme.colors.gray[0],
        }}
        onClick={() => setIsPlateModalOpen(true)}>
        <Stack w='100%' h='100%' align='center' justify='center'>
          <IconCirclePlus size={150}
            fill={dark ? theme.colors.dark[6] : 'white'}
            color={dark ? theme.colors.dark[7] : theme.colors.gray[1]} />
        </Stack>
      </Card>
      <NewPlateModal isOpen={isPlateModalOpen} setOpened={setIsPlateModalOpen} />
    </>
  )
}