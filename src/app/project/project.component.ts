import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'hd-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
    @Input() name = 'Project Name';
    @Input() description = 'A simple information about the project';
    @Input() version = '1.0.0';
    @Input() state?: string;    
    @Input() websiteName?: string;
    @Input() website?: string;
    @Input() tags?: string;

    constructor() {}

    ngOnInit(): void {}
}
