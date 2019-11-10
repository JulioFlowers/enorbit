/*Codigo principal de Enorbit 
by Fabricio Alejandro & Julio, derechos Reservados 2019*/

const mercury = 3.285e23, mr
const venus = 4.867e24, vr
const earth = 5.972e24, er
const mars = 6.39e23, mr
const jupiter = 1.898e27, jr
const saturn = 5.683e26, sr
const uranus = 8.681e25, ur
const neptune = 1.024e26, nr
const G = 6.673e-11

let planet = get.elementbyID("planeta").value, pr = get.elementbyID("pr").value
let type = get.elementbyID("tipo").value
let h = get. elementbyID("altura").value
let masss = get.elementbyID("masat").value
let th, Et, Ep, Ec, s, p

function energy (massp, rad){
    th = rad + h;
    Ep = (-G*masss*massp)/th
    Ec = (-G*masss*massp)/(2*th)
    Et = Ec-Ep

    return Et

} 

function calEt (){
    
    type="me"? energy(mercury, mr): type="ve"? energy(venus, vr):
    type="ti"? energy(earth, er): type="ma"? energy(mars, mr):
    type="ju"? energy(jupiter, jr): type="sa"? energy(saturn, sr):
    type="ur"? energy(uranus, ur): type="sa"? energy(neptune, nr): energy(planet, pr);
    
}
