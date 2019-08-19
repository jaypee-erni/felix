import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/core/http/api.service';
import { UserDetailModel } from '../../../shared/models/users/user-detail.model';

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
    ) { }

  ngOnInit() {
    this.form = this.fb.group({
      id: [''],
      title: [''],
      author: ['']
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

}
