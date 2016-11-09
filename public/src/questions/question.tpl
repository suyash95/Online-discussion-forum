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
            <label for="review" class="sr-only">Write review</label>
            <input type="text" name="rating" class="form-control" ng-model = "product.Urating">
            <input type="text" id="review" class="form-control" placeholder="review" ng-model="product.Ureview">
            <button class="btn btn-lg btn-primary btn-block" type="submit" ng-click="product.addReview()">Submit review</button>
        </div>
    </div>
</div>
