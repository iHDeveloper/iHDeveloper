import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'hd-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
    @Input() name = 'Project Name';
    @Input() websiteName?: string;
    @Input() year?: string;
    @Input() website?: string;
    @Input() tags?: string;

    constructor() {}

    ngOnInit(): void {}
}
