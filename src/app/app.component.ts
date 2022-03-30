import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newMemberName = '';
  members: string[] = [];
  errorMessage: string = '';
  numberOfTeams: number | '' = '';
  teams: string[][] = [];
  button = false;

  onInput(member: string) {
    this.newMemberName = member;
  }

  onNumberOfTeamsInput(value: string) {
    this.numberOfTeams = Number(value);
  }
  AddMember() {
    if (!this.newMemberName) {
      this.errorMessage = "Name can't be empty!";
      return;
    }
    this.members.push(this.newMemberName);
    this.button = true;
    this.newMemberName = '';
    this.errorMessage = '';
    console.log(this.members);
  }

  onDelete(member: any){
    console.log(this.members);
    const index = this.members.indexOf(member);
    this.members.splice(index, 1);
  }

  generateTeams() {
    if (!this.numberOfTeams || this.numberOfTeams <= 0) {
      this.errorMessage = "not valid input";
      return;
    }

    if(this.members.length < this.numberOfTeams) {
      this.errorMessage = "Not enough members"
      return;
    }

    this.errorMessage = '';
    const allMembers = [...this.members];

    while (allMembers.length) {
      for (let i = 0; i < this.numberOfTeams; i++) {
        const randomIndex = Math.floor(Math.random() * allMembers.length);
        const member = allMembers.splice(randomIndex, 1)[0];
        if(!member) break;

        if(this.teams[i]){
          this.teams[i].push(member)
        }else{
          this.teams[i] = [member];
        }
      }
      console.log(this.teams);
      
    }
    this.members = [];
    this.numberOfTeams = ''
  }

}
