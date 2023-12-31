import {
  Component,
  OnInit,
  Signal,
  WritableSignal,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { HeaderBannerComponent } from '../../components/header-banner/header-banner.component';
import { UserDetailsComponent } from '../../components/user-details/user-details.component';
import { CommonModule, DatePipe } from '@angular/common';
import { PaginationPipe } from '../../pipes/pagination.pipe';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ServiceService } from '../../services/service.service';
import { ModalComponent } from '../../components/modal/modal.component';
import { ModalService } from '../../services/modal.service';
import { TitleBoldComponent } from '../../components/title-bold/title-bold.component';

export interface employeType {
  userDetails: { images: number; title: string; work: string };
  email: string;
  mobile: number;
  dateOfJoining: string | Date;
  salary: number;
  project: number;
}

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [
    HeaderBannerComponent,
    UserDetailsComponent,
    DatePipe,
    PaginationPipe,
    FormsModule,
    ModalComponent,
    CommonModule,
    TitleBoldComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss',
})
export class EmployeeComponent implements OnInit {
  private service = inject(ServiceService);
  countPerPage: WritableSignal<number> = signal(this.service.countPerPage());
  data: WritableSignal<employeType[]> = signal([
    {
      userDetails: { images: 3, title: "John", work: "Software Engineer" },
      email: "john@example.com",
      mobile: 9876543210,
      dateOfJoining: "Sat Oct 01 2022 10:15:30 GMT+0000 (Coordinated Universal Time)",
      salary: 60000,
      project: 15
    },
    {
      userDetails: { images: 1, title: "Alice", work: "Data Scientist" },
      email: "alice@example.com",
      mobile: 8765432109,
      dateOfJoining: "Mon Nov 15 2022 08:45:00 GMT+0000 (Coordinated Universal Time)",
      salary: 80000,
      project: 22
    },
    {
      userDetails: { images: 2, title: "Bob", work: "UX Designer" },
      email: "bob@example.com",
      mobile: 7654321098,
      dateOfJoining: "Wed Jan 05 2023 12:30:45 GMT+0000 (Coordinated Universal Time)",
      salary: 50000,
      project: 18
    },
    {
      "userDetails": { "images": 2, "title": "Emma", "work": "Frontend Developer" },
      "email": "emma@example.com",
      "mobile": 6543210987,
      "dateOfJoining": "Thu Mar 09 2023 14:20:00 GMT+0000 (Coordinated Universal Time)",
      "salary": 55000,
      "project": 12
    },
    {
      "userDetails": { "images": 1, "title": "Charlie", "work": "Mobile App Developer" },
      "email": "charlie@example.com",
      "mobile": 5432109876,
      "dateOfJoining": "Sat May 20 2023 09:10:30 GMT+0000 (Coordinated Universal Time)",
      "salary": 70000,
      "project": 25
    },
    {
      "userDetails": { "images": 3, "title": "Olivia", "work": "Full Stack Developer" },
      "email": "olivia@example.com",
      "mobile": 4321098765,
      "dateOfJoining": "Tue Jul 11 2022 18:45:15 GMT+0000 (Coordinated Universal Time)",
      "salary": 65000,
      "project": 20
    },
    {
      "userDetails": { "images": 2, "title": "Liam", "work": "Backend Developer" },
      "email": "liam@example.com",
      "mobile": 3210987654,
      "dateOfJoining": "Fri Sep 29 2022 08:00:45 GMT+0000 (Coordinated Universal Time)",
      "salary": 60000,
      "project": 15
    },
    {
      "userDetails": { "images": 1, "title": "Ava", "work": "DevOps Engineer" },
      "email": "ava@example.com",
      "mobile": 2109876543,
      "dateOfJoining": "Sun Dec 03 2023 11:30:00 GMT+0000 (Coordinated Universal Time)",
      "salary": 75000,
      "project": 18
    },
    {
      "userDetails": { "images": 3, "title": "Mia", "work": "UI/UX Designer" },
      "email": "mia@example.com",
      "mobile": 1098765432,
      "dateOfJoining": "Wed Feb 14 2023 16:10:30 GMT+0000 (Coordinated Universal Time)",
      "salary": 58000,
      "project": 22
    },
    {
      "userDetails": { "images": 2, "title": "Noah", "work": "Software Engineer" },
      "email": "noah@example.com",
      "mobile": 9876543210,
      "dateOfJoining": "Mon Apr 24 2023 14:45:00 GMT+0000 (Coordinated Universal Time)",
      "salary": 62000,
      "project": 16
    },
    {
      "userDetails": { "images": 1, "title": "Isabella", "work": "Data Analyst" },
      "email": "isabella@example.com",
      "mobile": 8765432109,
      "dateOfJoining": "Thu Jun 08 2023 10:30:45 GMT+0000 (Coordinated Universal Time)",
      "salary": 48000,
      "project": 14
    },
    {
      "userDetails": { "images": 3, "title": "Lucas", "work": "Frontend Developer" },
      "email": "lucas@example.com",
      "mobile": 7654321098,
      "dateOfJoining": "Sat Aug 19 2023 09:20:15 GMT+0000 (Coordinated Universal Time)",
      "salary": 70000,
      "project": 24
    },
    {
      "userDetails": { "images": 2, "title": "Sophia", "work": "Mobile App Developer" },
      "email": "sophia@example.com",
      "mobile": 6543210987,
      "dateOfJoining": "Tue Oct 31 2022 12:15:30 GMT+0000 (Coordinated Universal Time)",
      "salary": 62000,
      "project": 17
    }
  ]);
  currentPage: WritableSignal<number> = signal(1);
  actualData: Signal<employeType[]> = computed(() =>
    this.data().filter(({ userDetails: { title } }) =>
      title.toLowerCase().includes(this.searchInput().toLowerCase())
    )
  );
  ceiledPage: Signal<number> = computed(() =>
    Math.ceil(this.actualData().length / +this.countPerPage())
  );
  paginationCount: Signal<number> = computed(
    () => this.currentPage() * this.countPerPage() - this.countPerPage() + 1
  );
  searchInput: WritableSignal<string> = signal('');
  secondReactiveForm!: FormGroup;
  isSecondFormSubmit: boolean = false;
  submitted!: boolean;
  controls: any = [];
  typeOfForm:string="";
  userIndex:number=0;

