<div ng-controller="AddQuesController as addques">
<!--
    <label for="question" class="sr-only">Write Question</label>
    <input type="text" name="question" class="form-control" ng-model = "addques.new_ques">
    <select class="form-control"  >
        <option ng-repeat ="val in addques.tagsList" value="{{val.id}}" ng-model="addques.getTag(val.id,val.name)">{{val.name}}</option>
    </select>
    <button class="btn btn-lg btn-primary btn-block" type="submit" ng-click="addques.addQuestion()">Submit Question</button>
-->

    <form class="post-comment">
        <div class="form-group">
            <input  type="text" class="form-control"  placeholder="Add Question" ng-model = "addques.new_ques">
        </div>
        <div class="form-group">
            <select class="form-control select-option">
                <option ng-repeat ="val in addques.tagsList" value="{{val.id}}" ng-model="addques.getTag(val.id,val.name)">{{val.name}}</option>

            </select>
        </div>
        <button type="submit" class="sub-comment" ng-click="addques.addQuestion()">Submit</button>
    </form>
</div>