import React from "react";
import TestRenderer from "react-test-renderer";
import Card from "./Card";

describe("Is the Card component working?", () => {
  it("Is it rendering with content?", () => {
    TestRenderer.create(<Card>conteúdo</Card>);
  });
});
