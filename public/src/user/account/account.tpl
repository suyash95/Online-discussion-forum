<div ng-controller="AccountController as account">
<ul class="nav nav-tabs">
  <li ng-class="{'active': !isSignUp}">
  	<a ui-sref-active="ak-active-tab" ui-sref="account.login">Log In</a>
  </li>
  <li ng-class="{'active': isSignUp}">
  	<a ui-sref-active="ak-active-tab" ui-sref="account.signup" >Sign Up</a>
  </li>
</ul>
</div>
<div class="col-md-6 col-md-offset-3">

	<ui-view></ui-view>
</div>