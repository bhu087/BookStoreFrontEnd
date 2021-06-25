import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedServiceService } from 'src/app/services/sharedService/shared-service.service';

@Component({
  selector: 'app-order-successful',
  templateUrl: './order-successful.component.html',
  styleUrls: ['./order-successful.component.scss']
})
export class OrderSuccessfulComponent implements OnInit, AfterViewInit {

  constructor(private router: Router, private sharedService: SharedServiceService) { }
  orderID : any;
  ngOnInit(): void {
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.orderID = this.sharedService.getOption();
    }, 0);
  }
  continueShopping(){
    this.router.navigateByUrl('/dashboard');
  }
}
