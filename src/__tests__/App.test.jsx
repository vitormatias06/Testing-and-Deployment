import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, beforeEach, vi } from "vitest";
import App from "../App";

describe("App", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.restoreAllMocks();
  });

  it("renders the store name and navigation", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { level: 1, name: "MatiasTech" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Products" })).toBeInTheDocument();
  });

  it("loads the cart from localStorage", async () => {
    localStorage.setItem(
      "cart",
      JSON.stringify([
        { id: 1, name: "Mechanical Keyboard", price: 79.99 },
        { id: 2, name: "Gaming Mouse", price: 49.99 },
      ]),
    );

    render(<App />);

    expect(screen.getByText("2")).toBeInTheDocument();
  });

  it("saves the cart to localStorage when a product is added", async () => {
    const user = userEvent.setup();

    render(<App />);

    await user.click(screen.getByRole("link", { name: "Products" }));

    const addButtons = await screen.findAllByRole("button", {
      name: "Add to Cart",
    });

    await user.click(addButtons[0]);

    await waitFor(() => {
      const savedCart = JSON.parse(localStorage.getItem("cart"));
      expect(savedCart).toHaveLength(1);
      expect(savedCart[0].name).toBe("Mechanical Keyboard");
    });
  });
});
