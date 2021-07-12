

var valores = [];

const quests = JSON.stringify({
    "q0":
    {
        "pergunta":"É ilegal uma pessoa com mais de 21 anos conduzir com um teor de álcool no sangue (TAS) igual ou superior a:",
        "a":"0,10% - Zero vírgula dez por cento",
        "b":"0,08% - Zero vírgula zero oito por cento",
        "c":"0,05% - Zero vígula zero cingo por cento",
        "img":"./imagens/placa1.jpg",
        "resposta":"a"
    },
    "q1":
    {        
        "pergunta":"Dos sinais seguintes qual indica a aproximação de trabalhos na estrada?:",
        "a":"a",
        "b":"b",
        "c":"c",
        "img":"./imagens/questao1.jpg",
        "resposta":"a"

    },
    "q2":
    {        
        "pergunta":"Na califórnia, quem conduzir um veículo motorizado dá o consentimento para fazer um teste químico para o conteúdo de álcool no sangue, que pode ser de sopro ou de urina:",
        "a":"Se for obrigado por lei",
        "b":"Apenas se tiver ingerido álcool",
        "c":"Apenas se ocorrer um acidente",
        "img":"",
        "resposta":"a"

    }
}

)


const myObj = JSON.parse(quests)

//Escolher questoes aleatorias
function aleatorio()
{
	
var quant = document.getElementById("quants").value;
var i = 0;
var result = "";



var valid = false;

//Loop total de questões escolhidas
while(i < quant)
{
	var k = 0;	
	//0 .. max
	//O numero aleatorio gerado é a questão escolhida
	x = Math.floor(Math.random() * 3); 
	
    //Primeiro loop não entra antes de inserir o elemento
    //Ao entra no loop ele garante que o item não será inserido mais de uma vez
	while(k < valores.length)
	{

		if(valores[k] == x)
		{
			valid = true;
			break;
		}
		
		k++;
			
	}
	
	
	if(valid == false)
	{
        //Inserir elemento aleatório
		valores.push(x);
		result += "<div class = 'pq'>" + eval("myObj.questao.pergunta".replace("questao","q" + x.toString())) +"</div>" +
		
		"<div id = \"quest" + x.toString() +"\">" +
				
				
		"</div>";
        if(eval("myObj.questao.img".replace("questao","q" + x.toString())).includes("./imagens/"))
        {
            result += "<img src = '" + eval("myObj.questao.img".replace("questao","q" + x.toString())) + "'/>";
        }

		result += "<div class = \"infoq\">" +
	  "<input   type=\"radio\" id=\"" +  x.toString() +"1\" name=\"" + "q" + x.toString() +"\" value=\"a\">" +
  			"<label for=\"1\">" + eval("myObj.questao.a".replace("questao","q" + x.toString()))+ "</label>" +
		"</div>" +

		"<div class = \"infoq\">" +
        "<input  type=\"radio\" id=\"" +  x.toString() +"1\" name=\"" + "q" + x.toString()  +"\" value=\"b\">" +
        "<label for=\"1\">" + eval("myObj.questao.b".replace("questao","q" + x.toString())) + "</label>" +
		"</div>" +

		"<div class = \"infoq\">" +
        "<input  type=\"radio\" id=\"" +  x.toString() +"1\" name=\"" + "q" + x.toString()  +"\" value=\"c\">" +
        "<label for=\"1\">" + eval("myObj.questao.c".replace("questao","q" + x.toString()))+ "</label>" +
		"</div></div>";
		i++;
	}
	else {
		valid = false;
	}
	
	
	
		
	
	
}



document.getElementById("01").innerHTML = result;
document.getElementById("ids02").innerHTML = "<input  id = \"valids\"class=\"btn btn-success\" type = \"button\" onclick = \"validar()\" value = \"Validar\">";
document.getElementById("gerar").disabled = true;
}

function validar() {
	
	
	var respostas = {"0":1,"1":1,"2":2,"3":1,"4":3,"5":3,"6":2,"7":1,"8":3,"9":1,"10":2,"11":2,"12":3,"13":2,"14":2,"15":3
	,"16":2,"17":2,"18":1,"19":1,"20":1,"21":3,"22":1,"23":3,"24":1,"25":3,"26":1,"27":1,"28":2,"29":3,"30":1,"31":3,"32":2,"33":3,"34":1,"35":2
	,"36":3,"37":1,"38":1,"39":2,"40":2,"41":1,"42":3,"43":3,"44":3,"45":2,"46":2,"47":1,"48":2,"49":2,"50":3,"51":3,"52":3,"53":1,"54":2,"55":3
	,"56":3,"57":1,"58":2,"59":2,"60":3,"61":2,"62":2,"63":3,"64":3,"65":2,"66":1,"67":3,"68":2,"69":3,"70":1,"71":2,"72":2,"73":3,"74":1,"75":2
	,"76":1,"77":2,"78":3,"79":2,"80":3,"81":1,"82":2,"83":3,"84":2,"85":1,"86":3,"87":2,"88":1,"89":2,"90":1,"91":3,"92":3,"93":2,"94":2,"95":1
	,"96":1,"97":3,"98":2,"99":3,"100":3,"101":2,"102":3,"103":3,"104":2,"105":2,"106":3,"107":1,"108":1};
	var resp = false;
	var acertos = 0;
	
	//Consultar questoes a partir do nome e conferir no array se estao corretas
	//Dependendo se estao corretas ou nao sera preenchido uma mensagem no inicio de cada uma
	var quant = document.getElementById("quants").value;
    //alert(quant);
	var i = 0;
	

    //Loop pelos valores das questões gerados aleatoriamente
	while(i < valores.length)
	{

        //get numero questão
		var q = document.getElementsByName('q' + valores[i]);

		//Respostas a,b,c,d,e
		for(var k = 0; k < 3; k++)
		{
			//Consulta resposta marcada
			if(q[k].checked == true)
			{

                if(q[k].name == "q" + valores[i])
                {
                    if(q[k].value == eval("myObj.questao.resposta".replace("questao","q" + valores[i])) )
                    {
                    
                        resp = true;
                        acertos++;
                        document.getElementById("quest" + valores[i]).innerHTML = "<div class=\"alert alert-success\">" + 
                        "<strong>Correta!</strong>" +
                        "</div>";
                        break;
                    }
                }

			}
		}
		
		if(resp == false)
		{

			document.getElementById("quest" + valores[i]).innerHTML = "<div class=\"alert alert-danger\">" + 
			"<strong>Errada!</strong>" +
			"</div>" + "<span class=\"badge badge-success\">Resposta correta: " + respostas[valores[i].toString()] + "</span>";
			
			
			
			
		}
		else
		{
			resp = false;
		}
		
		i++;
	}	
	
	
	alert("Voce acertou: " + acertos + " de " + quant +"\n" + "Isso é " + ((acertos/quant) * 100).toPrecision(4) + "% de acertos!");
	
	
	
	document.getElementById("valids").disabled = true;
	document.getElementById("ids02").innerHTML = "<input id = \"recarregar\"class=\"btn btn-success\" type = \"button\" onclick = \"recarregarpagina()\" value = \"Recarregar\">"
	
}


function alterar(x)
{
	document.getElementById("qq").innerHTML = "Quantidade de questões:" + x;
}

function recarregarpagina()
{
	window.location.reload();
}

