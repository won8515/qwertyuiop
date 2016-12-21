/**
 * event_test.js
 * 자바스크립트 이벤트와 이벤트 핸들러 테스트용 소스 파일
 */

//alert("event_test.js 파일 연결 성공...");

window.onload = function(){
	// 알림창 자동 출력처리
	window.open("../view/gongji.html", "gongji", "width=400, height=300, menubar=false, toolbar=false, status=false, location=false, resizable=false, titlebar=false");
	
	//id가 btn인 태그 엘리먼트가 클릭되었을 때의 동작처리
	var btn = document.getElementById("btn");
	btn.onclick = function(e){
		console.log(e.target);
		console.log(e.x);
		console.log(e.y);
		console.log(e.target.offsetLeft);
		console.log(e.target.offsetTop);
	}
	
	// nation의 선택 값이 변경되었을 때, 선택된 nation의 값을 읽어서
	// 그 값에 대한 li항목의 배경색과 글자색을 변경처리함
	var li = document.getElementsByTagName("li");
	var nation = document.getElementById("nation");
	nation.onchange = function() {
		for(var x = 0;x < li.length; x++){
			li[x].style.backgroundColor="";
			li[x].style.color="";
		}
		li[this.value].style.backgroundColor = "red";
		li[this.value].style.color="blue";
	}
}