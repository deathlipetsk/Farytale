 const initText = {
	"text":
	["Жили-были {var1} да {var2}. ",
	"Была у них {var3}. ",
	"Снесла {var3} {var4}, не простое - золотое. ",
	"- {var1} бил, бил - не разбил. ",
	"- {var2} била, била - не разбила. ",
	"{var5} бежала, {var6} задела, {var4} упало и разбилось. ",
	"{var1} плачет, {var2} плачет, а {var3} кудахчет: ","{speech}."]
	};

const btnCreate = $('.create-button');
const textNode = $('.text');

btnCreate.click(function() {
	textNode.html(initText.text); //вставка текта в div
});

const var1Node = $('.var1');
const var2Node = $('.var2');
const var3Node = $('.var3');
const var4Node = $('.var4');
const var5Node = $('.var5');
const var6Node = $('.var6');
const speechNode = $('.speech');

const btnReplace = $('.replace-button');
btnReplace.click(function() {
	const var1 = var1Node.val();
	const var2 = var2Node.val();
	const var3 = var3Node.val();
	const var4 = var4Node.val();
	const var5 = var5Node.val();
	const var6 = var6Node.val();
	const speech = speechNode.val();
	const newText = {
	"text":
	[`Жили-были ${var1} да ${var2}. `,
	`Была у них ${var3}. `,
	`Снесла ${var3} ${var4}, не простое - золотое. `,
	`- ${var1} бил, бил - не разбил. `,
	`- ${var2} била, била - не разбила. `,
	`${var5} бежала, ${var6} задела, ${var4} упало и разбилось. `,
	`${var1} плачет, ${var2} плачет, а ${var3} кудахчет: "${speech}".`]
	};
	textNode.html(newText.text);
})