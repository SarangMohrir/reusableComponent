import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input()
  cardHead!: string;
  @Input()
  cardText!: string;
  @Input()
  btn_below_cardText!: string;
  @Input()
  leftButtonText!: string;
  @Input()
  rightButtonText!: string;
  @Output() bookmark = new EventEmitter();
  @Output() buttonHr = new EventEmitter();
  @Output() attach = new EventEmitter();
  @Output() message = new EventEmitter();
  @Output() leftButton = new EventEmitter();
  @Output() rightButton = new EventEmitter();
  constructor() {}
  OnClickBookmark() {

    this.bookmark.emit();
  }
  onClickButtonHr() {
    this.buttonHr.emit();
  }
  onClickAttach() {
    this.attach.emit();
  }
  onClickMessage() {
    this.message.emit();
  }
  onClickLeftButton() {
    this.leftButton.emit();
  }
  onClickRightButton() {
    console.log('Clicked');
    this.rightButton.emit();
  }

  ngOnInit(): void {}
}
