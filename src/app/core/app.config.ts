import { InjectionToken } from '@angular/core';
import { MatSnackBarConfig } from '@angular/material';

export const APP_CONFIG = new InjectionToken('app.config');

export interface AppConfig {
  defaultLanguage: string;

  snackBar: MatSnackBarConfig;
}

export const APP_DI_CONFIG: AppConfig = {
  defaultLanguage: 'he',

  snackBar: { duration: 6000 }
};
