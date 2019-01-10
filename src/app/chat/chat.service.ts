import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection,  } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Message } from './message-model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  messages$: Observable<Array<Message>>;
  messagesCollection: AngularFirestoreCollection<Message>;

  constructor(private afs: AngularFirestore) { }

  getMessages(): Observable<Array<Message>> {
    this.messagesCollection = this.afs.collection('messages');
    return this.messages$ = this.messagesCollection.valueChanges();
  }

  addMessage(message: Message) {
    console.log(message);
    this.messagesCollection.doc(message.id).set(message);
  }

  createId(): string {
    return this.afs.createId();
  }

}
