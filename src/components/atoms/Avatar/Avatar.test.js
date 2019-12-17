import React from "react";
import TestRenderer from "react-test-renderer";
import Avatar from "./Avatar";

describe("Is the Avatar component working?", () => {
  const imageUrl = "https://randomuser.me/api/portraits/men/20.jpg";

  it("Is it rendering with image default?", () => {
    TestRenderer.create(<Avatar src={imageUrl} />);
  });
  it("Is it rendering with custom height and width?", () => {
    TestRenderer.create(<Avatar height="60px" width="60px" />);
  });
});
