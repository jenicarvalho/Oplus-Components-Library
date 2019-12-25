import React from "react";
import TestRenderer from "react-test-renderer";
import Badge from "./Badge";

describe("Is the Badge component working?", () => {
  it("Is it rendering?", () => {
    TestRenderer.create(<Badge />);
  });
});
