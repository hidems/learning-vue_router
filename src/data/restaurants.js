const restaurants = [
  {
    id: 1,
    name: 'BBQ Unleashed',
    rating: 4.5,
    review: 'Dayum good sauce! Praise the Lord Almighty!',
  },
  {
    id: 2,
    name: 'Apollo Restaurant',
    rating: 5,
    review:
      'True quality meets true gluttony! They recommend you buy a soda to offset the price of meats!',
  },
  {
    id: 3,
    name: "Nick's Pizza",
    rating: 3.5,
    review:
      "Very bready pizza, which means it's filling, but you're going to need a beverage to swallow it down!",
  },
  {
    name: 'Good Burger',
    rating: 1,
    review: 'Home of the good burger, can I take your order?',
    id: 4,
  },
];


/**
 * Fetches restaurants asynchronously.
 *
 * @returns {Restaurant[]>} An array of restaurants.
 * @throws {Error} If the restaurants couldn't be fetched.
 */
export const fetchRestaurants = async () => {

  await sleep(1000);

  if (Math.random() < 0.5) {
    throw new Error('Could not fetch restaurants!');
  }

  return restaurants;
}

/**
 * Sleeps for a specified number of milliseconds.
 *
 * @param {number} ms - The number of milliseconds to sleep.
 * @returns {void} A promise that resolves after the specified delay.
 */
const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
}