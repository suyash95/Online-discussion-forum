            <div class="col-lg-7 col-md-7 col-sm-9 col-xs-12 main col-lg-offset-2 col-md-offset-2 col-sm-offset-3">
                    <!-- question -->
                    <h2 class="ques">
                    {{question.allData.contents}}
                    Which time-table is being followed on this saturday?
                    </h2>

                    <!-- question metadata-user,date-time -->
                    <div class="ques-info">
                        <span class="ques-user">
                            <i class="fa fa-user-o" aria-hidden="true"></i> Sumit
                        </span>
                        <span class="ques-date">
                            <span class="glyphicon glyphicon-time" aria-hidden="true"></span> 13 Oct, 2016
                        </span>
                    </div>

                    <!-- tags related to question -->
                    <div class="tags-info">
                        <span class="tag-links">Depatment</span>
                        <span class="tag-links">Holiday</span>
                    </div>

                   
                <section ng-repeat="ans in question.answerList">

                    <!-- answer -->
                    <div class="ans">
                        <p>
                        {{ans.content}}

                        I heard that the results will come out on 15 September but i'm not sure. As of now, nothing has been heard from the administrative block.</p>
                        <div><a href="">view all<span class="ans-count">15</span> answers</a></div>
                    </div>

                    <!-- comments related to this answer -->
                    <div class="other-comments">
                        <p class="user-comment">
                            <span class="user">ravi_kathi</span>
                            <span class="comment">this is very helpful. Thanks!!</span>
                        </p>
                        <p class="user-comment">
                            <span class="user">suyash_singh_gaur</span>
                            <span class="comment">I talked to them they said it will come out on 16 sep</span>
                        </p>
                        <p class="user-comment">
                            <span class="user">shreyans_nahata</span>
                            <span class="comment">Why don't they just confirm the date</span>
                        </p>
                        <p class="user-comment">
                            <span class="user">sumit_narang</span>
                            <span class="comment">It's 7 sem does it even matter<span>
                        </p>
                        <div class="comment-count">
                            <a href="">View all <span class="ans-no">20 </span>answers</a>
                        </div>
                    </div>
                    
                    <!-- upvote,downvote,comment,report for each answer -->
                    <div class="ans-info">
                        <span class="ans-up">
                        {{ans.upvote}}
                        <a href=""><i class="fa fa-chevron-circle-up" aria-hidden="true"></i></a> 22</span>|
                        <span class="ans-down">
                        {{ans.downvote}}
                        <a href=""><i class="fa fa-chevron-circle-down" aria-hidden="true"></i></a> 4</span>

                        <span class="ans-comment"><a role="button" data-toggle="collapse" href="#write-comment" aria-expanded="false" aria-controls="write-comment">
                        <i class="fa fa-comment-o" aria-hidden="true"></i> Comment</a></span>

                        <span class="ans-report"><a href="" data-toggle="tooltip" data-placement="top" title="Ban this Quesion">
                        <i class="fa fa-ban" aria-hidden="true"></i> Report</a></span>
                    </div>
                    
                    
                </section>

                <label for="answer" class="sr-only">Write answer</label>
                <input type="text" name="answer" class="form-control" ng-model = "question.new_answer">
                <button class="btn btn-lg btn-primary btn-block" type="submit" ng-click="question.addAnswer()">Submit answer</button>
            </div>