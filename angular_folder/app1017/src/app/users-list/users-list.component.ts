import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TriviaService } from '../trivia.service';
import { UserInterface } from '../user-interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private triviaService: TriviaService
  ) { }

  ngOnInit(): void {
    this.getAllUsersInfoFromDb();
  }

  usersList: UserInterface[] = [] as UserInterface[];

  getAllUsersInfoFromDb(): void {
    this.triviaService.getAllUsersInfo().subscribe(
      res => {
        this.usersList = res.sort((v1, v2) => (v1.totalScore/v1.cummulativePoints) > (v2.totalScore/v2.cummulativePoints) ? -1 : 0);
      }
    );
  }
  deleteUser(user: UserInterface): void {
    console.log("TODO");
    console.log(user);
    const userid = user.id? user.id : '';
    this.triviaService.deleteSingleUser(userid).subscribe( res =>
      {
        console.log('success');
        this.getAllUsersInfoFromDb();
      }

    );
  }

}
