import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/core/http/api.service';
import { UserDetailModel } from '../../../shared/models/users/user-detail.model';
import { UsersService } from 'src/app/shared/services/users/users.service';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.scss']
})
export class UsersDetailComponent implements OnInit {

  public currentID = 0;
  public dataSource: UserDetailModel;
  form: FormGroup;
  form$;

  constructor(
    private fb: FormBuilder,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly apiService: ApiService,
    private readonly userService: UsersService,
    ) { }

  ngOnInit() {
    this.form = this.fb.group({
      id: [''],
      title: [''],
      author: [''],
      test_error_item: ['']
    });
    this.activatedRoute.params.subscribe(params => {
      this.currentID = params.id;
    });

    this.apiService.get(`posts/${this.currentID}`).subscribe( (ret: UserDetailModel) => {
      this.form.controls.id.setValue(ret.id);
      this.form.controls.title.setValue( ret.title  );
      this.form.controls.author.setValue(ret.author);
    });
  }

  test_error_return() {
    this.userService.logError().subscribe(ret => {
      console.log(ret);
    }, error => {
      this.form.controls['test_error_item'].setErrors({ serverError: true, message: 'asa error'});
    });
  }

  field(field: string) {
    return this.form.controls[field];
  }

}
