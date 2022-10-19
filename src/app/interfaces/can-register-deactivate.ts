import { Observable } from 'rxjs';

export interface CanRegisterDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}
