// Импортируйте сюда любые другие файлы скриптов, например:
// импортируйте * как MyModule из "./mymodule.js";
let ini=false;
let game=true;
let current_lang="eng";
let current_level;
const store_current_level=localStorage.getItem("current_level");
if(store_current_level){
	current_level=Number(store_current_level);
}else{
	current_level=0;
}
let mass_answers=[35,745,80,6,25,3,24,25,35,10,32,5,7,69,39,5,70,5,862,2,26,200,84,1,32,21,11,18,63,48,4,41,7831,810,31,33,74,66,0,4,27,7,49,44,17,0,169,72,716,40,566723,936,41,
					41,8,64,41,56,12,90,14,79,129,36,98,8113,7,1260,3,4,3,86,1113213211,24,8113,61,17,2,4,10,26,14,23,16,81,4,4,2,13,2,6,19,40,39,17,12,3,9,16,1218,53,108,19,
					48,7,6,55,200,35,4,9,19,2,96,100,4,87,6,72,23,54,2,35,22,4,11,13,1,36,96,2329,8104,12,11,9,9,7,5,7,7,30,6,160,13,13,121,10,7,33,12,55,17,20,9,20,9,31,38,22,
					42,0,136,2,26,111,25,75,50,2842,14,80,10,9,6,5,531,6,54,619,60];

const store_correctly_answered = localStorage.getItem("correctly_answered");
let correctly_answered = new Set(
  store_correctly_answered ? JSON.parse(store_correctly_answered) : []
)


const store_not_blocked = localStorage.getItem("not_blocked");
let not_blocked = new Set(
  store_not_blocked ? JSON.parse(store_not_blocked) : [1]
)


let mass_blocked=[]
	for(let i=1;i<=180;i++){
		mass_blocked.push(i);
	}
	mass_blocked = mass_blocked.filter(level => level !== 1);
const store_blocked = localStorage.getItem("blocked");
let blocked = new Set(
  store_blocked ? JSON.parse(store_blocked) : [...mass_blocked]
)


runOnStartup(async runtime =>
{
// Код для запуска на экране загрузки.
// Обратите внимание, что макеты, объекты и т.д. пока недоступны.
runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
});

async function OnBeforeProjectStart(runtime) {
	runtime.getLayout("Layout Load").addEventListener("afterlayoutstart",()=>Layout_Load_start(runtime));
		//при запуске макета Start
	runtime.getLayout("Start").addEventListener("afterlayoutstart",()=>Start_start(runtime));
	//при запуске макета выбора уровня
	runtime.getLayout("Level_select").addEventListener("afterlayoutstart",()=>Level_select_start(runtime));
	//при запуске макета Game
	runtime.getLayout("Game").addEventListener("afterlayoutstart",()=>Game_start(runtime));

}

//--------------------------------------------------------------------------------------------------------------
function Layout_Load_start(runtime){

	runtime.goToLayout("Start");
	
}
//--------------------------------------------------------------------------------------------------------------

function Start_start(runtime){
	lang_start_maket(runtime);
	//Обработчики нажатия на кнопки в стартовом макете "Start" (простой переход на другие макеты)
	let start_play=runtime.objects.start_play.getFirstInstance();
	let start_levels=runtime.objects.start_levels.getFirstInstance();
	start_play.addEventListener("click",()=>{runtime.callFunction("Play_start");runtime.goToLayout("Game");});
	start_levels.addEventListener("click",()=>{runtime.callFunction("Play_click");runtime.goToLayout("Level_select");});
	let logo1=runtime.objects.logo_part_1.getFirstInstance();
	logo1.x=810;
	logo1.y=10;
	let logo2=runtime.objects.logo_part_2.getFirstInstance();
	logo2.x=-580;
	logo2.y=690;
	start_play.x-=800;
	start_levels.x+=800;
	let o={logo1:logo1,
			logo2:logo2,
			start_play:start_play,
			start_levels:start_levels
			}
	fadein_logo(o);
}

