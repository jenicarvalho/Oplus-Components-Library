import React from "react";
import TestRenderer from "react-test-renderer";
import NavLinks from "./NavLinks";

describe("Is the NavLinks component working?", () => {
  it("Is it rendering?", () => {
    TestRenderer.create(<NavLinks />);
  });
});
