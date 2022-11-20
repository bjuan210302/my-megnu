import { Badge, Button, Card, Group, Image, Text, Title } from "@mantine/core";

export function PlateCard(props: any) {
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder py={9} px={11} >
      <Image radius='md'
        src="https://cdn.colombia.com/gastronomia/2014/01/27/postre-de-gelatina-y-crema-de-leche-3430.jpg"
        height={121}
        mb={11}
      />

      <Title weight={700} size={22} mb={6}>Vasito</Title>

      <Text size="sm" color="dimmed" mb={11}>
        Akams ansn jsjadnzn askdj wk kanz nalnaln lancmcn nan mcnsjdn nsnmz nasjsndjnjk an ajnsndj ayzyty
      </Text>

      <Group position="right" mt="md" >
        <Badge color="gray" variant="light" size="xl" px={20}>
          $20.00
        </Badge>
      </Group>
    </Card>
  )
}