async function fadein_logo(o){
	const tween = o.logo1.behaviors.Твинанимация.startTween("position", [186,  258], 1, "in-back");
	const tween2=o.logo2.behaviors.Твинанимация.startTween("position", [65,  392], 1, "in-back");
	await tween2.finished;
		const tween3 = o.start_play.behaviors.Твинанимация.startTween("position", [153,  900], 1, "in-back");
		const tween4 = o.start_levels.behaviors.Твинанимация.startTween("position", [153,  1000], 1, "in-back");
	if(game){
			await tween4.finished;
			game=false;
	}
}

function lang_start_maket(runtime){
	let play=runtime.objects.start_play.getFirstInstance();
	let levels=runtime.objects.start_levels.getFirstInstance();
	let mass_obj=[play,levels];
	let mass_eng=["PLAY","LEVELS"];
	for(let i=0;i<mass_obj.length;i++){
		mass_obj[i].text=mass_eng[i];
		mass_obj[i].setCssStyle("font-family","Arial");
		mass_obj[i].setCssStyle("font-size","3vh");
	}
}

//--------------------------------------------------------------------------------------------------------------

function Level_select_start(runtime){
	//Переход на стартовый макет
	runtime.objects.goto_start.getFirstInstance().addEventListener("click",()=>{runtime.goToLayout("Start");});
	
	//Создание кнопок
	let level_select=runtime.objects.level_select;
	let position_x;
	let start_x=level_select.getFirstInstance().x;
	let position_y=level_select.getFirstInstance().y-104-15;
	for(let i=0;i<9;i++){
		position_x=start_x;
		position_y+=104+15;
		for(let j=0;j<5;j++){
			if(i!=0||j!=0)level_select.createInstance(0,position_x,position_y);
			position_x+=104+19;
		}
	}
	//Пулл всех кнопок выбора уровня
	let mass_levels_buttons=runtime.objects.level_select.getAllInstances();
	//Обзывание кнопок выбора уровня
	text_in_buttons_level_select(mass_levels_buttons,1);
	//Обработчики для каждой кнопки выбора уровня
	for(let i=0;i<mass_levels_buttons.length;i++){
		mass_levels_buttons[i].addEventListener("click",()=>go_to_level(runtime,mass_levels_buttons[i].text));
	}
	//Обработка пагинации
	let now_levels=1;
	let navi="right";
	let mass_pagi=runtime.objects.pagi_not_selected.getAllInstances();
	mass_pagi=[runtime.objects.pagi_selected.getFirstInstance(),...mass_pagi];
	let pagi_right=runtime.objects.pagi_right.getFirstInstance();
	pagi_right.addEventListener("click",()=>{now_levels=change_now_levels(mass_levels_buttons,now_levels+45,mass_pagi,"right");})
	let pagi_left=runtime.objects.pagi_left.getFirstInstance();
	pagi_left.addEventListener("click",()=>{now_levels=change_now_levels(mass_levels_buttons,now_levels-45,mass_pagi,"left");})
}

function go_to_level(runtime,text){
	let l=Number(text);
	if(!blocked.has(l)){
		runtime.callFunction("Play_click");
		current_level=l-1;
		runtime.goToLayout("Game");
	}
}

function text_in_buttons_level_select(buttons,start){
	console.log(start);
	let i=0;
	while(i<buttons.length){
		buttons[i].text=String(start);
		if(blocked.has(start)){
			buttons[i].setCssStyle("border-color","#bbd1e2");
			buttons[i].setCssStyle("color","#bbd1e2");
		}
		if(not_blocked.has(start)){
			buttons[i].setCssStyle("border-color","white");
			buttons[i].setCssStyle("color","white");
		}
		if(correctly_answered.has(start)){
			buttons[i].setCssStyle("border-color","#2bce0b");
			buttons[i].setCssStyle("color","#2bce0b");
		}
		start+=1;
		i+=1;
		
	}
}

