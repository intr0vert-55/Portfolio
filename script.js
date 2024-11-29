$(document).ready(function(){
    // $('.skillsContent').hide();
    let skillsClicked = false;
    let projectsClicked = false;
    let deg = 0;
    $('.skills, .projects').on("click", function(){
        let divTag = this.className;
        // console.log(divTag);
        divTag = "." + divTag.split(" ")[1] + "btn";
        let arrow = $(divTag + " .arrow");
        // console.log(divTag);
        if(divTag.includes("skills")){
            // console.log(divTag);
            $(divTag + " .skillsContent").toggleClass('active');
            if(skillsClicked){
                skillsClicked = false;
                arrow.css("rotate", "0deg");
            } else{
                arrow.css("rotate", "180deg");
                skillsClicked = true;
            }
        } else if(divTag.includes("projects")){
            // console.log(divTag);
            $(divTag + " .projectsContent").toggleClass('active');
            if(projectsClicked){
                projectsClicked = false;
                arrow.css("rotate", "0deg");
            } else{
                arrow.css("rotate", "180deg");
                projectsClicked = true;
            }
        }
    });

    $('.summary').hover(function(){
        // console.log('hi');
        $('.mySummary').toggleClass('active');
        deg += 180;
        // console.log(deg);
        $('.summarybtn .summary .titleOfSummary .arrow').css("rotate", deg + "deg");
    });

    $('.card2').hover(function(){
        let divTag = $(this);
        $('.projectsContent').toggleClass('descView');
        $('.card2').toggleClass('inActiveCard');
        divTag.removeClass('inActiveCard');
        divTag.toggleClass('activeCard');
    });
});