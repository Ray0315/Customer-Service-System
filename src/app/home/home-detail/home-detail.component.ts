import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit, OnDestroy {

  id: string;
  name: string;
  private subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // 方法1
    // this.route.params.forEach((params: Params) => {
    //   console.log(params['id']);
    //   console.log(params['name']);
    // });

    // 方法2
    this.subscription = this.route.params.subscribe(
      params => {
        this.id = params['id'],
          this.name = params['name']
      })

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
