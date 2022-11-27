//global var
const count_el = document.querySelector('.counter .count');
const inc_btn = document.getElementById("+");
const dec_btn = document.getElementById("-");
const rst_btn = document.getElementById("reset");
let count = 0;

inc_btn.addEventListener('click',inc);
dec_btn.addEventListener('click',dec);
rst_btn.addEventListener('click',reset);
function inc(){
	count++;
	count_el.innerText = `${count}`;
}
function dec(){
 	count--;
	count_el.innerText = `${count}`;
}
function reset(){
 	count = 0;
 	count_el.innerText = '0';
}