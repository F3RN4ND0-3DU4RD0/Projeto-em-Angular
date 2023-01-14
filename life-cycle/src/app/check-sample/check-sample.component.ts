import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent implements
  OnInit,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy {

    quantidade: number = 0;

    adicionar(): void {
      this.quantidade += 1;
    }
    decrementar(): void {
      this.quantidade -= 1;
    }
  ngOnInit(): void {
    console.log("ngOnInit");
  }

  ngDoCheck(): void {
    console.log("ngDoCheck");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }

  ngOnDestroy(): void {
      console.log("Nos veremos ainda Diego Rosas! Tu no pierdes per la espera!");
  }
}
