import React from "react";
import TestRenderer from "react-test-renderer";
import Logo from "./Logo";

describe("Is the Logo component working?", () => {
  it("Is it rendering?", () => {
    TestRenderer.create(<Logo />);
  });
  it("Is it rendering in white version?", () => {
    TestRenderer.create(<Logo white />);
  });
});
