import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { TestDirective } from 'src/app/appDirectives/test.directive';
import { MessageService } from 'src/app/appServices/message.service';

@Component({
  selector: 'app-service-use',
  templateUrl: './service-use.component.html',
  styleUrls: ['./service-use.component.css'],
})
export class ServiceUseComponent implements OnInit, AfterViewInit {
  products: any = [];
  users: any = [];

  @ViewChild('box') box!: ElementRef<any>;
  @ViewChild(TestDirective) myDir!: TestDirective;

  constructor(
    private msgService: MessageService,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.products = this.msgService.products;
    this.msgService.users().subscribe((res) => (this.users = res));
  }

  ngAfterViewInit() {
    console.log(this.box);
    // Element (box) modification with View Child

    // this.box.nativeElement.style.backgroundColor = 'pink';
    // this.box.nativeElement.classList = 'boxPink';
    // this.box.nativeElement.innerHTML = 'My Name is Virat Rawat';

    // Element (box) modification with View Child

    this.renderer.setStyle(this.box.nativeElement, 'backgroundColor', 'pink');
    this.renderer.setStyle(this.box.nativeElement, 'color', 'green');
    this.renderer.addClass(this.box.nativeElement, 'myClass');
  }

  changeColor(color: string) {
    this.myDir.changeBg(color);
  }
}
