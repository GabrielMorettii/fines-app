import express from "express";

import { userRouter } from "./UserRouter";
import { fineRouter } from "./FineRouter";

const mainRouter = express.Router();

mainRouter.use('/users', userRouter);
mainRouter.use('/fines', fineRouter);

mainRouter.use((request, response) => {
  response.status(404).json({
    message: "Not Found!"
  });
});

export { mainRouter };
