import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Course } from '../model/course';
import { CoursesService } from './../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses$: Observable<Course[]>; //Convention - Variable name with the final letter being "$" to indicate that it is an Observable variable
  displayedColumns: string[] = ['name', 'category'];

  constructor(private CoursesService: CoursesService) {
    this.courses$ = this.CoursesService.list();
  }

  ngOnInit(): void {}
}
