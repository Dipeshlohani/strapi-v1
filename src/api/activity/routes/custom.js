module.exports = {
  routes: [
    {
      method: "GET",
      path: "/activities/:slug", // Make sure to close the single quote and fix any typo
      handler: "activity.findOne", // Assuming this is the correct controller reference
      config: {
        auth: false,
      },
    },
  ],
};
