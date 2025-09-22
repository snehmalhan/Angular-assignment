import { InjectionToken } from '@angular/core';
import { Notyf } from 'notyf';

export const NOTYF = new InjectionToken<Notyf>('NotyfToken');

export function notyfFactory(): Notyf {
  return new Notyf({
    duration: 5000, // Set your global Notyf configuration here
    dismissible: true,
    position: { x: 'right', y: 'top'},
    types: [
      {
        type: 'info',
        background: 'orange',
        position: { x: 'center', y: 'top'},
        icon: false
      }
    ]
  });
}