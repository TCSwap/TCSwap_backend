import { handlerPath } from '@libs/handlerResolver';
// import schema from './schema';

/**
 * Will not compile with 2 path parameters,
 * moving parameters to the body since this is a post request
 * check schema
 */

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'post',
        cors: true,
        path: 'offers/accept',
        request: {
          schema: null,
        },
      }
    }
  ],
}
