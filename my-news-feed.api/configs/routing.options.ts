import { join } from "path";
import { RoutingControllersOptions } from "routing-controllers";

export const routingConfigs: RoutingControllersOptions = {
    controllers: [
        join(__dirname, `../app/controllers/*.ts`)
    ],
    // interceptors: ,
    // middlewares: ,
    routePrefix: '/api',
    validation: true,
}