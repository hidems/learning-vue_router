import { createMachine, assign } from "xstate";
import { fetchRestaurants } from "@/data/restaurants.js";

const fetchMachine = createMachine({
  id: "fetch",
  initial: "initial",
  context: {
    restaurants: undefined,
    error: undefined
  },
  states: {
    initial: {
      on: {
        FETCH: {
          target: 'loading',
        },
      },
    },
    ready: {
      on: {
        FETCH: 'loading',
      },
    },
    loading: {
      entry: assign({
        restaurants: (context) => context.restaurants || [],
        error: () => undefined
      }),
      invoke: {
        id: "getRestaurants",
        src: () => fetchRestaurants(),
        onDone: {
          target: "success",
          actions: assign({
            restaurants: (_context, event) => event.data
          })
        },
        onError: {
          target: "failure",
          actions: assign({
            restaurants: () => undefined,
            error: (_context, event) => event.data
          })
        }
      }
    },
    success: {
      after: {
        2500: 'ready',
      },
    },
    failure: {
      on: {
        RETRY: 'loading',
      },
    },
  }
});

export default fetchMachine;