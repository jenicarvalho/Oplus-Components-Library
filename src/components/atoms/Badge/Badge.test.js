import React from "react";
import TestRenderer from "react-test-renderer";
import Badge from "./Badge";

describe("Is the Badge component working?", () => {
  it("Is it rendering?", () => {
    TestRenderer.create(<Badge />);
  });
  it("It is rendering with custom text?", () => {
    TestRenderer.create(<Badge badgeText="Custom text" />);
  });
  it("Is it rendering with custom color and textColor?", () => {
    TestRenderer.create(<Badge badgeColor="red" badgeTextColor="#ddd" />);
  });
});
