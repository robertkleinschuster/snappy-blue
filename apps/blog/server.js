import * as build from "@remix-run/dev/server-build";
import {createRequestHandler} from "@remix-run/server-runtime";

export default createRequestHandler(build, process.env.NODE_ENV);
