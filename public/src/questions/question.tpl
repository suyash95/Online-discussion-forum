<div class="col-lg-7 col-md-7 col-sm-9 col-xs-12 main col-lg-offset-2 col-md-offset-2 col-sm-offset-3" ng-controller = "QuestionController as question">
    <!-- question -->
    <h2 class="ques">
        {{question.allData[0].content}}

    </h2>

    <!-- question metadata-user,date-time -->
    <div class="ques-info">
                        <span class="ques-user">
                            <i class="fa fa-user-o" aria-hidden="true"></i> {{question.allData[0].username}}
                        </span
                        <span class="ques-date">
                            <span class="glyphicon glyphicon-time" aria-hidden="true"></span> {{question.allData[0].pdate}}
                        </span>
    </div>

    <!-- tags related to question -->
    <div class="tags-info">
        <span class="tag-links" ui-sref = "listed({tag_id: question.allData[0].tag_id})">{{question.allData[0].tag}}</span>

    </div>


    <section ng-repeat="ans in question.answerList">

        <!-- answer -->
        <div class="ans">
            <p>
                {{ans.content}}

            </p>

        </div>

        <!-- upvote,downvote,comment,report for each answer -->
        <div class="ans-info">

                        <span class="ans-up">
                            <a href="" ng-click = "question.update_up(ans.id)" ><i class="fa fa-chevron-circle-up" aria-hidden="true"></i></a> {{ans.upvote}}
                        </span>|
                        <span class="ans-down">

                            <a href="" ng-click = "question.update_dw(ans.id)"  ><i class="fa fa-chevron-circle-down" aria-hidden="true"></i></a> {{ans.downvote}}
                              </span>
            <div class="ques-info">
                        <span class="ques-user">
                            <i class="fa fa-user-o" aria-hidden="true"></i> {{ans.username}}
                        </span

            </div>



            <!--<span class="ans-write"><a ui-sref = "question({ques_id: ques.id})" ><i class="fa fa-pencil" aria-hidden="true"></i> Answer</a></span>
-->
            <!--<span class="ans-comment"><a role="button" data-toggle="collapse" href="#write-comment" aria-expanded="false" aria-controls="write-comment"><i class="fa fa-comment-o" aria-hidden="true"></i> Comment</a></span>-->

            <span class="ans-report"><a href="" data-toggle="tooltip" data-placement="top" title="Ban this Quesion"><i class="fa fa-ban" aria-hidden="true"></i> Report</a></span>
        </div>

        <!-- comments related to this answer -->
        <div class="other-comments" ng-controller = "CommentController as comment" >

            <div>
                <div class="comment-count">
                    <a ng-click = "comment.upd(ans.id)"  >View all Comments</a>
                </div>

                <p class="user-comment" ng-repeat = "comm in comment.commentList">

                    <span class="user">{{comm.uname}}</span>
                    <span class="comment">{{comm.content}}</span>

                </p>

            </div>

            <form class="post-comment">

                <div class="comment-outer">
                    <input type="text" class="inp-comment comment-box" placeholder="Enter Comment" ng-model = "comment.new_comment">
                </div>
                <button class="sub-comment" type="submit" ng-click="comment.addComment(ans.id)">Submit Comment</button>

            </form>
        </div>


    </section>


    <form class="post-comment">
        <div class="comment-outer">
            <input type="text" class="inp-comment comment-box" placeholder="Enter Answer" ng-model = "question.new_answer">
        </div>
        <button type="submit" class="sub-comment" ng-click="question.addAnswer()">Submit</button>
    </form>
</div>