<div class="row" ng-controller="QuestionController as question">
    <div class="col-md-4" >
        <div class = "col-md-8">
            <h3>{{question.curQuestionId}}</h3>

        </div>

    </div>
    <div class="row">
        <div class="col-md-8">
            <div class="list-group">
                <p ng-repeat="ans in question.answerList">
                    {{ans.content}}</br>
                    {{ans.upvote}}</br>
                    {{ans.downvote}}</br>
                    {{ans.u_id}}</br>
                </p>
            </div>
        </div>
    </div>
<div>
    <label for="answer" class="sr-only">Write answer</label>
    <input type="text" name="answer" class="form-control" ng-model = "question.new_answer">
    <button class="btn btn-lg btn-primary btn-block" type="submit" ng-click="question.addAnswer()">Submit answer</button>
</div>
        </div>
