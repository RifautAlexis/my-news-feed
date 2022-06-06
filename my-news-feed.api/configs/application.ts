import Koa from "Koa";
import { useContainer, useKoaServer } from "routing-controllers";
import Container from "typedi";
import { useMiddlewares } from "./koa.middlewares";
import { routingConfigs } from "./routing.options";
import 'reflect-metadata'

const createServer = async (): Promise<Koa> => {
    const koa: Koa = new Koa();

    useMiddlewares<Koa>(koa);

    useContainer(Container);
    
    const app: Koa = useKoaServer<Koa>(koa, routingConfigs);

    return app;
};

export default createServer;