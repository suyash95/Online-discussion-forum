<!-- css bootsign.css and modal.css add custom style from login1.html-->

<!-- Login Modal -->

<!-- vertical align to align it vertically -->
<div class="vertical-alignment-helper">
  <div class="vertical-align-center">

    <!-- outer box -->
    <div ng-controller="LoginController as login" class="gradient col-lg-12 col-md-12 col-sm-12 col-xs-12 col-lg-offset-0 col-md-offset-0  col-sm-offset-0  col-xs-offset-0">

      <!-- inner box -->
      <div class="col-lg-8 col-md-10 col-sm-10 col-xs-10 col-lg-offset-2 col-md-offset-1 col-sm-offset-1 col-xs-offset-1">

        <!--starting form-->
        <form ng-submit = "login.submit()" class="form-signin">

          <!--Email-->
          <div class="form-group">
            <input data-ng-model="login.usn" type="text" class="form-control" id="exampleInputEmail1" placeholder="USN">
          </div>

          <!--Password-->
          <div class="form-group">
            <input data-ng-model="login.password" type="password" class="form-control" id="exampleInputEmail1" placeholder="Password">
          </div>

          <!--submit button-->
          <button type="submit" class="btn btn-default btn-custom">Login</button>

          <div data-ng-bind="login.Message" >
            <!-- Error Message here!! -->
          </div>

        </form>

      </div><!--inner padding form-->

      <div id="footer" class="col-lg-12 col-md-12 col-sm-12 col-xs-12"></div>

      <div class="login-footer col-lg-12 col-md-12 col-sm-12 col-xs-12">
        Don't have an account <a ui-sref="account.signup">Sign Up</a>
        <br><a href="#">Forgot Password ?</a>
      </div>

    </div>
  </div>
</div>
