import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-navegator',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navegator.component.html',
  styleUrl: './navegator.component.css'
})
export class NavegatorComponent {

  constructor(public auth: AuthService){}

  logout(){
    this.auth.logout();
  }

}
