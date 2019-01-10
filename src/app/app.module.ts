import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { PostListComponent } from './Posts/post-list/post-list.component';
import { PostComponent } from './Posts/post/post.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { MatPaginatorModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { ChatComponent } from './chat/chat/chat.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { FormsModule } from '@angular/forms';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';
import { MatProgressSpinnerModule } from '@angular/material';


const FIREBASE_CONFIG = environment.firebaseConfig;

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostComponent,
    HeaderComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFirestoreModule,
    AppRoutingModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatPaginatorModule,
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
