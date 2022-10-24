import { Observable } from 'rxjs';

export interface CanRegisterDeactivate {
    isConfirmLeave: () => Observable<boolean> | Promise<boolean> | boolean;
}
