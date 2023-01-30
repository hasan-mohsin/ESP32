import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  number: number = 0;
  flag: boolean = true;
  showModal: boolean = false;
  data=['Object#1',
        'Object#2',
        'Object#3',
        'Object#4',
        'Object#5',
        'Object#6',
        'Object#7',
        'Object#8',
        'Object#9',
        'Object#10',
        'Object#11',
        'Object#12',
        'Object#13',
        'Object#14',
        'Object#15',
        'Object#16',
        'Object#17',
        'Object#18',
        'Object#19',
        'Object#20',
        'Object#21',
        'Object#22',
        'Object#23'
      ]
  constructor(private modalService: NgbModal) { }

  closeResult = '';

  loadData() {
    //console.log('hasan');
  }

  ngOnInit(): void {
    
    const seconds = 5;
   //call function every 3 seconds
    setInterval(() => {
      this.logger();
    }, seconds * 1000);
  }

  logger() {
    this.number++
    if (this.number > 4) this.number = 1
    console.log(`Logger got called with: ${this.number}`);  
 }
 open(content: any) {
  this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
    (result) => {
      this.closeResult = `Closed with: ${result}`;
    },
  );
}
}



