import { environment } from '../../../environments/environment';

export function jwtOptionsFactory() {
  return {
    whitelistedDomains: [environment.apiHost],
    blacklistedRoutes: [/.*\/auth\/(?!logout).*/],
    tokenGetter: () => localStorage.getItem('access_token') || null
  };
}
