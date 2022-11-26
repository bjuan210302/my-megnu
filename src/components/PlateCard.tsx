import { Badge, Button, Card, Group, Image, Text, Title } from "@mantine/core";
import { Plate } from "../model/model";

type PlateCardProps = {
  plate: Plate;
}

export function PlateCard(props: PlateCardProps) {
  const { plate } = props;
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder py={9} px={11}>
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