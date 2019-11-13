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

/*ih: identificador de alura, im: identificador de masa,
ir: identificador de respuesta, it: identificador de tipo
ist: identificador de status, iv: identificador de velocidad
*/

function calEt (it, ih, im, ir){

     type = document.getElementById(it).innerHTML
     h = document.getElementById(ih).value
     masss = document.getElementById(im).value

     function energy (massp, r){

         t = parseFloat(h)+ parseFloat(r);
         Ep = (-1*G*masss*massp)/r ;
         Ec = (-1*G*masss*massp)/(2*t);
         Et = Ec-Ep;         
    
        return document.getElementById(ir).value= Et;

     } 
        type ==="me" ? energy(mercury, mr): type==="ve"? energy(venus, vr):
         type ==="ti" ? energy(earth, er): type==="ma"? energy(mars, mar):
         type ==="ju" ? energy(jupiter, jr): type==="sa"? energy(saturn, sr):
         type ==="ur" ? energy(uranus, ur): energy(neptune, nr);

         if (type === "od"){
            var planet = document.getElementById("planeta").value;
            pr = document.getElementById("pr").value;
            energy(planet, pr);
         }

}

function period(it, ist, ih, iv, ir, im ){

    type = document.getElementById(it).innerHTML
    var svel = document.getElementById(ist).value
    h = document.getElementById(ih).value


    if (svel == true) {

        s= document.getElementById(iv).value

        function per(r){
            t = parseFloat(h)+ parseFloat(r);
            p=((t)*Math.PI*2)/s
            return document.getElementById(ir).value= p;
        }
        
        type ==="me" ? per(mr): type==="ve"? per(vr):
         type ==="ti" ? per(er): type==="ma"? per(mar):
         type ==="ju" ? per(jr): type==="sa"? per(sr):
         type ==="ur" ? per(ur): per(nr);

         if (type === "od"){
            pr = document.getElementById("pr2").value;
            per(pr);
         }

    }

    else if (svel == false) {
        
        masss = document.getElementById(im).value

        function per1(r){
            t = parseFloat(h)+ parseFloat(r);
            i= (4*Math.pow(Math.PI,2)*Math.pow((t),3))/(G*masss)
            p=Math.sqrt(i)

            return document.getElementById(ir).value= p;

        }

        type ==="me" ? per1(mr): type==="ve"? per1(vr):
        type ==="ti" ? per1(er): type==="ma"? per1(mar):
        type ==="ju" ? per1(jr): type==="sa"? per1(sr):
        type ==="ur" ? per1(ur): per1(nr);

        if (type === "od"){
            pr = document.getElementById("pr2").value;
            per1(pr);
         }

    }

}

function speed(it, isp, ih, ip, ir, im ){

    type = document.getElementById(it).innerHTML
    var sper = document.getElementById(isp).value;
    h = document.getElementById(ih).value

    if(sper== true){

         var p = document.getElementById(ip).value;

        function vel(r){
            t = parseFloat(h)+ parseFloat(r);
            s = p/((t)*Math.PI*2)
            return document.getElementById(ir).value= s;
        }

        type ==="me" ? vel(mr): type==="ve"? vel(vr):
        type ==="ti" ? vel(er): type==="ma"? vel(mar):
        type ==="ju" ? vel(jr): type==="sa"? vel(sr):
        type ==="ur" ? vel(ur): vel(nr);

        if (type === "od"){
            pr = document.getElementById("pr3").value;
            vel(pr);
         }

    }

    if(sper== false){

        masss = document.getElementById(im).value

        function vel1(r){
            t = parseFloat(h)+ parseFloat(r);
            i= (G*masss)/(t)
            s=math.sqrt(i)
            return document.getElementById(ir).value= s;
        }

        type ==="me" ? vel1(mr): type==="ve"? vel1(vr):
        type ==="ti" ? vel1(er): type==="ma"? vel1(mar):
        type ==="ju" ? vel1(jr): type==="sa"? vel1(sr):
        type ==="ur" ? vel1(ur): vel1(nr);

        if (type === "od"){
            pr = document.getElementById("pr3").value;
            vel1(pr);
         }
        
    }

}

function mascal(ih, ip, im){
    h= document.getElementById(ih).value
    p= document.getElementById(ip).value

    function masa(r){
        t= parseFloat(h)+parseFloat(r)  
        masss= (4*math.pow(math.PI,2)*math.pow(t,3))/(G*math.pow(p,2)) 
        return document.getElementById(im).value=masss
    }

    type ==="me" ? masa(mr): type==="ve"? masa(vr):
    type ==="ti" ? masa(er): type==="ma"? masa(mar):
    type ==="ju" ? masa(jr): type==="sa"? masa(sr):
    type ==="ur" ? masa(ur): masa(nr);

    if (type === "od"){
        pr = document.getElementById("pr4").value;
        masa(pr);
     }

}

//funciones auxiliares

function Reset(id)
{
document.getElementById(id).reset();
}

function chg(id){
    sc1 = String(document.getElementById("i").style.display)
    sc2 = String(document.getElementById("mr").style.display)
    sc3 = String(document.getElementById("v").style.display)
    sc4 = String(document.getElementById("t").style.display)
    sc5 = String(document.getElementById("m").style.display)
    sc6 = String(document.getElementById("j").style.display)
    sc7 = String(document.getElementById("s").style.display)
    sc8 = String(document.getElementById("u").style.display)
    sc9 = String(document.getElementById("n").style.display)
    sc10 = String(document.getElementById("o").style.display)

    if(sc1 == "block" || sc2 == "block" || sc3 == "block" || sc4 == "block" || sc5 == "block" ||
    sc6 == "block" || sc7 == "block" || sc8 == "block" || sc9 == "block" || sc10 == "block"){

        document.getElementById("i").style.display="none"
        document.getElementById("mr").style.display="none"
        document.getElementById("v").style.display="none"
        document.getElementById("t").style.display="none"
        document.getElementById("m").style.display="none"
        document.getElementById("j").style.display="none"
        document.getElementById("s").style.display="none"
        document.getElementById("u").style.display="none"
        document.getElementById("n").style.display="none"
        document.getElementById("o").style.display="none"

    }

    document.getElementById(id).style.display="block"

}