  privouspage() {
    if (this.currentPage() > 1) {
      this.currentPage.update((data) => (data -= 1));
    }
  }
  nextpage() {
    if (this.currentPage() < this.ceiledPage()) {
      console.log('next');
      this.currentPage.update((data) => (data += 1));
    }
  }
  selectchange(event: Event) {
    this.currentPage.set(1);
    this.countPerPage.set(+(event.target as HTMLInputElement).value);
  }
  privousFirst() {
    this.currentPage.set(1);
  }
  nextLast() {
    this.currentPage.set(this.ceiledPage());
  }
  searchEmployee(event: Event) {
    this.searchInput.set((event.target as HTMLInputElement).value);
  }

  constructor(private modalService: ModalService, private fb: FormBuilder) {}

  ngOnInit() {
    this.secondReactiveForm = this.fb.group(
      {
        name: ['', Validators.required],
        position: ['', Validators.required],
        date: ['', Validators.required],
        salary: ['', Validators.required],
        project: ['', Validators.required],
        mobile: [
          '',
          [Validators.required, Validators.pattern('^[6-9][0-9]{9}$')],
        ],
        email: ['', [Validators.required, Validators.email]],
      },
      { validators: this.checkPassword }
    );
  }

  secondFormControl(prop: string) {
    return this.secondReactiveForm.get(prop);
  }

  formSubmit() {
    this.isSecondFormSubmit = true;
    if (this.secondReactiveForm.valid) {
      if(this.typeOfForm==="Update"){
        this.data.update((data) => {
          return data.map((item,idx)=>{
            if(idx==this.userIndex){
              return{
                userDetails: {
                  images: 1,
                  title: this.secondReactiveForm.value.name,
                  work: this.secondReactiveForm.value.position,
                },
                email: this.secondReactiveForm.value.email,
                mobile: this.secondReactiveForm.value.mobile,
                dateOfJoining: this.secondReactiveForm.value.date,
                salary: this.secondReactiveForm.value.salary,
                project: this.secondReactiveForm.value.project,
              }
            }
            else{
              return item
            }
          })
        })}
      else{
        this.data.update((data) => [
          ...data,
          {
            userDetails: {
              images: 1,
              title: this.secondReactiveForm.value.name,
              work: this.secondReactiveForm.value.position,
            },
            email: this.secondReactiveForm.value.email,
            mobile: this.secondReactiveForm.value.mobile,
            dateOfJoining: this.secondReactiveForm.value.date,
            salary: this.secondReactiveForm.value.salary,
            project: this.secondReactiveForm.value.project,
          },
        ]);
      }
      this.closeModal('custom-modal-1');
    }
    this.secondReactiveForm.reset(this.secondReactiveForm.value);
  }

  checkPassword: ValidatorFn = (
    group: AbstractControl
  ): ValidationErrors | null => {
    let pass = group.get('password')?.value;
    let confirmPassword = group.get('confirmPassword')?.value;
    return pass === confirmPassword ? null : { notSame: true };
  };

  openModal(id: string) {
    this.modalService.open(id);
    this.typeOfForm="Add";
    this.isSecondFormSubmit = false;
    this.secondReactiveForm.controls['name'].setValue("")
    this.secondReactiveForm.controls['position'].setValue("")
    this.secondReactiveForm.controls['date'].setValue("")
    this.secondReactiveForm.controls['salary'].setValue("")
    this.secondReactiveForm.controls['project'].setValue("")
    this.secondReactiveForm.controls['mobile'].setValue("")
    this.secondReactiveForm.controls['email'].setValue("")
  }

  closeModal(id: string) {
    this.secondReactiveForm.controls['name'].setValue("")
    this.secondReactiveForm.controls['position'].setValue("")
    this.secondReactiveForm.controls['date'].setValue("")
    this.secondReactiveForm.controls['salary'].setValue("")
    this.secondReactiveForm.controls['project'].setValue("")
    this.secondReactiveForm.controls['mobile'].setValue("")
    this.secondReactiveForm.controls['email'].setValue("")
    this.modalService.close(id);
  }

  deleteUser(index: number) {
    this.data.update((data) => {
      return data.filter((_, idx) => idx !== index);
    });
  }

  editUser(index: number) {
    console.log("EmployeeComponent ~ index:", index)
    const year=new Date(this.data()[index].dateOfJoining ).getFullYear()
    const month=new Date(this.data()[index].dateOfJoining ).getMonth()
    const date=new Date(this.data()[index].dateOfJoining ).getDate()
    this.openModal("custom-modal-1");
    this.typeOfForm="Update"
    this.userIndex=index;
    this.secondReactiveForm.controls['name'].setValue(this.data()[index].userDetails.title)
    this.secondReactiveForm.controls['position'].setValue(this.data()[index].userDetails.work)
    this.secondReactiveForm.controls['date'].setValue(`${year}-${month}-${date}`)
    this.secondReactiveForm.controls['salary'].setValue(this.data()[index].salary)
    this.secondReactiveForm.controls['project'].setValue(this.data()[index].project)
    this.secondReactiveForm.controls['mobile'].setValue(this.data()[index].mobile)
    this.secondReactiveForm.controls['email'].setValue(this.data()[index].email)
  }
}