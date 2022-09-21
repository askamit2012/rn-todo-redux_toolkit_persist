// export const increment = (number) => {
//   return {
//     type: "INCREMENT",
//     payload: number,
//   };
// };

// export const decrement = (number) => {
//   return {
//     type: "DECREMENT",
//     payload: number,
//   };
// };

export const decrement = () => ({ type: "DECREMENT" });

export const increment = () => ({ type: "INCREMENT" });
