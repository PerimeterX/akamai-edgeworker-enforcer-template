# HUMAN Security Akamai EdgeWorker Enforcer Template

See the full official documentation for the Human Security Akamai EdgeWorker Enforcer [here]().

1. Install dependencies with `npm install`.
2. Configure the enforcer by modifying the `enforcerConfig.json` file.
3. Configure any custom functions by modifying the `src/customFunctions.ts` file, if needed.
4. Compile the worker with `npm run build:worker`.
5. Configure the Akamai details by modifying the `akamaiConfig.json`. It should contain the following fields:
   - The `edgeworker_id` should be the ID associated with the EdgeWorker you will upload to (e.g., 12345).
   - The `netstorage_cp_code` should be the content provider code associated with the NetStorage account to which the HUMAN static files will be added (e.g., 1234567).
   - The `netstorage_download_domain` should be the download domain name associated with the NetStorage account where the HUMAN static files will be added (e.g., example.download.akamai.com).
6. Generate Property Manager and NetStorage deployment files with `npm run build:akamai`.