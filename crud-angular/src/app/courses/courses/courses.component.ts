import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Course } from '../model/course';
import { CoursesService } from './../services/courses.service';
import { catchError } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses$: Observable<Course[]>; //Convention - Variable name with the final letter being "$" to indicate that it is an Observable variable
  displayedColumns: string[] = ['name', 'category'];

  constructor(
    private CoursesService: CoursesService,
    public dialog: MatDialog
  ) {
    this.courses$ = this.CoursesService.list().pipe(
      catchError((error) => {
        console.error(error);
        this.onError('Please, try again later.');
        return of([]);
      })
    );
  }

  onError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage,
    });
  }

  ngOnInit(): void {}
}
