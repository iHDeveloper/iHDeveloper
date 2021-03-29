import { Component, Input, OnInit } from '@angular/core';

interface TerminalLogMessage {
    message: string;
    isCommand: boolean;
    username?: string;
    hostname?: string;
    path?: string;
}

@Component({
    selector: 'hd-terminal',
    templateUrl: './terminal.component.html',
    styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnInit {
    @Input('intro') isIntro: boolean = false;
    @Input() username = 'user';
    @Input() hostname = 'HD-Server';
    @Input() path = '~/myself';
    @Input() command?: string;

    logs: TerminalLogMessage[] = [];

    constructor() {}

    ngOnInit(): void {
        if (this.command) {
            this.execute(this.command);
        }
    }

    print(message: string): void {
        this.logs.push({
            message: message,
            isCommand: false
        });
    }

    execute(command: string): void {
        this.logs.push({
            message: command,
            username: this.username,
            hostname: this.hostname,
            path: this.path,
            isCommand: true
        });
    }
}
