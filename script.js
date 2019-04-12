// TODO(you): Write the JavaScript necessary to complete the homework.

// You can access the RESULTS_MAP from "constants.js" in this file since
// "constants.js" has been included before "script.js" in index.html.

var checkboxs = document.getElementsByClassName('checkbox');

var boxs = document.querySelectorAll(".choice-grid div");
var result_section = document.getElementById('test_result');

// for reset 
var last_qid = "";

window.onload = function () {
    add_onclick_listen();
}

function add_onclick_listen(){
    for (var i = 0; i < boxs.length; i++) {
        boxs[i].onclick = function () {
            change_opacity(this);
            complete_check();
        };
    }

    var reset_btn = document.getElementById("reset");
    reset_btn.onclick = function () {
        result_section.style.display = "none";
        
        for (var i = 0; i < boxs.length; i++) {
            boxs[i].style.opacity = "1";
            boxs[i].onclick = function(){
                change_opacity(this);
                complete_check();
            };
        }
        var answer = document.querySelectorAll('.answer');
        for (var i = 0; i < answer.length; i++) {
            answer[i].classList.remove("answer");
            answer[i].childNodes[3].src = "images/unchecked.png";
        }

    };
}

function change_opacity(choice){
    //console.log(choice);
    
    var choosed_id = choice.dataset.choiceId;
    var q_id = choice.dataset.questionId;

    last_qid = q_id;

    var query_q_ele = document.querySelectorAll('[data-question-id=\''+ q_id +'\']');

    // var dataqid = option.getAttribute("questionId");
    for (var i = 0; i < query_q_ele.length; i++ ){
        if (query_q_ele[i].dataset.choiceId == choosed_id){
            query_q_ele[i].classList.add("answer");
            query_q_ele[i].style.opacity = 'inherit';
            // query_q_ele[i].style.backgroundColor = '#cfe3ff';

            console.log(query_q_ele[i].childNodes[3]);            
            query_q_ele[i].childNodes[3].src = "images/checked.png";
        } 
        else{
            query_q_ele[i].style.opacity = "0.6";
            query_q_ele[i].childNodes[3].src = "images/unchecked.png";
            query_q_ele[i].classList.remove("answer");

        }
    }
}

function complete_check(){
    var answer = document.querySelectorAll('.answer');
    var dog = "";
    if(answer.length == 3){
        console.log("complete");

        for (var i = 0; i < boxs.length; i++) {
            boxs[i].onclick = "";
        }
        
        for(var i=0; i< answer.length; i++){
            if (answer[i].dataset.questionId == "one"){
                dog = answer[i].dataset.choiceId;
            }
        }


        //console.log(result_section.childNodes[1]);
        result_section.style.display="block";
        result_section.childNodes[1].innerHTML = "You got: " + RESULTS_MAP[dog]['title'];
        result_section.childNodes[3].innerHTML = RESULTS_MAP[dog]['contents'];
    }
}

// function change_img(choice) {
//     //alert('click');
//     console.log(choice.childNodes[3]);
//     choice = choice.childNodes[3];
//     // console.log(choice.getAttribute('src'));

//     if (choice.getAttribute('src') == "images/unchecked.png")
//         choice.src = "images/checked.png";
//     else
//         choice.src = "images/unchecked.png";
// }

function test(){
    //console.log("Well...");
    
}