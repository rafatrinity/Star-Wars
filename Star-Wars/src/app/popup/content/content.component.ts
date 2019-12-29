import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Planet } from 'src/app/planet';

@Component({
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {

  constructor(    public dialogRef: MatDialogRef<ContentComponent>,
                  @Inject(MAT_DIALOG_DATA) public data: Planet) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
