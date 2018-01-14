angular.module('MyApp').run(['$templateCache', function($templateCache) {$templateCache.put('partials/404.html','<div class="container text-center">\n  <h1>404</h1>\n  <p>Page Not Found</p>\n</div>');
$templateCache.put('partials/about.html','<div class="container">\n    <div class="row">\n        <div class="col-sm-12">\n            <div class="panel">\n                <div class="panel-body">\n                    <h3>About us</h3>\n                   <p>\n                       iPuli is a new word for online credits in the financial market. We offer the lowest interest rate, comfortable service and borrower\'s terms.\n\n                       The loan-taking process is quick, comfortable and convenient for everybody, since the loan can be obtained from online, anywhere from anywhere, and with our representatives at the company\'s branch.\n\n                       In order to get a loan, only an active ID or passport is required. The company\'s services can be used by citizens of Georgia from 22 to 65 years. The customer must meet the credit requirements of the company to get a loan.\n\n                       iPuli allows you to use online loan from 100 to 700 GEL. The loan will be issued for 30 days.\n\n                       Loan Fee is 5,8%\n\n                       we offer:\n\n                       The lowest interest rate among Georgian online loans;\n                       Convenient, comfortable and convenient service for everyone;\n                       Transparent conditions;\n                       Qualified consultations;\n                       Simple form of application, without extra documents.\n                       The loan-taking process is very simple and consists of three stages:\n\n                       Register\n                       Confirmation of the application\n                       Identification\n                       iPuli professionals are always ready to provide you with qualified service.\n\n                       Our goal is to make iPuli be more affordable!\n                   </p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>');
$templateCache.put('partials/borrow.html','<div class="container">\n    Borrow\n</div>');
$templateCache.put('partials/contact.html','<div class="container">\n  <div class="panel">\n    <div class="panel-heading">\n      <h3 class="panel-title">Contact Form</h3>\n    </div>\n    <div class="panel-body">\n      <div ng-if="messages.error" role="alert" class="alert alert-danger">\n        <div ng-repeat="error in messages.error">{{error.msg}}</div>\n      </div>\n      <div ng-if="messages.success" role="alert" class="alert alert-success">\n        <div ng-repeat="success in messages.success">{{success.msg}}</div>\n      </div>\n      <form ng-submit="sendContactForm()" class="form-horizontal">\n        <div class="form-group">\n          <label for="name" class="col-sm-2">Name</label>\n          <div class="col-sm-8">\n            <input type="text" name="name" id="name" class="form-control" ng-model="contact.name" autofocus>\n          </div>\n        </div>\n        <div class="form-group">\n          <label for="email" class="col-sm-2">Email</label>\n          <div class="col-sm-8">\n            <input type="email" name="email" id="email" class="form-control" ng-model="contact.email">\n          </div>\n        </div>\n        <div class="form-group">\n          <label for="message" class="col-sm-2">Body</label>\n          <div class="col-sm-8">\n            <textarea name="message" id="message" rows="7" class="form-control" ng-model="contact.message"></textarea>\n          </div>\n        </div>\n        <div class="form-group">\n          <div class="col-sm-offset-2 col-sm-8">\n            <button type="submit" class="btn btn-success">Send</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>');
$templateCache.put('partials/faq.html','<div class="container">\n    FAQ\n</div>');
$templateCache.put('partials/footer.html','<footer>\n  <p>\xA9 2018 Company, Inc. All Rights Reserved.</p>\n</footer>');
$templateCache.put('partials/forgot.html','<div class="container">\n  <div class="panel">\n    <div class="panel-body">\n      <div ng-if="messages.error" role="alert" class="alert alert-danger">\n        <div ng-repeat="error in messages.error">{{error.msg}}</div>\n      </div>\n      <div ng-if="messages.success" role="alert" class="alert alert-success">\n        <div ng-repeat="success in messages.success">{{success.msg}}</div>\n      </div>\n      <form ng-submit="forgotPassword()">\n        <legend>Forgot Password</legend>\n        <div class="form-group">\n          <p>Enter your email address below and we\'ll send you password reset instructions.</p>\n          <label for="email">Email</label>\n          <input type="email" name="email" id="email" placeholder="Email" class="form-control" ng-model="user.email" autofocus>\n        </div>\n        <button type="submit" class="btn btn-success">Reset Password</button>\n      </form>\n    </div>\n  </div>\n</div>');
$templateCache.put('partials/header.html','<nav ng-controller="HeaderCtrl" class="navbar navbar-default navbar-static-top">\n  <div class="container">\n    <div class="navbar-header">\n      <button type="button" data-toggle="collapse" data-target="#navbar" class="navbar-toggle collapsed">\n        <span class="sr-only">Toggle navigation</span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n      </button>\n      <a href="/" class="navbar-brand" style="\n    font-weight: bold;\n    font-size: 24px;\n    color: blue;\n    ">Easy Loans</a>\n    </div>\n    <div id="navbar" class="navbar-collapse collapse">\n      <ul class="nav navbar-nav">\n        <!--<li ng-class="{ active: isActive(\'/\')}"><a href="/">Home</a></li>-->\n        <li ng-if="isAuthenticated()" ng-class="{ active: isActive(\'/request\')}"><a href="/request">Get Loan</a></li>\n        <li ng-class="{ active: isActive(\'/about\')}"><a href="/about">About us</a></li>\n        <li ng-class="{ active: isActive(\'/terms\')}"><a href="/terms">Conditions</a></li>\n        <li ng-class="{ active: isActive(\'/faq\')}"><a href="/faq">FAQ</a></li>\n        <!--<li ng-class="{ active: isActive(\'/contact\')}"><a href="/contact">Contact</a></li>-->\n      </ul>\n      <ul ng-if="isAuthenticated()" class="nav navbar-nav navbar-right">\n        <li class="dropdown">\n          <a href="#" data-toggle="dropdown" class="navbar-avatar dropdown-toggle">\n            <!--<img ng-src="{{currentUser.picture || currentUser.gravatar}}"> {{currentUser.name || currentUser.email || currentUser.id}} <i class="caret"></i>-->\n            {{currentUser.name || currentUser.email || currentUser.id}} <i class="caret"></i>\n          </a>\n          <ul class="dropdown-menu">\n            <li><a href="/account">My Account</a></li>\n            <li><a href="/request">Get Loan</a></li>\n            <li><a href="/loans">My Loans</a></li>\n            <li class="divider"></li>\n            <li><a href="#" ng-click="logout()"}>Logout</a></li>\n          </ul>\n        </li>\n      </ul>\n      <ul ng-if="!isAuthenticated()" class="nav navbar-nav navbar-right">\n        <li ng-class="{ active: isActive(\'/login\')}"><a href="/login">Log in</a></li>\n        <li ng-class="{ active: isActive(\'/signup\')}"><a href="/signup">Sign up</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n');
$templateCache.put('partials/home.html','<div class="container">\n  <div class="row">\n    <div class="col-sm-12">\n      <div class="panel">\n        <div class="panel-body">\n          <h3>Money</h3>\n          <div style="margin-top: 10px">\n            <rzslider rz-slider-model="loan.value"\n                      rz-slider-options="slider.options"></rzslider>\n          </div>\n          <div class="metadata-container">\n            <div class="metadata-loan-pair">\n              <div class="metadata-loan-title">Loan amount of</div>\n              <div class="metadata-loan-value">{{loan.value}}\u20AC</div>\n            </div>\n\n            <div class="metadata-loan-pair">\n              <div class="metadata-loan-title">Deadline</div>\n              <div class="metadata-loan-value metadata-loan-value-red">30 days</div>\n            </div>\n\n            <div class="metadata-loan-pair">\n              <div class="metadata-loan-title">Commission</div>\n              <div class="metadata-loan-value metadata-loan-value-red">{{(loan.value * 0.058) | number:2}}\u20AC</div>\n            </div>\n\n            <div class="metadata-loan-pair">\n              <div class="metadata-loan-title">Cover amount</div>\n              <div class="metadata-loan-value metadata-loan-value-red">{{(loan.value * 1.058) | number:2 }}\u20AC</div>\n            </div>\n          </div>\n          <a href="/request" role="button" class="btn btn-default">Get Loan</a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="row">\n    <div class="col-md-6">\n      <div class="panel">\n        <div class="panel-body">\n          <h3>How do I get a loan?</h3>\n          <p>How do I get a loan?</p>\n          <a href="/how/borrow" role="button" class="btn btn-default">Borrow</a>\n        </div>\n      </div>\n    </div>\n    <div class="col-md-6">\n      <div class="panel">\n        <div class="panel-body">\n          <h3>How can I pay</h3>\n          <p>can I pay</p>\n          <a href="/how/pay" role="button" class="btn btn-default">Pay</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n');
$templateCache.put('partials/loans.html','<div class="container">\n    Loans\n</div>');
$templateCache.put('partials/login.html','<div class="container login-container">\n  <div class="panel">\n    <div class="panel-body">\n      <div ng-if="messages.error" role="alert" class="alert alert-danger">\n        <div ng-repeat="error in messages.error">{{error.msg}}</div>\n      </div>\n      <form ng-submit="login()">\n        <legend>Log In</legend>\n        <div class="form-group">\n          <label for="email">Email</label>\n          <input type="email" name="email" id="email" placeholder="Email" class="form-control" ng-model="user.email" autofocus>\n        </div>\n        <div class="form-group">\n          <label for="password">Password</label>\n          <input type="password" name="password" id="password" placeholder="Password" class="form-control" ng-model="user.password">\n        </div>\n        <div class="form-group"><a href="/forgot"><strong>Forgot your password?</strong></a></div>\n        <button type="submit" class="btn btn-success">Log in</button>\n      </form>\n      <div class="hr-title"><span>or</span></div>\n      <div class="btn-toolbar text-center">\n        <button class="btn btn-facebook" ng-click="authenticate(\'facebook\')">Sign in with Facebook</button>\n      </div>\n    </div>\n  </div>\n  <p class="text-center">\n    Don\'t have an account? <a href="/signup"><strong>Sign up</strong></a>\n  </p>\n</div>\n');
$templateCache.put('partials/pay.html','<div class="container">\n    Pay\n</div>');
$templateCache.put('partials/profile.html','<div class="container">\n  <div class="panel">\n    <div class="panel-body">\n      <div ng-if="messages.error" role="alert" class="alert alert-danger">\n        <div ng-repeat="error in messages.error">{{error.msg}}</div>\n      </div>\n      <div ng-if="messages.success" role="alert" class="alert alert-success">\n        <div ng-repeat="success in messages.success">{{success.msg}}</div>\n      </div>\n      <form ng-submit="updateProfile()" class="form-horizontal">\n        <legend>Profile Information</legend>\n        <!--Email-->\n        <div class="form-group">\n          <label for="email" class="col-sm-3">Email</label>\n          <div class="col-sm-7">\n            <input type="email" name="email" id="email" class="form-control" ng-model="profile.email">\n          </div>\n        </div>\n        <!--First Name-->\n        <div class="form-group">\n          <label for="first-name" class="col-sm-3">First Name</label>\n          <div class="col-sm-7">\n            <input type="text" name="first name" id="first-name" class="form-control" ng-model="profile.firstName">\n          </div>\n        </div>\n        <!--Last Name-->\n        <div class="form-group">\n          <label for="last-name" class="col-sm-3">Last Name</label>\n          <div class="col-sm-7">\n            <input type="text" name="last name" id="last-name" class="form-control" ng-model="profile.lastName">\n          </div>\n        </div>\n        <!--Gender-->\n        <div class="form-group">\n          <label class="col-sm-3">Gender</label>\n          <div class="col-sm-4">\n            <label class="radio-inline radio col-sm-4">\n              <input type="radio" name="gender" value="male" ng-checked="profile.gender === \'male\'"><span>Male</span>\n            </label>\n            <label class="radio-inline col-sm-4">\n              <input type="radio" name="gender" value="female" ng-checked="profile.gender === \'female\'"><span>Female</span>\n            </label>\n          </div>\n        </div>\n        <!--ID-->\n        <div class="form-group">\n          <label for="userId" class="col-sm-3">ID</label>\n          <div class="col-sm-7">\n            <input type="text" name="ID" id="userId" class="form-control" ng-model="profile.personalId">\n          </div>\n        </div>\n        <!--Mobile Number-->\n        <div class="form-group">\n          <label for="mobile-number" class="col-sm-3">Mobile Number</label>\n          <div class="col-sm-7">\n            <input type="text" name="Mobile Number" id="mobile-number" class="form-control" ng-model="profile.phoneNumber">\n          </div>\n        </div>\n        <!--City-->\n        <div class="form-group">\n          <label for="city" class="col-sm-3">City</label>\n          <div class="col-sm-7">\n            <input type="text" name="city" id="city" class="form-control" ng-model="profile.city">\n          </div>\n        </div>\n        <!--Address-->\n        <div class="form-group">\n          <label for="address" class="col-sm-3">Address</label>\n          <div class="col-sm-7">\n            <input type="text" name="address" id="address" class="form-control" ng-model="profile.address">\n          </div>\n        </div>\n        <!--Bank Account-->\n        <div class="form-group">\n          <label for="bank-account" class="col-sm-3">Bank Account</label>\n          <div class="col-sm-7">\n            <input type="text" name="Bank Account" id="bank-account" class="form-control" ng-model="profile.bankAccount">\n          </div>\n        </div>\n        <!--DOB-->\n        <div class="form-group">\n          <label for="dob" class="col-sm-3">Date Of Birth</label>\n          <div class="col-sm-7">\n            <md-datepicker id="dob" ng-model="profile.dob" md-placeholder="Enter date"  md-is-open="isOpen"></md-datepicker>\n            <md-button class="md-primary md-raised" ng-click="isOpen = true">Open</md-button>\n          </div>\n        </div>\n\n        <!--<div class="form-group">-->\n          <!--<label class="col-sm-3">Gravatar</label>-->\n          <!--<div class="col-sm-4">-->\n            <!--<img ng-src="{{profile.gravatar}}" class="profile" width="100" height="100">-->\n          <!--</div>-->\n        <!--</div>-->\n        <div class="form-group">\n          <div class="col-sm-offset-3 col-sm-4">\n            <button type="submit" class="btn btn-success">Update Profile</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n  <div class="panel">\n    <div class="panel-body">\n      <form ng-submit="changePassword()" class="form-horizontal">\n        <legend>Change Password</legend>\n        <div class="form-group">\n          <label for="password" class="col-sm-3">New Password</label>\n          <div class="col-sm-7">\n            <input type="password" name="password" id="password" class="form-control" ng-model="profile.password">\n          </div>\n        </div>\n        <div class="form-group">\n          <label for="confirm" class="col-sm-3">Confirm Password</label>\n          <div class="col-sm-7">\n            <input type="password" name="confirm" id="confirm" class="form-control" ng-model="profile.confirm">\n          </div>\n        </div>\n        <div class="form-group">\n          <div class="col-sm-4 col-sm-offset-3">\n            <button type="submit" class="btn btn-success">Change Password</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n  <div class="panel">\n    <div class="panel-body">\n      <div class="form-horizontal">\n        <legend>Linked Accounts</legend>\n        <div class="form-group">\n          <div class="col-sm-offset-3 col-sm-4">\n            <p>\n              <a href="#" ng-click="unlink(\'facebook\')" ng-if="currentUser.facebook" class="text-danger">Unlink your Facebook account</a>\n              <a href="#" ng-click="link(\'facebook\')" ng-if="!currentUser.facebook">Link your Facebook account</a>\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="panel">\n    <div class="panel-body">\n      <form ng-submit="deleteAccount()" class="form-horizontal">\n        <legend>Delete Account</legend>\n        <div class="form-group">\n          <p class="col-sm-offset-3 col-sm-9">You can delete your account, but keep in mind this action is irreversible.</p>\n          <div class="col-sm-offset-3 col-sm-9">\n            <button type="submit" class="btn btn-danger">Delete my account</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n');
$templateCache.put('partials/request.html','<div class="container">\n    <md-content flex="nogrow">\n        <div>\n            <md-card>\n                <md-toolbar>\n                    <div class="md-toolbar-tools">\n                        <h2>\n                            <md-icon md-svg-icon="md-menu"></md-icon>\n                            <span>Loan Request</span>\n                        </h2>\n                    </div>\n                </md-toolbar>\n                <md-stepper-card-content class="md-no-padding">\n                    <md-steppers md-dynamic-height md-disable-tabs-behavior="true" md-stretch-steppers="always" md-selected="vm.selectedStep" md-busy-text="\'Processing...\'" md-busy="vm.showBusyText">\n                        <md-step label="Loan" md-complete="vm.stepData[0].data.completed" ng-disabled="vm.stepProgress < 1">\n                            <md-step-body>\n                                <form name="step1" ng-submit="vm.submitCurrentStep(vm.stepData[0])">\n                                    <md-content class="md-padding">\n                                        <div>\n                                            <rzslider rz-slider-model="loan.value"\n                                                      rz-slider-options="slider.options">\n\n                                            </rzslider>\n                                        </div>\n                                        <div class="metadata-container">\n                                            <div class="metadata-loan-pair">\n                                                <div class="metadata-loan-title">Loan amount of</div>\n                                                <div class="metadata-loan-value">{{slider.value}}\u20AC</div>\n                                            </div>\n\n                                            <div class="metadata-loan-pair">\n                                                <div class="metadata-loan-title">Deadline</div>\n                                                <div class="metadata-loan-value metadata-loan-value-red">30 days</div>\n                                            </div>\n\n                                            <div class="metadata-loan-pair">\n                                                <div class="metadata-loan-title">Commission</div>\n                                                <div class="metadata-loan-value metadata-loan-value-red">{{(slider.value * 0.058) | number:2}}\u20AC</div>\n                                            </div>\n\n                                            <div class="metadata-loan-pair">\n                                                <div class="metadata-loan-title">Cover amount</div>\n                                                <div class="metadata-loan-value metadata-loan-value-red">{{(slider.value * 1.058) | number:2 }}\u20AC</div>\n                                            </div>\n                                        </div>\n                                    </md-content>\n                                    <md-step-actions layout="row">\n                                        <div flex layout="row" layout-align="end top">\n                                            <md-button class="md-warn">CANCEL</md-button>\n                                            <md-button type="submit" ng-disabled="!vm.stepData[0].data.value || vm.showBusyText" class="md-primary md-raised">NEXT</md-button>\n                                        </div>\n                                    </md-step-actions>\n                                </form>\n                            </md-step-body>\n                        </md-step>\n                        <md-step label="Details" md-complete="vm.stepData[1].data.completed" ng-disabled="vm.stepProgress < 2">\n                            <md-step-body>\n                                <form name="step2">\n                                    <md-content class="md-padding">\n                                        <div layout="row" layout-align="center top">\n                                            <div flex="nogrow" style="width: 400px">\n                                                <h4>Please enter the reason</h4>\n                                                <md-input-container class="md-block">\n                                                    <label>What are you going to do with the money</label>\n                                                    <input name="reason" ng-model="vm.stepData[1].data.reason"/>\n                                                </md-input-container>\n                                            </div>\n                                        </div>\n                                        <div layout="row" layout-align="center top">\n                                            <div flex="nogrow">\n                                                <md-checkbox ng-model="vm.stepData[1].data.confirmation" aria-label="Confirm">\n                                                    I confirm that I understand and agree to the <a href="/terms" target="_blank">terms of the contract</a>\n                                                </md-checkbox>\n                                            </div>\n                                        </div>\n                                    </md-content>\n                                    <md-step-actions layout="row">\n                                        <div flex>\n                                            <md-button ng-click="vm.moveToPreviousStep()">PREVIOUS</md-button>\n                                        </div>\n                                        <div flex layout="row" layout-align="end top">\n                                            <md-button class="md-warn">CANCEL</md-button>\n                                            <md-button ng-disabled="vm.showBusyText" ng-click="vm.submitCurrentStep(vm.stepData[1].data, !(vm.stepData[1].data.reason))" class="md-primary md-raised">\n                                                NEXT\n                                            </md-button>\n                                        </div>\n                                    </md-step-actions>\n                                </form>\n                            </md-step-body>\n                        </md-step>\n                        <md-step label="Finish" md-complete="vm.stepData[2].data.completed" ng-disabled="vm.stepProgress < 3">\n                            <md-step-body>\n                                <form name="step2">\n                                    <md-content class="md-padding">\n                                        <div layout="column" layout-align="center center" style="min-height: 200px">\n                                            <h4>We\'ll notify you soon once it will be created!</h4>\n                                            <md-button class="md-primary md-raised" href="/loans">GO TO YOUR LOANS</md-button>\n                                        </div>\n                                    </md-content>\n                                </form>\n                            </md-step-body>\n                        </md-step>\n                    </md-steppers>\n                </md-stepper-card-content>\n            </md-card>\n        </div>\n    </md-content>\n</div>');
$templateCache.put('partials/reset.html','<div class="container">\n  <div class="panel">\n    <div class="panel-body">\n      <div ng-if="messages.error" role="alert" class="alert alert-danger">\n        <div ng-repeat="error in messages.error">{{error.msg}}</div>\n      </div>\n      <div ng-if="messages.success" role="alert" class="alert alert-success">\n        <div ng-repeat="success in messages.success">{{success.msg}}</div>\n      </div>\n        <form ng-submit="resetPassword()">\n          <legend>Reset Password</legend>\n          <div class="form-group">\n            <label for="password">New Password</label>\n            <input type="password" name="password" id="password" placeholder="New password" class="form-control" ng-model="user.password" autofocus>\n          </div>\n          <div class="form-group">\n            <label for="confirm">Confirm Password</label>\n            <input type="password" name="confirm" id="confirm" placeholder="Confirm password" class="form-control" ng-model="user.confirm">\n          </div>\n          <div class="form-group">\n            <button type="submit" class="btn btn-success">Change Password</button>\n          </div>\n        </form>\n    </div>\n  </div>\n</div>\n');
$templateCache.put('partials/signup.html','<div class="container login-container">\n  <div class="panel">\n    <div class="panel-body">\n      <div ng-if="messages.error" role="alert" class="alert alert-danger">\n        <div ng-repeat="error in messages.error">{{error.msg}}</div>\n      </div>\n      <form ng-submit="signup()">\n        <legend>Create an account</legend>\n        <div class="form-group">\n          <label for="first-name">First Name</label>\n          <input type="text" name="name" id="first-name" placeholder="Name" class="form-control" ng-model="user.firstName" autofocus>\n        </div>\n        <div class="form-group">\n          <label for="last-name">Last Name</label>\n          <input type="text" name="name" id="last-name" placeholder="Name" class="form-control" ng-model="user.lastName" autofocus>\n        </div>\n\n        <div class="form-group">\n          <label for="email">Email</label>\n          <input type="email" name="email" id="email" placeholder="Email" class="form-control" ng-model="user.email">\n        </div>\n        <div class="form-group">\n          <label for="password">Password</label>\n          <input type="password" name="password" id="password" placeholder="Password" class="form-control" ng-model="user.password">\n        </div>\n        <div class="form-group">\n          <small class="text-muted">By signing up, you agree to the <a href="/terms">Terms of Service</a>.</small>\n        </div>\n        <button type="submit" class="btn btn-success">Create an account</button>\n      </form>\n      <div class="hr-title"><span>or</span></div>\n      <div class="btn-toolbar text-center">\n        <button class="btn btn-facebook" ng-click="authenticate(\'facebook\')">Sign in with Facebook</button>\n      </div>\n    </div>\n  </div>\n  <p class="text-center">\n    Already have an account? <a href="/login"><strong>Log in</strong></a>\n  </p>\n</div>\n');
$templateCache.put('partials/terms.html','<div class="container">\n    Terms\n</div>');}]);