function change_now_levels(buttons,start,mass,nav){
	switch(start){
		case 1:
			text_in_buttons_level_select(buttons,1);
			nav=="left"?change_pagi_position(mass,0,1):{};
			return 1;
		case 46:
			text_in_buttons_level_select(buttons,46);
			nav=="left"?change_pagi_position(mass,2,1):change_pagi_position(mass,0,1);
			return 46;
		case 91:
			text_in_buttons_level_select(buttons,91);
			nav=="left"?change_pagi_position(mass,3,2):change_pagi_position(mass,1,2);
			return 91;
		case 136:
			text_in_buttons_level_select(buttons,136);
			nav=="right"?change_pagi_position(mass,3,2):{};
			return 136;
		default:
			if(start>136) return start-45;
			else return start+45;
	}
}

function change_pagi_position(mass,a,b){
	let vrem,x,y;
	vrem=mass[a];
	mass[a]=mass[b];
	mass[b]=vrem;
	x=mass[a].x;
	y=mass[a].y;
	mass[a].x=mass[b].x;
	mass[a].y=mass[b].y;
	mass[b].x=x;
	mass[b].y=y;
}

//--------------------------------------------------------------------------------------------------------------

function Game_start(runtime){
	let number_level=runtime.objects.number_level.getFirstInstance();
	//Кнопка домой и выбор левела
	runtime.objects.goto_start.getFirstInstance().addEventListener("click",()=>{runtime.goToLayout("Start")});
	runtime.objects.goto_levels.getFirstInstance().addEventListener("click",()=>{runtime.goToLayout("Level_select")});
	let vopr=runtime.objects.vopr.getFirstInstance();
	let vopr_true=runtime.objects.vopr_true.getFirstInstance();
	if(correctly_answered.has(current_level+1)){
		vopr.isVisible=false;
		vopr_true.isVisible=true;
		vopr_true.animationFrame=current_level;
	}else{
		vopr_true.isVisible=false;
		vopr.isVisible=true;
		vopr.animationFrame=current_level;
	}
	//Сделаем работу с клавиатурой и полем ввода
	let mass_numbers_button=[];
	let text_input=runtime.objects.input_text.getFirstInstance();
	mass_numbers_button.push(runtime.objects.number_0.getFirstInstance());
	mass_numbers_button.push(runtime.objects.number_1.getFirstInstance());
	mass_numbers_button.push(runtime.objects.number_2.getFirstInstance());
	mass_numbers_button.push(runtime.objects.number_3.getFirstInstance());
	mass_numbers_button.push(runtime.objects.number_4.getFirstInstance());
	mass_numbers_button.push(runtime.objects.number_5.getFirstInstance());
	mass_numbers_button.push(runtime.objects.number_6.getFirstInstance());
	mass_numbers_button.push(runtime.objects.number_7.getFirstInstance());
	mass_numbers_button.push(runtime.objects.number_8.getFirstInstance());
	mass_numbers_button.push(runtime.objects.number_9.getFirstInstance());
	for(let i=0;i<mass_numbers_button.length;i++){
		mass_numbers_button[i].addEventListener("click",()=>{text_input.text+=mass_numbers_button[i].text;})
		mass_numbers_button[i].setCssStyle("line-height","5px");
		mass_numbers_button[i].setCssStyle("font-size","5vw");
	}
	//Стирание бэкспайс
	let backspace=runtime.objects.backspace.getFirstInstance();
	backspace.addEventListener("click",()=>{
		let txt=text_input.text;
		text_input.text=txt.slice(0,txt.length-1);
	})
	//Обработка кнопки answer - проверить ответ
	let answer=runtime.objects.answer.getFirstInstance();
	answer.addEventListener("click",()=>{check_answer(runtime,Number(text_input.text),vopr,vopr_true,text_input,number_level)});
	//Обработка кнопки skip - пропустить ответ
	let skip=runtime.objects.skip.getFirstInstance();
	skip.addEventListener("click",()=>{next_answer(runtime,vopr,vopr_true,text_input,number_level)});
	
	let wrong=runtime.objects.wrong.getFirstInstance();
	let mass=[answer,skip];
	lang_game_maket(mass,number_level,wrong);

}



