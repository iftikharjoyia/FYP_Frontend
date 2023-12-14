import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  constructor(private router: Router) { }
ngOnit(){
  
}

onSubmit(){
    localStorage.setItem('previousRoute', "/get-qoute");

  
    this.router.navigateByUrl('/get-qoute');
}
onService(){
  this.router.navigateByUrl('/services');
}
}
