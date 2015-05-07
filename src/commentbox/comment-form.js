import {EventAggregator} from 'aurelia-event-aggregator';
import {NewCommentCreated} from './messages';

export class CommentForm{
	static inject = [EventAggregator]; 
	constructor(ea){
		this.ea = ea;
		this.author = "";
		this.text = "";		
	}
	
	saveComment() {
		if(!this.text || !this.author) {
			return;
		}
		let msg = new NewCommentCreated({author: this.author, text: this.text});
		this.ea.publish(msg);
		this.text = '';
		this.author = '';
	}
}