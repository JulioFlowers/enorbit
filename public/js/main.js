/*Codigo principal de Enorbit 
by Fabricio Alejandro & Julio, derechos Reservados 2019*/

const mercury =328500000000000000000000, mr =2439700
const venus =4867000000000000000000000, vr =6051000
const earth =5972000000000000000000000, er =6371000
const mars =639000000000000000000000, mar =3389500
const jupiter =1898000000000000000000000000, jr =69911000
const saturn =568300000000000000000000000, sr =58232000
const uranus =86810000000000000000000000, ur =25362000
const neptune =102400000000000000000000000, nr =24622000
const G =0.00000000006673

var s, p, h, r, masss, type, pr, t

function calEt (){

     type = document.getElementById("tipo").innerHTML
     h = document.getElementById("altura").value
     masss = document.getElementById("masat").value

     function energy (massp, r){

         var t = parseFloat(h)+ parseFloat(r);
         Ep = (-1*G*masss*massp)/r ;
         Ec = (-1*G*masss*massp)/(2*t);
         Et = Ec-Ep;         
    
        document.getElementById("res").value= Et;

     } 
        type ==="me" ? energy(mercury, mr): type==="ve"? energy(venus, vr):
         type ==="ti" ? energy(earth, er): type==="ma"? energy(mars, mr):
         type ==="ju" ? energy(jupiter, jr): type==="sa"? energy(saturn, sr):
         type ==="ur" ? energy(uranus, ur): energy(neptune, nr);

         if (type === "od"){
            var planet = document.getElementById("planeta").value;
            pr = document.getElementById("pr").value;
            energy(planet, pr);
         }

}

function period(){

    type = document.getElementById("tipo").innerHTML
    var svel = document.getElementById("status").value;
    h = document.getElementById("altura").value


    if (svel == true) {

        s= document.getElementById("velocidad").value

        function per(r){
            var t = parseFloat(h)+ parseFloat(r);
            p=((t)*Math.PI*2)/s
            return document.getElementById("resp").value= p;
        }
        
        type ==="me" ? per(mr): type==="ve"? per(vr):
         type ==="ti" ? per(er): type==="ma"? per(mr):
         type ==="ju" ? per(jr): type==="sa"? per(sr):
         type ==="ur" ? per(ur): per(nr);

         if (type === "od"){
            pr = document.getElementById("pr").value;
            per(pr);
         }

    }

    else if (svel == false) {
        
        masss = document.getElementById("masat").value

        function per1(r){
            var t = parseFloat(h)+ parseFloat(r);
            i= (4*Math.pow(Math.PI,2)*Math.pow((t),3))/(G*masss)
            p=Math.sqrt(i)

            return document.getElementById("resp").value= p;

        }

        type ==="me" ? per1(mr): type==="ve"? per1(vr):
        type ==="ti" ? per1(er): type==="ma"? per1(mr):
        type ==="ju" ? per1(jr): type==="sa"? per1(sr):
        type ==="ur" ? per1(ur): per1(nr);

        if (type === "od"){
            pr = document.getElementById("pr").value;
            per1(pr);
         }

    }

}

function speed(){

    type = document.getElementById("tipo").innerHTML
    var sper = document.getElementById("statusp").value;
    h = document.getElementById("altura").value

    if(sper== true){

         var p = document.getElementById("p").value;

        function vel(r){
            var t = parseFloat(h)+ parseFloat(r);
            s = p/((t)*Math.PI*2)
            return document.getElementById("resv").value= s;
        }

        type ==="me" ? vel(mr): type==="ve"? vel(vr):
        type ==="ti" ? vel(er): type==="ma"? vel(mr):
        type ==="ju" ? vel(jr): type==="sa"? vel(sr):
        type ==="ur" ? vel(ur): vel(nr);

        if (type === "od"){
            pr = document.getElementById("pr").value;
            vel(pr);
         }

    }

    if(sper== false){

        masss = document.getElementById("masat").value

        function vel1(r){
            var t = parseFloat(h)+ parseFloat(r);
            i= (G*masss)/(t)
            s=math.sqrt(i)
            return document.getElementById("resv").value= s;
        }

        type ==="me" ? vel1(mr): type==="ve"? vel1(vr):
        type ==="ti" ? vel1(er): type==="ma"? vel1(mr):
        type ==="ju" ? vel1(jr): type==="sa"? vel1(sr):
        type ==="ur" ? vel1(ur): vel1(nr);

        if (type === "od"){
            pr = document.getElementById("pr").value;
            vel1(pr);
         }
        
    }

}
