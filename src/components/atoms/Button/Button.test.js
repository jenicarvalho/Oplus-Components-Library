import React from "react";
import TestRenderer from "react-test-renderer";
import Button from "./Button";

describe("Is the Button component working?", () => {
  it("Is it rendering?", () => {
    TestRenderer.create(<Button />);
  });
  it("It is rendering with custom text?", () => {
    TestRenderer.create(<Button buttonText="Custom text" />);
  });
  it("Is it rendering with custom buttonColor?", () => {
    TestRenderer.create(<Button buttonColor="red" />);
  });
});
