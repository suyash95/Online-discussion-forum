<div ng-controller="tagListController as listed">
    <div class="row row-offcanvas row-offcanvas-right">
        <div class="row">
                <div class="col-lg-7 col-md-7 col-sm-9 col-xs-12 main col-lg-offset-2 col-md-offset-2 col-sm-offset-3">

                <section ng-repeat = "ques in listed.queslist">

                    <!-- question posted -->
                    <h2 class="ques">{{ques.content}}
                    Which time-table is being followed on this saturday?</h2>

                    <!-- metadata about the question-username,date-time -->
                    <div class="ques-info">
                        <span class="ques-user">
                            <i class="fa fa-user-o" aria-hidden="true"></i> Sumit
                        </span>
                        <span class="ques-date">
                            <span class="glyphicon glyphicon-time" aria-hidden="true"></span> 13 Oct, 2016
                        </span>
                    </div>

                    <!-- most upvoted answer-->
                    <div class="ans">
                        <p>I heard that the results will come out on 15 September but i'm not sure. As of now, nothing has been heard from the administrative block.</p>
                        <!-- total answer of the previous question -->
                        <div><a href="">view all<span class="ans-count">15</span> answers</a></div>
                    </div>
                    

                    <!-- show comments preferabbly 3 comments in order of like as each comment wil have like button and comment button -->
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
                        <!-- count of comment -->
                        <div class="comment-count">
                            <a href="">View all <span class="ans-no">20 </span>answers</a>
                        </div>
                    </div>

                    <!-- different options related to answer like-upvote,downvote -->
                    <div class="ans-info">

                        <span class="ans-up">
                            <a href="">{{ques.upvote}}<i class="fa fa-chevron-circle-up" aria-hidden="true"></i></a> 22
                        </span>|
                        <span class="ans-down">
                            <a href="">{{ques.downvote}}<i class="fa fa-chevron-circle-down" aria-hidden="true"></i></a> 4
                            </span>

                        <span class="ans-write"><a href=""><i class="fa fa-pencil" aria-hidden="true"></i> Answer</a></span>

                        <span class="ans-comment"><a role="button" data-toggle="collapse" href="#write-comment" aria-expanded="false" aria-controls="write-comment"><i class="fa fa-comment-o" aria-hidden="true"></i> Comment</a></span>

                        <span class="ans-report"><a href="" data-toggle="tooltip" data-placement="top" title="Ban this Quesion"><i class="fa fa-ban" aria-hidden="true"></i> Report</a></span>
                    </div>

                    <!-- tags related to the question -->
                    <div class="tags-info">
                        <span class="tag-links">Depatment</span>
                        <span class="tag-links">Holiday</span>
                    </div>

                    <p><a class="btn btn-default"  ui-sref = "question({ques_id: ques.id})" role="button">View</a></p>
                    
                </section>
            </div>
        </div>
    </div>


    <div class="col-xs-6 col-sm-3 sidebar-offcanvas" id="sidebar">

    </div>
</div>