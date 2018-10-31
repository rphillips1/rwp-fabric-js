import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FabricEditorComponent } from './fabric-editor/fabric-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    FabricEditorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
