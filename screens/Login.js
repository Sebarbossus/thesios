import React, { Component } from "react";
import {
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Alert
} from "react-native";

import { Button, Block, Input, Text } from "../components";
import { theme } from "../constants";

const STUDENT_EMAIL = "s@i.de";
const STUDENT_PASSWORD = "testpwd";

const PROF_EMAIL = "p@i.de";
const PROF_PASSWORD = "xd";

export default class Login extends Component {
  state = {
    email: "",
    password: "",
    errors: [],
    loading: false
  };

  static navigationOptions = {title: 'Anmeldung'};

  handleLogin() {
    const { navigation } = this.props;
    const { email, password } = this.state;
    const errors = [];

    Keyboard.dismiss();
    this.setState({ loading: true });

    // check with backend API or with some static data
    if (email === STUDENT_EMAIL && password === STUDENT_PASSWORD) {
      this.setState({ errors, loading: false });
      navigation.navigate("StudentDashboard");
    } else if (email === PROF_EMAIL && password === PROF_PASSWORD) {
      this.setState({ errors, loading: false });
      navigation.navigate("ProfDashboard")
    } else {
      this.setState({ errors, loading: false });
      Alert.alert("Ihre eingegebenen Daten sind nicht korrekt. Falls Sie einen neuen Benutzer anlegen möchten, wenden Sie sich bitte an die IT-Administration Ihrer Hochschule");
    }
  }

  render() {
    const { loading, errors } = this.state;
    const hasErrors = key => (errors.includes(key) ? styles.hasErrors : null);

    return (
      <KeyboardAvoidingView style={styles.login} behavior="height">
        <Block padding={[theme.sizes.base, theme.sizes.base * 2]}>
          <Text h1 bold>
            Anmeldung
          </Text>
          <Block middle>
            <Input
              label="Email"
              error={hasErrors("email")}
              style={[styles.input, hasErrors("email")]}
              defaultValue={""}
              onChangeText={text => this.setState({ email: text })}
            />
            <Input
              secure
              label="Passwort"
              error={hasErrors("password")}
              style={[styles.input, hasErrors("password")]}
              defaultValue={""}
              onChangeText={text => this.setState({ password: text })}
            />
            <Button gradient onPress={() => this.handleLogin()}>
              {loading ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <Text bold white center>
                  Anmelden
                </Text>
              )}
            </Button>
          </Block>
        </Block>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: "center"
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  hasErrors: {
    borderBottomColor: theme.colors.accent
  }
});