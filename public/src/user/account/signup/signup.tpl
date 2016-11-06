<div ng-controller="SignUpController as signup">
<form class="form-signin" ng-submit="signup.submit()">

  <h2 class="form-signin-heading">Sign Up Page</h2>

  <div ng-hide="!signup.enable" class="alert alert-warning" data-ng-bind= "signup.message">

  </div>
  <label for="inputDept" class="sr-only" >Your Department</label>
  <input data-ng-model="signup.dept_name" type="text" id="inputDept" class="form-control" placeholder="Department" required autofocus>
  <label for="inputClg" class="sr-only" >Your College</label>
  <input data-ng-model="signup.clg_name" type="text" id="inputClg" class="form-control" placeholder="College" required>
  <label for="inputUsn" class="sr-only" >Your USN</label>
  <input data-ng-model="signup.usn" type="text" id="inputUsn" class="form-control" placeholder="USN" required>

  <label for="inputName" class="sr-only" >Your Name</label>
  <input data-ng-model="signup.name" type="text" id="inputName" class="form-control" placeholder="Name" required>
  <label for="inputEmail" class="sr-only">Email address</label>
  <input data-ng-model="signup.email" type="text" id="inputEmail" class="form-control" placeholder="Email address" required >
  <label for="inputPassword" class="sr-only">Password</label>
  <input data-ng-model="signup.password" type="password" id="inputPassword" class="form-control" placeholder="Password" required>
  <label for="inputPhone" class="sr-only" >Your Phone No.</label>
  <input data-ng-model="signup.phone" type="number" id="inputPhone" class="form-control" placeholder="Phone No." required>
  <label for="inputTyp" class="sr-only" >Student or Staff?</label>
  <input data-ng-model="signup.typ" type="text" id="inputTyp" class="form-control" placeholder="Student/Staff" required>

  <div class="checkbox">
    <label>
      <input type="checkbox" value="remember-me"> Remember me
    </label>
  </div>
  <button ng-disabled="signup.enable" class="btn btn-lg btn-primary btn-block" type="submit">Sign Up</button>
</form>

</div>
