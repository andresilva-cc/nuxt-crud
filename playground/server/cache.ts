import { caching } from 'cache-manager';

export const memoryCache = await caching('memory');
