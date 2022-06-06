import Koa from "Koa";
import bodyParser from "koa-bodyparser";

export const useMiddlewares = <T extends Koa>(app: T): T => {
    app.use(bodyParser());

    return app;
};