import {HttpClient} from 'aurelia-http-client';
import {EventAggregator} from 'aurelia-event-aggregator';
import {NewCommentCreated} from './messages';


export class CommentList {
	static inject = [HttpClient, EventAggregator];
	url = "http://localhost:9000/data/commentbox.json";
	
	constructor(http, ea){
		this.http = http;
		this.ea = ea;
		this.http.get(this.url).then(res => {
			this.comments = JSON.parse(res.response);			
		});
		this.ea.subscribe(NewCommentCreated,msg => this.refreshList(msg.comment));
	}
	
	refreshList(comment){
		this.comments.push(comment);		
	}
}


	