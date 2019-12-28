import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(    public dialogRef: MatDialogRef<ContentComponent>,
                  @Inject(MAT_DIALOG_DATA) public data: any) { }
  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
