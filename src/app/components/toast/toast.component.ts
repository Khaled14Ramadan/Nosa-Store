import { Component,  TemplateRef } from '@angular/core';
import { ToastServiceService } from './../../services/toast-service.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  host: { class: 'toast-container position-fixed bottom-0 end-0 p-3', style: 'z-index: 3000' },
})
export class ToastComponent {

  constructor(public toastService: ToastServiceService) {}

	isTemplate(toast:any) {
		return toast.textOrTpl instanceof TemplateRef;
	}

}
