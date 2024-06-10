import { Component } from '@angular/core';
import { appService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Student';
  data:any;
  constructor(private appService:appService) {
    
  }
  ngOnInit() {
    this.appService.loadData().subscribe(response => {
      this.data = response;
    });
  }
  public save(event:any){
    event.preventDefault()
    //event.target.elements[0].value
    this.appService.add(event.target.elements[0].value).subscribe(data=>this.ngOnInit());
  }

  public delete(id:number){
    this.appService.delete(id).subscribe(data=>this.ngOnInit());
    
  }
}
