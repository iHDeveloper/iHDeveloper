import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TerminalComponent } from './terminal/terminal.component';
import { MinecraftComponent } from './minecraft/minecraft.component';
import { ProjectComponent } from './project/project.component';
import { ExperienceComponent } from './experience/experience.component';
import { AppRoutingModule } from './app-routing.module';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageAwardsComponent } from './page-awards/page-awards.component';
import { AwardComponent } from './award/award.component';
import { PageBioComponent } from './page-bio/page-bio.component';
import { LangComponent } from './lang/lang.component';
import { ChapterComponent } from './chapter/chapter.component';

@NgModule({
    declarations: [
        AppComponent,
        TerminalComponent,
        MinecraftComponent,
        ProjectComponent,
        ExperienceComponent,
        PageHomeComponent,
        PageAwardsComponent,
        AwardComponent,
        PageBioComponent,
        LangComponent,
        ChapterComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
