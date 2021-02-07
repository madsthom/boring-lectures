import {Component, EventEmitter, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  @Input() public clearTextareaEvent: EventEmitter<any>;

  public markdown: string;

  constructor() { }

  ngOnInit(): void {
    if (this.clearTextareaEvent) {
      this.clearTextareaEvent.subscribe(() => {
        this.markdown = "";
      });
    }
  }

}
