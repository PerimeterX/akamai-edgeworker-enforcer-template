import {
    createHumanSecurityResponseProvider,
    createHumanSecurityOnClientRequest,
    createHumanSecurityOnClientResponse,
} from '@humansecurity/akamai-edgeworker-enforcer/worker';
import { customFunctions } from './customFunctions';

export const onClientRequest = createHumanSecurityOnClientRequest(customFunctions);

export const onClientResponse = createHumanSecurityOnClientResponse(customFunctions);

export const responseProvider = createHumanSecurityResponseProvider(customFunctions);
