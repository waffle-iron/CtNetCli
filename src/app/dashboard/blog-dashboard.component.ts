import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';

import { BlogService } from '../blog/blog.service';

@Component({
    selector: 'blog-dashboard',
    templateUrl: './blog-dashboard.component.html'
})
export class BlogDashboardComponent implements OnInit {
    recentArticles: FirebaseListObservable<any>;

    constructor(private blogService: BlogService) { }
    
    getRecentArticles(): void {
        this.recentArticles = this.blogService.getRecentArticles();
    }

    ngOnInit(): void {
        this.getRecentArticles();
     }
}