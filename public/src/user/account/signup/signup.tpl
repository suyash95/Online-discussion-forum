<div class="vertical-alignment-helper">
  <div class="vertical-align-center">

    <!-- outer box -->
    <div ng-controller="SignUpController as signup" class="gradient col-lg-8 col-md-10 col-sm-8 col-xs-12 col-lg-offset-2 col-md-offset-1  col-sm-offset-2  col-xs-offset-0">


      <div class="col-lg-8 col-md-10 col-sm-10 col-xs-10 col-lg-offset-2 col-md-offset-1 col-sm-offset-1 col-xs-offset-1">

        <!--starting form-->
        <form ng-submit="signup.submit()">

          <div ng-hide="!signup.enable" class="alert alert-warning" data-ng-bind= "signup.message">

          </div>

          <!--College-->
          <div class="form-group">
            <input data-ng-model="signup.clg_name" type="text" class="form-control" id="inputClg" placeholder="Your College">
          </div>

          <!--Username-->
          <div class="form-group">
            <input data-ng-model="signup.name" type="text" class="form-control" id="inputName" placeholder="Name">
          </div>

          <!--Phone-->
          <div class="form-group">
            <input data-ng-model="signup.phone" type="phone" pattern="[789][0-9]{9}" class="form-control" id="inputPhone" placeholder="Mobile No.">
          </div>

          <!--Usn/id-->
          <div class="form-group">
            <input data-ng-model="signup.usn" type="text" class="form-control" id="inputUsn" placeholder="USN/ID">
          </div>

          <!--Email-->
          <div class="form-group">
            <input data-ng-model="signup.email" type="email" class="form-control" id="inputEmail" placeholder="Email">
          </div>

          <!--Password-->
          <div class="form-group">
            <input data-ng-model="signup.password" type="password" class="form-control" id="inputPassword" placeholder="Password">
          </div>

          <!--Student/faculty-->
          <div class="form-group">
            <select data-ng-model="signup.typ" class="form-control select-option">
              <!--<option>User Type:</option>-->
              <option value = 1 >Student</option>
              <option value = 2 >Faculty</option>
            </select>
          </div>

          <!--Department-->
          <div class="form-group">
            <select data-ng-model="signup.dept_name" class="form-control select-option">
              <!--<option>Department:</option>-->
              <option value="aero">Aerospace</option>
              <option value="biot">Biotechnology</option>
              <option>Chemical</option>
              <option>Civil</option>
              <option value = "cse">Computer Science</option>
              <option>Electrical &amp; Electronics</option>
              <option>Electronics &amp; Communication</option>
              <option>Electronics &amp; Instrumentation</option>
              <option>Industrial Engineering &amp; Management</option>
              <option>Master of Computer Applications</option>
              <option>Mechanical</option>
              <option>Chemistry</option>
              <option>Physics</option>
              <option>Mathematics</option>
            </select>
          </div>

<!--
          &lt;!&ndash;upload id card&ndash;&gt;
          <div class="form-group form-custom-file">
            <input type="file" class="form-control-custom" id="inputId">
          </div>
          <span class="help-block">Upload ID Card Photo</span><br>
-->

          <!-- checkbox remember me -->
          <div class="checkbox">
            <label>
              <input type="checkbox" value="remember-me"> Remember me
            </label>
          </div>

          <!--submit button-->
          <button  type="submit" class="btn btn-default btn-custom">Sign Up</button>
        </form>
      </div><!--inner padding form-->

      <div id="footer" class="col-lg-12 col-md-12 col-sm-12 col-xs-12"></div>

      <div class="login-footer col-lg-12 col-md-12 col-sm-12 col-xs-12">
        By signing Up, you agree to our <a href="#">Terms &amp; Condition</a>
        <br>Already have an account? <a ui-sref="account.login">Log In</a>
      </div>

    </div>
  </div>
</div>