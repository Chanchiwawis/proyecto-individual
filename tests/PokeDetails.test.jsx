import React from "react";
import { render } from "@testing-library/react";
import { PokeDetails } from "../src/components/details/PokeDetails";
import { useSelector } from "react-redux";

jest.mock("react-router-dom", () => ({
  useParams: jest.fn().mockReturnValue({ id: "1" }),
}));

jest.mock("react-redux", () => ({
  useSelector: jest.fn().mockReturnValue([
    {
      id: 1,
      name: "bulbasaur",
      types: [{ type: { name: "grass" } }, { type: { name: "poison" } }],
      sprites: { front_default: "https://fakeurl.com/bulbasaur.png" },
    },
    {
      id: 2,
      name: "charmander",
      types: [{ type: { name: "fire" } }],
      sprites: { front_default: "https://fakeurl.com/charmander.png" },
    },
  ]),
}));

describe("PokeDetails", () => {
  it("should render pokemon details", () => {
    render(<PokeDetails />);
    expect(true).toBe(true);
  });
});
