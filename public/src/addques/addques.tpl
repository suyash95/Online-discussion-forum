<div ng-controller="AddQuesController as addques">
    <label for="question" class="sr-only">Write Question</label>
    <input type="text" name="question" class="form-control" ng-model = "addques.new_ques">
    <select class="form-control" ng-controller = "TagController as tag" >
        <option ng-repeat ="val in tag.tagsList" value="{{val.id}}" data-ng-bind="addques.tag_id">{{val.name}}</option>
    </select>
    <button class="btn btn-lg btn-primary btn-block" type="submit" ng-click="addques.addQuestion()">Submit Question</button>
</div>