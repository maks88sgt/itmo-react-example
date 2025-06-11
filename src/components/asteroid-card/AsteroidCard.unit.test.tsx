import { fireEvent, render, screen } from "@testing-library/react";
import { AsteroidCard } from "./AstroidCard";
import asteroidService from "../../services/AsteroidsService";

jest.mock("../../lib/config", () => ({
  config: {
    SECRET_KEY: process.env.SECRET_KEY || "DEMO_KEY",
    GET_REAL_ASTEROIDS: process.env.GET_REAL_ASTEROIDS,
  },
}));

const mockAsteroid = asteroidService.createAsteroid();

describe("[COMPONENT] AsteroidCard", () => {
  test("Should render basic props", () => {
    render(
      <AsteroidCard
        {...mockAsteroid}
        handleAddToDestroyment={() => null}
        isKilometers={true}
        navigateTo={() => null}
      />
    );
    expect(screen.getByText(mockAsteroid.name).innerHTML).toEqual(mockAsteroid.name);
    expect(screen.getByText(mockAsteroid.date).innerHTML).toEqual(mockAsteroid.date);
  });
   test("Should render 'опасен' if asteroid dangerous", () => {
    render(
      <AsteroidCard
        {...mockAsteroid}
        isDangerous={true}
        handleAddToDestroyment={() => null}
        isKilometers={true}
        navigateTo={() => null}
      />
    );
    expect(screen.getByText('опасен')).not.toContain("не");
    expect(screen.getByTestId("AsteroidCard").classList.contains("dangerous")).toBeTruthy();

  });
  test("Click on card should navigate to page", () => {
    const navigateTo = jest.fn()
    render(
      <AsteroidCard
        {...mockAsteroid}
        handleAddToDestroyment={() => null}
        isKilometers={true}
        navigateTo={()=>navigateTo(mockAsteroid.id)}
      />
    );
    const name = screen.getByText(mockAsteroid.name)
    fireEvent.click(name)
    expect(navigateTo).toHaveBeenCalled();
    expect(navigateTo).toHaveBeenCalledWith(mockAsteroid.id);
  });
});
