<div ng-controller="tagListController as listed">
    <div class="row row-offcanvas row-offcanvas-right">
        <div class="row">
            <div class="col-xs-6 col-lg-4" ng-repeat = "ques in listed.queslist">

                <h3>{{ques.content}}</h3>
                <p> {{ques.upvote}}</p>
                <p> {{ques.downvote}}</p>

                <p><a class="btn btn-default"  ui-sref = "question({ques_id: ques.id})" role="button">View</a></p>
            </div>
        </div>
    </div>

    <div class="col-xs-6 col-sm-3 sidebar-offcanvas" id="sidebar">

    </div>
</div>
