const { captureException } = require("@sentry/serverless");
captureException(new Error("test"));
