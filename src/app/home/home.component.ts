import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}
  /**
   * navigate to account page
   *
   * @author xuzongping
   * @memberof HomeComponent
   */
  public onClickAccount(): void {
    this.router.navigate(['/account']);
  }
  /**
   * navigate to news page
   *
   * @author xuzongping
   * @memberof HomeComponent
   */
  public onClickNews(): void {
    this.router.navigate(['./news']);
  }

  public onClickLogout(): void {
    this.authService.logout();
  }
}
