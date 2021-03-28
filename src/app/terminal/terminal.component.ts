import { Component, OnInit } from '@angular/core';

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
    username = 'user';
    hostname = 'HD-Server';
    path = '~/minecraft-server';

    logs: TerminalLogMessage[] = [];

    private generator = [
        "@java -Xmx4096M -jar minecraft.jar",
        "Loading libraries...",
        "Initializing OpenGL...",
        "Starting Minecraft Client v1.8.9...",
    ];
    private index = 0;
    private autoInterval?: any;

    constructor() {}

    ngOnInit(): void {
        this.autoInterval = setInterval(() => this.auto(), 250);
    }

    private execute(command: string): void {
        this.logs.push({
            message: command,
            username: this.username,
            hostname: this.hostname,
            path: this.path,
            isCommand: true
        });
    }

    private print(message: string): void {
        this.logs.push({
            message: message,
            isCommand: false
        });
    }

    private auto() {
        if (this.autoInterval && this.index >= this.generator.length) {
            clearInterval(this.autoInterval);
            return;
        }

        const message = this.generator[this.index];
        if (message.startsWith("@#")) {
            this.path = message.substring(2);
        } else if (message.startsWith("@")) {
            this.execute(message);
        } else {
            this.print(message);
        }

        this.index++;
    }
}
