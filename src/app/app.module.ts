import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SplitterModule} from 'primeng/splitter';
import {ButtonModule} from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';
import { EditorComponent } from './components/editor/editor.component';
import {SplitButtonModule} from 'primeng/splitbutton';
import { TopbarComponent } from './components/topbar/topbar.component';
import {FormsModule} from '@angular/forms';
import {MarkdownModule, MarkdownService} from 'ngx-markdown';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SplitterModule,
    ButtonModule,
    ToolbarModule,
    SplitButtonModule,
    FormsModule,
    MarkdownModule.forRoot(),
  ],
  providers: [MarkdownService],
  bootstrap: [AppComponent]
})
export class AppModule { }
