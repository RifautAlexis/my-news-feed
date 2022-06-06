import createServer from "./configs/application";
import { Server } from "http";
import CONSTANTS from "./configs/constants";
import { bootstrapAfter } from "./configs/bootstrap";

module.exports = (async (): Promise<Server> => {

  try {
    const app = await createServer();

    return app.listen(CONSTANTS.PORT, () => {
      console.log(`server listening on ${CONSTANTS.PORT}, in ${CONSTANTS.ENV_LABEL} mode`);
      bootstrapAfter();
    });
  } catch (error) {
    console.log(error);
  }
})();
