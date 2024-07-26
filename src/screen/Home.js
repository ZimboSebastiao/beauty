import { View, StyleSheet } from "react-native";
import React from "react";
import SafeContainer from "../components/SafeContainer";

import { Avatar, Button, Card, Text } from "react-native-paper";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

export default function Home({ navigation }) {
  return (
    <SafeContainer>
      <Text>Home</Text>
      <View>
        <Card>
          <Card.Title
            title="Card Title"
            subtitle="Card Subtitle"
            left={LeftContent}
          />
          <Card.Content>
            <Text variant="titleLarge">Card title</Text>
            <Text variant="bodyMedium">Card content</Text>
          </Card.Content>
          <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>
      </View>
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
  cartao: {
    backgroundColor: "red",
  },
});
