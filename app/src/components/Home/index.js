import { Text } from '@nextui-org/react';

const Home = () => {
  return (
    <>
      <Text
        h1
        size={60}
        css={{
          textGradient: '45deg, $blue500 -20%, $pink500 50%',
        }}
        weight="bold"
      >
        Velkommen
      </Text>
      <Text
        h1
        size={60}
        css={{
          textGradient: '45deg, $purple500 -20%, $pink500 100%',
        }}
        weight="bold"
      >
        Til
      </Text>
      <Text
        h1
        size={60}
        css={{
          textGradient: '45deg, $yellow500 -20%, $red500 100%',
        }}
        weight="bold"
      >
        GroupUp
      </Text>
    </>
  );
};

export default Home;