function lang_game_maket(mass_obj,number_level,wrong){
	let mass_eng=["Answer","Skip"];

	for(let i=0;i<mass_obj.length;i++){
		mass_obj[i].text=mass_eng[i];
		mass_obj[i].setCssStyle("font-family","Arial");
		mass_obj[i].setCssStyle("font-size","5vw");
	}
	number_level.htmlContent=`<p><span>Level ${current_level+1}</span></p>`;
	number_level.setCssStyle("font-family","Arial");
	wrong.htmlContent=`incorrect answer`;
	wrong.setCssStyle("font-family","Arial");
	wrong.setCssStyle("font-style","normal");

}

function check_answer(runtime,ans,vopr,vopr_true,text_input,number_level){
	let wrong=runtime.objects.wrong.getFirstInstance();
	if(ans==mass_answers[current_level]){
		runtime.callFunction("Play_win");
		!correctly_answered.has(current_level+1)?correctly_answered.add(current_level+1):{};
		localStorage.setItem("correctly_answered",JSON.stringify([...correctly_answered]));
		let time=3000;
		block_buttons(runtime,time);
		runtime.globalVars.particle=true;
		setTimeout(() => {
        	runtime.globalVars.particle=false;
			next_answer(runtime,vopr,vopr_true,text_input,number_level);
            			}, time); 
	}else{
		runtime.callFunction("Play_not");
		wrong.y+=30;
		let i = 0;
		let o=1;
        let intervalId = setInterval(() => {
			o-=0.01
            wrong.setCssStyle("opacity",String(o));
			wrong.y-=0.3;
            i++;
            if (i >= 100) {
                clearInterval(intervalId);
            }
        }, 10);
		runtime.objects.answer.getFirstInstance().isEnabled=false;
		setTimeout(() => {
			runtime.objects.answer.getFirstInstance().isEnabled=true;
		}, 1200); 
	}
}

function block_buttons(runtime,ms){
	runtime.objects.answer.getFirstInstance().isEnabled=false;
	runtime.objects.skip.getFirstInstance().isEnabled=false;
	runtime.objects.goto_start.getFirstInstance().isEnabled=false;
	runtime.objects.goto_levels.getFirstInstance().isEnabled=false;
	setTimeout(() => {
		runtime.objects.answer.getFirstInstance().isEnabled=true;
		runtime.objects.skip.getFirstInstance().isEnabled=true;
		runtime.objects.goto_start.getFirstInstance().isEnabled=true;
		runtime.objects.goto_levels.getFirstInstance().isEnabled=true;
	}, ms); 
}

function next_answer(runtime,vopr,vopr_true,text_input,number_level){
	current_level+=1;
	current_level<180?{}:current_level=0;
	localStorage.setItem("current_level",String(current_level));
	!not_blocked.has(current_level+1)?not_blocked.add(current_level+1):{};
	localStorage.setItem("not_blocked",JSON.stringify([...not_blocked]));
	blocked.has(current_level+1)?blocked.delete(current_level+1):{};
	localStorage.setItem("blocked",JSON.stringify([...blocked]));
	let pos_x=vopr.x;
	block_buttons(runtime,2000);
	fade(vopr);
	fade(vopr_true);

	setTimeout(() => {
		if(correctly_answered.has(current_level+1)){
			vopr.isVisible=false;
			vopr_true.isVisible=true;
			vopr_true.animationFrame=current_level;
		}else{
			vopr_true.isVisible=false;
			vopr.isVisible=true;
			vopr.animationFrame=current_level;
		}
    	fadein(vopr,pos_x);
		fadein(vopr_true,pos_x);
	}, 1000);

	text_input.text="";
	number_level.htmlContent=`<p><span>Level ${current_level+1}</span></p>`;
	number_level.setCssStyle("font-family","Arial");
}

async function fade(obj){
	const tween = obj.behaviors.Твинанимация.startTween("position", [-300, 547], 1, "in-back");
	await tween.finished;
	obj.x=1000;
}

async function fadein(obj,x){
	const tween = obj.behaviors.Твинанимация.startTween("position", [x, 547], 1, "out-back");
	await tween.finished;
}


//--------------------------------------------------------------------------------------------------------------