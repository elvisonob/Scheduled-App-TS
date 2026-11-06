import { render, screen } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import Weather from './Weather';
import '@testing-library/jest-dom';

const handlers = [
  rest.get('https://api.weatherapi.com/v1/current.json', (req, res, ctx) => {
    return res(
      ctx.json({
        current: { feelslike_f: 32.7, humidity: 95, precip_in: 0 },
        location: { name: 'Glasgow' },
      }),
    );
  }),
];

const server = setupServer(...handlers);

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

test("renders data that's returned from API", async () => {
  render(<Weather />);

  expect(await screen.findByText('City: Glasgow')).toBeInTheDocument();
  expect(await screen.findByText('feelslike_f: 32.7')).toBeInTheDocument();
});
