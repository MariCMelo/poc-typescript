function notFound(resource: string = "Item"): {
  type: string;
  message: string;
} {
  return {
    type: "notFound",
    message: `${resource} not found!`,
  };
}
function wrongData() {
  return {
      type: "wrongData",
      message: `The fields are wrong!`
  }
}

export const errors = { notFound, wrongData };
