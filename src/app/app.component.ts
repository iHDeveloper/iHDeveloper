import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { TerminalComponent } from './terminal/terminal.component';

@Component({
    selector: 'hd-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
    @ViewChild('introTerminal') intro?: TerminalComponent;

    ngAfterViewInit(): void {
        if (this.intro) {
            this.intro.print('Last Login: ' + new Date());
            this.intro.execute('whoami');
        }
    }
}
