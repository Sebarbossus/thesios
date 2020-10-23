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

const STUDENT_EMAIL = "student@iubh-fernstudium.de";
const STUDENT_PASSWORD = "testpwd";

const PROF_EMAIL = "prof@iubh-fernstudium.de";
const PROF_PASSWORD = "supertest!";

export default class Login extends Component {
  state = {
    email: "",
    password: "",
    errors: [],
    loading: false
  };

  handleLogin() {
    const { navigation } = this.props;
    const { email, password } = this.state;
    const errors = [];

    Keyboard.dismiss();
    this.setState({ loading: true });

    // check with backend API or with some static data
    if (email !== (STUDENT_EMAIL || PROF_EMAIL)) {
        Alert.alert("1");
      errors.push("email");
    }

    if (password !== (STUDENT_PASSWORD || PROF_PASSWORD) ) {
        Alert.alert("2");
      errors.push("password");
    }

    this.setState({ errors, loading: false });

    if (!errors.length) {
        navigation.navigate("StudentDashboard");
        if (email === STUDENT_EMAIL) {navigation.navigate("StudentDashboard")}
        if (email === PROF_EMAIL) {navigation.navigate("ProfDashboard")}
    }
  }

  render() {
    const { navigation } = this.props;
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

            {/* TODO: Implement later on */}
            {/* <Button onPress={() => navigation.navigate("Forgot")}>
              <Text
                gray
                caption
                center
                style={{ textDecorationLine: "underline" }}
              >
                Passwort vergessen?
              </Text>
            </Button> */}
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