function notFound(resource: string = "Item"): {
  type: string;
  message: string;
} {
  return {
    type: "notFound",
    message: `${resource} not found!`,
  };
}

export const errors = { notFound };
