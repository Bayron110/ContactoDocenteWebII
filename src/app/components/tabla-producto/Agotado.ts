import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
    selector: '[appAgotado]',
    standalone: true
})
export class AgotadoDirective {
    private agotado = false;

    constructor(private el: ElementRef, private renderer: Renderer2) { }

    @HostListener('click')
    marcarAgotado() {
        if (!this.agotado) {
            this.agotado = true;

            this.renderer.setStyle(this.el.nativeElement, 'position', 'relative');
            this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', '#fee2e2');
            this.renderer.setStyle(this.el.nativeElement, 'opacity', '0.7');
            this.renderer.setStyle(this.el.nativeElement, 'cursor', 'not-allowed');

            const agotadoLabel = this.renderer.createElement('div');
            this.renderer.setStyle(agotadoLabel, 'position', 'absolute');
            this.renderer.setStyle(agotadoLabel, 'top', '0');
            this.renderer.setStyle(agotadoLabel, 'left', '0');
            this.renderer.setStyle(agotadoLabel, 'width', '100%');
            this.renderer.setStyle(agotadoLabel, 'backgroundColor', '#dc2626');
            this.renderer.setStyle(agotadoLabel, 'color', 'white');
            this.renderer.setStyle(agotadoLabel, 'textAlign', 'center');
            this.renderer.setStyle(agotadoLabel, 'padding', '4px');
            this.renderer.setStyle(agotadoLabel, 'fontWeight', 'bold');
            this.renderer.setProperty(agotadoLabel, 'innerText', 'AGOTADO');
            this.renderer.appendChild(this.el.nativeElement, agotadoLabel);
        }
    }
}
