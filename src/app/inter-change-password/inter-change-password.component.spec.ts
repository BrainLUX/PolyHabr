import {ComponentFixture, TestBed} from "@angular/core/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {InterChangePasswordComponent} from "./inter-change-password.component";

describe("Inter change password tests",() => {
  let component: InterChangePasswordComponent;
  let fixture: ComponentFixture<InterChangePasswordComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [InterChangePasswordComponent]
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(InterChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Inter change password component test', () => {
    expect(component).toBeTruthy();
  });

  // it("Navigate to change password page", fakeAsync(
  //   inject([AuthorizationService, HttpTestingController, Router],
  //     (authorizationService: AuthorizationService, backend: HttpTestingController, router: Router) => {
  //       spyOn(router, 'navigateByUrl').and.stub();
  //       component.confirmToken();
  //       backend.expectOne({url: "http://194.87.239.1:8733/api/auth/changePassword?token=&"}).flush({}, {status: 200});
  //
  //       expect(router.navigateByUrl).toHaveBeenCalled();
  //       expect(router.navigateByUrl).toHaveBeenCalledWith(Destination.CHANGE_PASSWORD.toPath());
  //     })
  // ));
});
