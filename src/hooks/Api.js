const infos = [
//   {
//     name: "vic",
//     title: "stem",
//     description: "A very cool profile",
//   },
//   {
//     name: "mike",
//     title: "lag",
//     description: "A very cool place",
//   },
//   {
//     name: "presh",
//     title: "cope",
//     description: "A very cool person",
//   },
];

export const getData = () => {
  if (!!infos) {
    const error = { message: "SERVER-SIDE--TIMEOUT", statusCode: 500 };
    // throw new Error("SERVER-SIDE--TIMEOUT");
    throw error;
  }

  return infos;
};
