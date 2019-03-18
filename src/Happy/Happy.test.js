import React from "react";
import renderer from "react-test-renderer";
import { Happy } from "..";

it("renders correctly", () => {
  const tree = renderer.create(<Happy value="akram" />).toJSON();
  expect(tree).toMatchSnapshot();
});
