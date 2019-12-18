import React from "react";
import TestRenderer from "react-test-renderer";
import Button from "./Button";

describe("Is the Button component working?", () => {
  it("Is it rendering?", () => {
    TestRenderer.create(<Button />);
  });
});
