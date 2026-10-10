
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import ProductCard from "../ProductCard";

const product = {
  id: 1,
  name: "Mechanical Keyboard",
  price: 79.99,
  image: "/keyboard.jpg",
  description: "A comfortable mechanical keyboard.",
};

describe("ProductCard", () => {
  it("displays the product information", () => {
    render(
      <MemoryRouter>
        <ProductCard product={product} onAddToCart={vi.fn()} />
      </MemoryRouter>
    );

    expect(screen.getByText("Mechanical Keyboard")).toBeInTheDocument();
    expect(screen.getByText("$79.99")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Add to Cart" })).toBeInTheDocument();
  });

  it("calls onAddToCart when the button is clicked", async () => {
    const user = userEvent.setup();
    const onAddToCart = vi.fn();

    render(
      <MemoryRouter>
        <ProductCard product={product} onAddToCart={onAddToCart} />
      </MemoryRouter>
    );

    await user.click(screen.getByRole("button", { name: "Add to Cart" }));

    expect(onAddToCart).toHaveBeenCalledWith(product);
  });
});
