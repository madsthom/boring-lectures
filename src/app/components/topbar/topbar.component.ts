import {Component, EventEmitter, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  @Input() clearTextareaEvent: EventEmitter<any>;

  constructor() { }

  ngOnInit(): void {
  }

  public newFile(): void {
    this.clearTextareaEvent.emit();
  }

}
