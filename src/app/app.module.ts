import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TerminalComponent } from './terminal/terminal.component';
import { MinecraftComponent } from './minecraft/minecraft.component';

@NgModule({
  declarations: [
    AppComponent,
    TerminalComponent,
    MinecraftComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
