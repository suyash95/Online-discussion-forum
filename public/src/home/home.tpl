<div ng-controller="HomeController as home">
    <div class="row row-offcanvas row-offcanvas-right">
        <div class="row">
            <div class="col-xs-6 col-lg-4" ng-repeat = "ques in home.queslist">

                <h3>{{ques.content}}</h3>
                <p> {{ques.upvote}}</p>
                <p> {{ques.downvote}}</p>

                <p><a class="btn btn-default"  ui-sref = "question({ques_id: ques.id})" role="button">View</a></p>
            </div>
        </div>
    </div>

    <div class="col-xs-6 col-sm-3 sidebar-offcanvas" id="sidebar">
        <h2>Choose tags:</h2>
        <u class="list-group">

            <li ng-repeat="each in home.tagsList"  class="list-group-item" value="{{each.id}}">{{each.name}}</li>

        </u>
    </div>
</div>
