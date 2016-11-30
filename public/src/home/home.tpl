<div ng-controller="HomeController as home">
    <!-- <div class="row row-offcanvas row-offcanvas-right"> -->
        <!-- <div class="row"> -->
                <!-- <div class="col-lg-7 col-md-7 col-sm-9 col-xs-12 main col-lg-offset-2 col-md-offset-2 col-sm-offset-3"> -->

                <section ng-repeat = "ques in home.queslist" ng-if="ques.is_answrd">

                    <!-- question posted -->
                    <h2 class="ques" ui-sref = "question({ques_id: ques.id})">{{ques.content}}</h2>

                    <!-- metadata about the question-username,date-time -->
                    <div class="ques-info">
                        <span class="ques-user">
                            <i class="fa fa-user-o" aria-hidden="true"></i> {{ques.username}}
                        </span>
                        <span class="ques-date">
                            <i class="fa fa-clock-o" aria-hidden="true"></i> {{ques.pdate}}
                        </span>
                    </div>

                    <!-- most upvoted answer-->
                    <div class="ans">
                        <p>{{ques.topAns.$$state.value.content}}</p>
                        <!-- total answer of the previous question -->
                        <div><a ui-sref = "question({ques_id: ques.id})">view all<span class="ans-count"> {{ques.is_answrd}} </span> answers</a></div>


<!--                        <div><a ui-sref = "question({ques_id: ques.id})">view all<span class="ans-count"> {{ques.topAns.$$state.value.comment_count}} </span> comments</a></div>-->
                    </div>
                    

                    <!-- show comments preferabbly 3 comments in order of like as each comment wil have like button and comment button -->
                    
                    <!-- <div class="other-comments" ng-if = "ques.topAns.$$state.value.comment_count">
                        <p class="user-comment" ng-repeat = "com in ques.topAns.$$state.value.topCom">
                            <span class="user">{{com.uname}}</span>
                            <span class="comment">{{com.content}}</span>
                        </p>
                        
                        <div class="comment-count">
                            <a ui-sref = "question({ques_id: ques.id})">view all<span class="ans-count">
                                {{ques.topAns.$$state.value.comment_count}} </span> comments</a>
                        </div>
                    </div>
 -->
                    <!-- different options related to answer like-upvote,downvote -->
                    <div class="ans-info">

                        <span class="ans-up">
                            <a href="" ng-click = "home.update_up(ques.id)" ng-if = "verifiedAcc"><i class="fa fa-chevron-circle-up" aria-hidden="true"></i></a> {{ques.upvote}}
                        </span>|
                        <span class="ans-down">
                            <a href="" ng-click = "home.update_dw(ques.id)" ng-if = "verifiedAcc"><i class="fa fa-chevron-circle-down" aria-hidden="true"></i></a> {{ques.downvote}}
                            </span>

                        <span class="ans-write"><a ui-sref = "question({ques_id: ques.id})" ><i class="fa fa-pencil" aria-hidden="true"></i> Answer</a></span>

                        <!--<span class="ans-comment"><a role="button" data-toggle="collapse" href="#write-comment" aria-expanded="false" aria-controls="write-comment"><i class="fa fa-comment-o" aria-hidden="true"></i> Comment</a></span>-->

                        <!-- <span class="ans-report"><a href="" data-toggle="tooltip" data-placement="top" title="Ban this Quesion"><i class="fa fa-ban" aria-hidden="true"></i> Report</a></span> -->
                    </div>

                    <!-- tags related to the question -->
                    <div class="tags-info">
                        <span class="tag-links" ui-sref = "listed({tag_id:ques.tag_id})">{{ques.tag}}</span>
                    </div>
                </section>
            <!-- </div> -->
        <!-- </div> -->
    <!-- </div> -->


   <!--  <div class="col-xs-6 col-sm-3 sidebar-offcanvas" id="sidebar">

    </div> -->
</div>