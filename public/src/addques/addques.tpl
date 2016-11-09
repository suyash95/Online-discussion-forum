<div ng-controller="AddQuesController as addques">
    <label for="question" class="sr-only">Write Question</label>
    <input type="text" name="question" class="form-control" ng-model = "addques.new_ques">
    <select class="form-control"  >
        <option ng-repeat ="val in addques.tagsList" value="{{val.id}}" ng-model="addques.getTag(val.id)">{{val.name}}</option>
    </select>
    <button class="btn btn-lg btn-primary btn-block" type="submit" ng-click="addques.addQuestion()">Submit Question</button>
</div>