import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-confirmation-modal',
  standalone: true,
  template: `
    @if (isOpen) {
      <!-- Backdrop -->
      <div 
        class="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        (click)="onCancel()"
      >
        <!-- Modal -->
        <div 
          class="bg-slate-800 rounded-2xl shadow-2xl max-w-md w-full border border-slate-700 overflow-hidden"
          (click)="$event.stopPropagation()"
        >
          <!-- Header -->
          <div class="p-6 border-b border-slate-700">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                <svg class="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-bold text-white mb-1">{{ title }}</h3>
                <p class="text-gray-400 text-sm">{{ message }}</p>
              </div>
            </div>
          </div>

          <!-- Body (optional product preview) -->
          @if (itemPreview) {
            <div class="p-4 bg-slate-900/50">
              <div class="flex items-center gap-3">
                <img 
                  [src]="itemPreview.imageUrl" 
                  [alt]="itemPreview.title"
                  class="w-16 h-16 object-cover rounded-lg"
                />
                <div>
                  <p class="text-white font-medium">{{ itemPreview.title }}</p>
                  <p class="text-gray-400 text-sm">{{ itemPreview.categoryLabel }}</p>
                  <p class="text-blue-400 text-sm font-semibold">\${{ itemPreview.price }}</p>
                </div>
              </div>
            </div>
          }

          <!-- Actions -->
          <div class="p-6 flex gap-3">
            <button
              (click)="onCancel()"
              class="flex-1 px-4 py-3 rounded-lg bg-slate-700 hover:bg-slate-600 text-white font-medium transition"
            >
              {{ cancelText }}
            </button>
            <button
              (click)="onConfirm()"
              class="flex-1 px-4 py-3 rounded-lg bg-red-600 hover:bg-red-700 text-white font-medium transition"
            >
              {{ confirmText }}
            </button>
          </div>
        </div>
      </div>
    }
  `
})
export class ConfirmationModal {
  @Input() isOpen = false;
  @Input() title = 'Confirm Action';
  @Input() message = 'Are you sure you want to proceed?';
  @Input() confirmText = 'Confirm';
  @Input() cancelText = 'Cancel';
  @Input() itemPreview?: any;
  
  @Output() confirm = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  onConfirm() {
    this.confirm.emit();
  }

  onCancel() {
    this.cancel.emit();
  }
}