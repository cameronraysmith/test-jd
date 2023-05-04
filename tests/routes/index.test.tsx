import { render, screen, within } from "@solidjs/testing-library";
import { expect, test } from "vitest";
import Home from "~/routes/index";
import { trpc } from "~/utils/trpc";
import { QueryClient } from "@tanstack/solid-query";
import { Router } from "@solidjs/router";

const queryClient = new QueryClient();

describe("Home", () => {
  beforeEach(() => {
    render(() => (
      <trpc.Provider queryClient={queryClient}>
        <Router>
          <Home />
        </Router>
      </trpc.Provider>
    ));
  });

  test("renders the app", () => {
    const h1 = screen.getByRole("heading", { level: 1 });
    expect(within(h1).getByText((_, element) => element.textContent.includes('Create'))).toBeInTheDocument();
    expect(
      within(h1).getByText((_, element) => element.textContent.trim() === "JD")
    ).toBeInTheDocument();
    expect(within(h1).getByText((_, element) => element.textContent.includes('App'))).toBeInTheDocument(); 
  });

  test("renders the correct links", () => {
    expect(screen.getByText("Solid Start →")).toBeInTheDocument();
    expect(screen.getByText("JD End →")).toBeInTheDocument();
  });

  test('renders the tRPC query', async () => {
    // Replace this with your actual tRPC query result or a mock
    const queryResult = 'Loading tRPC query';

    // Wait for the tRPC query result to appear in the DOM
    const queryTextElement = await screen.findByText(queryResult);

    // Check if the tRPC query result is rendered correctly
    expect(queryTextElement).toBeInTheDocument();
  });
});
