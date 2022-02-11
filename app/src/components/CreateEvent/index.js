import { Button } from '@nextui-org/react';
import { Card, Text, Grid } from '@nextui-org/react';
import { Input, Spacer } from '@nextui-org/react';

const CreateEvent = () => {
  return (
    <div className="CreateEvent">
      <Spacer y={2.5} />

      <Card css={{ px: '$4' }}>
        <Text
          h1
          size={40}
          css={{
            textGradient: '45deg, $blue500 -20%, $pink500 50%',
          }}
          weight="bold"
        >
          Hei Jenny!
        </Text>
        <Text
          h1
          size={20}
          css={{
            textGradient: '45deg, $purple500 -20%, $pink500 100%',
          }}
          weight="bold"
        >
          Fynn inn feltene under for å opprette et arrangement.
        </Text>
      </Card>

      <Grid>
        <Spacer y={2.5} />
        <Input
          clearable
          underlined
          labelPlaceholder="Tittel"
          initialValue="..."
        />
        <Spacer y={2.5} />
        <Input
          clearable
          underlined
          labelPlaceholder="Sted"
          initialValue="..."
        />
        <Spacer y={2.5} />
        <Input clearable underlined labelPlaceholder="Tid" initialValue="..." />
        <Spacer y={2.5} />
      </Grid>

      <Grid.Container gap={2}>
        <Grid>
          <Input
            bordered
            labelPlaceholder="Arrangementbeskrivelse:"
            color="gradient"
          />
        </Grid>
        <Grid>
          <Button shadow color="gradient" auto>
            Opprett arrangmement
          </Button>
        </Grid>
      </Grid.Container>

      <Spacer y={2.5} />

      <Spacer y={2.5} />
    </div>
  );
};

export default CreateEvent;
