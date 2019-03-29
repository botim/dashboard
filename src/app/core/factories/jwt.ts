import { environment } from '../../../environments/environment';

import { TOKEN_STORAGE_KEY } from '../consts';

export function jwtOptionsFactory() {
  return {
    whitelistedDomains: [environment.apiHost],
    blacklistedRoutes: [/.*\/auth\/(?!logout).*/],
    tokenGetter: () => localStorage.getItem(TOKEN_STORAGE_KEY) || null
  };
}
