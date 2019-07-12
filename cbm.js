var current_value = 0;
var counselor_total = 0;
var camper_total = 0;
var last_action = 0;
var final_counselor = 0;
var final_camper = 0;
var next_alert;
var old_catotal;
var old_cototal;
var undo_trigger = 0;

function startGame(){
  document.getElementById("initial").style.display = "none";
  document.getElementById("title").style.display = "none";
  document.getElementById("total").style.display = "block";
  document.getElementById("points").style.display = "block";
}
function pointSet(number){
  current_value = number;
  old_catotal = camper_total;
  old_cototal = counselor_total;
  document.getElementById("points").style.display = "none";
  document.getElementById("timer").style.display = "block";
}
function skipTime(){
  clearTimeout(next_alert);
  clearTimeout(num1);
  clearTimeout(num2);
  clearTimeout(num3);
  clearTimeout(num4);
  clearTimeout(num5);
  clearTimeout(num6);
  document.getElementById("timer").style.display = "none";
  document.getElementById("endTime").style.display = "none";
  document.getElementById("timer").style.display = "none";
  document.getElementById("change").style.display = "block";
}
function addPoints(number){
  if(number == 1){
    camper_total = camper_total + current_value;
    last_action = 2;
    document.getElementById("coun_add").disabled = true;
    document.getElementById("camp_add").disabled = true;
  }
  else{
    counselor_total = counselor_total + current_value;
    last_action = 1;
    document.getElementById("coun_add").disabled = true;
    document.getElementById("camp_add").disabled = true;
  }
  updateScores()
}
function removePoints(number){
  if(number == 1){
    camper_total = camper_total - current_value;
    last_action = 4;
    document.getElementById("coun_rem").disabled = true;
    document.getElementById("camp_rem").disabled = true;
  }
  else{
    counselor_total = counselor_total - current_value;
    last_action = 3;
    document.getElementById("coun_rem").disabled = true;
    document.getElementById("camp_rem").disabled = true;
  }
  updateScores()
}
function undo(){
  if (undo_trigger == 0){
    if (last_action == 1){
      counselor_total = counselor_total - current_value;
      last_action = 3;
    }
    else if (last_action == 2){
      camper_total = camper_total - current_value;
      last_action = 4;
    }
    else if (last_action == 3){
      counselor_total = counselor_total + current_value;
      last_action = 1;
    }
    else if (last_action == 4){
      camper_total = camper_total + current_value;
      last_action = 2;
    }
    undo_trigger = 1;
  }
  else{
    camper_total = old_catotal;
    counselor_total = old_cototal;
    undo_trigger = 0;
  }
  updateScores();
  enable_all();
}
function enable_all(){
  document.getElementById("coun_add").disabled = false;
  document.getElementById("camp_add").disabled = false;
  document.getElementById("coun_rem").disabled = false;
  document.getElementById("camp_rem").disabled = false;
  document.getElementById("coun_tru").disabled = false;
  document.getElementById("coun_fal").disabled = false;
  document.getElementById("camp_fal").disabled = false;
  document.getElementById("camp_tru").disabled = false;
  document.getElementById("time_count").disabled = false;
}
function updateScores(){
  document.getElementById("coun_total").innerHTML = counselor_total;
  document.getElementById("camp_total").innerHTML = camper_total;
}
function manual(){
  var tot_coun = document.getElementById("a_counselors").value;
  var tot_camp = document.getElementById("a_campers").value;
  if (tot_coun != 0 && tot_camp == 0){
    counselor_total = Number(tot_coun);
  }
  else if (tot_camp != 0 && tot_coun == 0){
    camper_total = Number(tot_camp);
  }
  else if (tot_camp != 0 && tot_coun != 0){
    camper_total = Number(tot_camp);
    counselor_total = Number(tot_coun);
  }
  updateScores();
}
function nextPage(){
  document.getElementById("change").style.display = "none";
  document.getElementById("points").style.display = "block";
  document.getElementById("total").style.display = "block";
  document.getElementById("sure").style.display = "none";
  document.getElementById("giant_num").innerHTML = "";
  undo_trigger = 0;
  enable_all()
}
function enterMan(){
  if (document.getElementById("change").style.display == "block"){
    document.getElementById("change").style.display = "none";
    document.getElementById("manual_page").style.display = "block";
  }
  else if (document.getElementById("points").style.display == "block"){
    document.getElementById("points").style.display = "none";
    document.getElementById("manual_page").style.display = "block";
  }
  document.getElementById("a_counselors").innerHTML=counselor_total;
  document.getElementById("a_campers").innerHTML= camper_total;
  enable_all()
}
function exit(){
  document.getElementById("manual_page").style.display = "none";
  document.getElementById("final").style.display = "none";
  document.getElementById("points").style.display = "block";
}
var num1;
var num2;
var num3;
var num4;
var num5;
var num6;
function countDown(){
  document.getElementById("time_count").disabled = true;
  var x = document.getElementById("giant_num");
  x.innerHTML = 5;
  num1 = setTimeout(function(){ x.innerHTML="4" }, 1000);
  num2 = setTimeout(function(){ x.innerHTML="3" }, 2000);
  num3 = setTimeout(function(){ x.innerHTML="2" }, 3000);
  num4 = setTimeout(function(){ x.innerHTML="1" }, 4000);
  num5 = setTimeout(function(){ x.innerHTML="0" }, 5000);
  num6 = setTimeout(function(){document.getElementById("timer").style.display = "none"}, 5000);
  next_alert = setTimeout(function(){document.getElementById("endTime").style.display = "block"}, 5000);
}
function resetGame(){
  document.getElementById("final_screen").style.display = "none";
  document.getElementById("manual_page").style.display = "none";
  document.getElementById("total").style.display = "none";
  document.getElementById("sure").style.display = "block";
}
function resetGameSure(){
  counselor_total = 0;
  camper_total = 0;
  document.getElementById("final_screen").style.display = "none";
  document.getElementById("manual_page").style.display = "none";
  document.getElementById("total").style.display = "none";
  document.getElementById("sure").style.display = "none";
  document.getElementById("about_page").style.display = "none";
  document.getElementById("initial").style.display = "block";
  document.getElementById("title").style.display = "block";
  updateScores();
  enable_all();
}
function about(){
  document.getElementById("initial").style.display = "none";
  document.getElementById("about_page").style.display = "block";
}
function final(){
  document.getElementById("points").style.display = "none";
  document.getElementById("final").style.display = "block";
}
function finalCorrect(){
  var camp = document.getElementById("f_campers").value;
  var coun = document.getElementById("f_counselors").value;
  final_camper = Number(camp);
  final_counselor = Number(coun);
  if (final_counselor>counselor_total && counselor_total >= 0){
    alert("Error: Cannot bid more than total");
    final_counselor = 0;
  }
  else if (final_camper>camper_total && camper_total >= 0 ){
    alert("Error: Cannot bid more than total");
    final_camper = 0;
  }
  else if (final_counselor < 0) {
    alert("Error: Cannot bid negative values");
    final_counselor = 0;
  }
  else if (final_camper< 0) {
    alert("Error: Cannot bid negative values");
    final_camper = 0;
  }
  else if (counselor_total < 0){
    final_counselor = 0;
    document.getElementById("final").style.display = "none";
    document.getElementById("final_correct").style.display = "block";
  }
  else if (camper_total < 0){
    final_camper = 0;
    document.getElementById("final").style.display = "none";
    document.getElementById("final_correct").style.display = "block";
  }
  else{
    document.getElementById("final").style.display = "none";
    document.getElementById("final_correct").style.display = "block";
  }
}
function end(){
  document.getElementById("final_correct").style.display = "none";
  document.getElementById("final_screen").style.display = "block";
  if (counselor_total> camper_total){
    document.getElementById("whowon").innerHTML = "Counselors Win!";
  }
  else if (camper_total > counselor_total){
    document.getElementById("whowon").innerHTML = "Campers Win!";
  }
  else{
    document.getElementById("whowon").innerHTML = "Tie Game!";
  }
}
function updateCamp(number){
  document.getElementById("camp_fal").disabled = true;
  document.getElementById("camp_tru").disabled = true;
  if (number == 0){
    camper_total = camper_total + final_camper;
  }
  else{
    camper_total = camper_total - final_camper;
  }
  updateScores();
}
function updateCoun(number){
  document.getElementById("coun_tru").disabled = true;
  document.getElementById("coun_fal").disabled = true;
  if (number == 0){
    counselor_total = counselor_total + final_counselor;
  }
  else{
    counselor_total = counselor_total - final_counselor;
  }
  updateScores();
}
