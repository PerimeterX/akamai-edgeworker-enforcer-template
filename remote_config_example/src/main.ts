import {
    createHumanSecurityResponseProvider,
    createHumanSecurityOnClientRequest,
    createHumanSecurityOnClientResponse,
} from '@humansecurity/akamai-edgeworker-enforcer/worker';
import { customFunctions } from './customFunctions';
// @ts-ignore
import { EdgeKV } from './edgekv.js';

const edgeKVClient = new EdgeKV();

export const onClientRequest = createHumanSecurityOnClientRequest(customFunctions, edgeKVClient);

export const onClientResponse = createHumanSecurityOnClientResponse(customFunctions);

export const responseProvider = createHumanSecurityResponseProvider(customFunctions, edgeKVClient);
