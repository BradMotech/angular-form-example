import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  VERSION,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('firstName') firstName: ElementRef;
  private firstname: string;

  ngAfterViewInit(): void {
    // this.firstName.nativeElement.focus();
    console.log('hey ' + this.firstname);
  }
  name = 'Angular ' + VERSION.major;
  form = new FormGroup({
    first: new FormControl('', Validators.minLength(2)),
    last: new FormControl(''),
  });

  get first(): any {
    return this.form.get('first');
  }

  set first(value: string) {
    this.firstname = value;
    if (value === 'mashao') {
      alert('this works ');
    }
  }

  onSubmit(): void {
    console.log(this.form.value); // {first: 'Nancy', last: 'Drew'}
  }

  setValue() {
    console.log('hey ' + this.firstname);
    this.form.setValue({
      first: this.form.get('first').value,
      last: this.form.get('last').value,
    });
  }
  ngOnInit(): void {
    console.log('started');

    // or use valuechanges to listen to changes
    this.form.get('first').valueChanges.subscribe((e) => {
      console.log('value first name changed ', e);
    });
    this.form.get('last').valueChanges.subscribe((e) => {
      console.log('value for last name changed ', e);
    });
  }
}
