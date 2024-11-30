<!-- Topic 1 -->

let num : number = 4 // : number : false :string etc => type anotation 

<!-- // Basic type  -->
number , string ,boolean 
Tuples ,any ,unknown , never ,void ,Enumration




                                 <!-- Example  -->


<!-- number , string ,boolean  -->
let num : number = 4 


<!-- Tuples  => : [number,boolean,string] -->
let arr : [number,boolean,string] = [12,false,'string] == lkn bad mai jaka koi type ko push kar sakta ha 

<!-- // Any  -->
let a : any = 'haseb'

a = 12 == aga kahi bhi change kar sakta ho 

<!-- unknown  -->
// unknown same any ki tarah work karta hai 


<!-- never -->
 never ka matlb ap pehla sa heey function ko bta deta hon ka ya kuch bhi return nhi kara ga yani is ka bad wal code run nhi hoga example infinite loop 

 function abc():never {
while(true){
    console.log('infinite');
    
}
}

console.log(abc());

<!-- void  -->
The type void can be used to indicate a function doesn't return any value.

function abc(): void {
  console.log('Haseeb');
   
}

abc()

<!-- Enumration enum -->
 

By default, enums will initialize the first value to 0 and add 1 to each additional value:
ek special data type hai jo aapko named constants ke group ko define karna mai madad deta hai 
 kisi bhi specific values ka set define karta hai 
enum human {
    x = 0,
    y = 10,
}

console.log(human.x);


<!-- Topic 2 -->

<!-- primitive type aliases   -->

singal hota hai like jasa hum variable mai koi bhi no ya string save karta hai 

type CarYear = number  
type CarYear = string  


<!-- object type aliases -->

singal nhi hota balka obj ki sorat mai hota like schema 

 type brand = {
     brand : string,
     plate : number
 }



<!-- interface  -->
class or object ka interface bna kar data hai 
interface sa hum log murge kar sakta hai jo ka type mai hum nhi karsakta hai 
ak fark ya hai interface mai equal = nhi ata hai 
<!-- example -->
error code 
type brand = {
    brand : string,
    plate : number
}

type brand = {
    brand : string,
    plate : number
}


<!-- correct code  -->
interface brand  {
    brand : string,
    plate : number
}

interface brand  {
    brand : string,
    b : number
}

function abc(n:brand){
    console.log(n.brand);
    
}

<!-- interface extend karna sa bhi murge hojata hai  -->

interface human {
    name : string,
    age : number
}

interface m extends human {
    id : number
}


function abc(b:m){
console.log(b.id);

}
                      //classes 

object  ka blueprint ya phir template keh lata hai 
hama object bar bar bna na nhi parta                     
bar bar hum isa use kar sakt ahi 
Agar hama similar type ke objects banane ho, to class use karna acha hota hai taake code baar baar likhna na pare.

<!-- class publick private protected -->

public by deafult class ka ander ka variable public raha ga kahi bhi acces kar sakta hoi aur change bhi kar sakta hia

private mai sirf class ka nader change kar sakta hon lkn bahir change nhi kar sakta hon 

protected mai hum class ka nader class ka extend mai use kar sakta hai bahir use nhi kar sakta hai 



<!-- readonly  -->

sirf read kar skata hai change nhi kar skata hai 
class Auth1 {
constructor( public readonly name : string){
    this.name = name 
}
getName(){
    console.log(this.name);
//    this.name = 'fsdfsdf'  eror 
}

}

let get  = new Auth1('Haseeb')


<!-- Getters and setters -->

<!-- Getter -->
getter ka mtlb value ko laker ana 
<!-- setter -->
setter mtlb class ka variable mai value ko change  karna  

class Auth{
    constructor( public pass : number){
      this.pass = pass
    }
    get gpass(){
        return this.pass
    }
    set cpass( pass : number){
        this.pass = pass
    }
}

let user1 = new Auth(1234)
console.log(user1.cpass = 786);


// implicite return  function 
ts khud sa samjh jata hai  ka function kya return kar raha hai 

// explicit return type 
khud btana parta hai ka function kya return kar raha hai 

// optional parameter 
optional mai parameter optional hota hai 

function abc(a:string, b?:number){
    console.log(a,b);
    
 }
 abc('haseeb',12)

// deafult para 
function abc(a:string = 'haseeb'){
    console.log(a);
    
 }
 abc()


 // rest parameter 

 function abc(...name : string [] ){
    console.log(name);
    
 }
 abc('haseeb','12')


 <!-- literals string  number and bolean -->
  ak dafa assign kardya to bad mai chnage nhi kar sakta hai 
                     error 
  let abc : 'Haseeb'
  abc = 'vsdvs'

  let abc : 'Haseeb' | 12
  abc = 'vsdvs'

<!-- Generics  -->

jab huma kuch asa function bna na hota hai jis ko huma bar bar use karna hota hai 
jab hum call karta hai to bta deta hai hum string bhaj raha hai ya phir number 


<!-- Utility Types -->

//  Partial

Partial ek utility type hai jo object type ki saari properties ko optional bana deta hai.

interface User {
    name: string 
    age: number
}


let user : Partial< User> = {
    name : 'haseeb',
}


/// REQUIRED 
Required utility type Partial ka ulta hai — ye saari properties ko required bana deta hai. Agar koi property optional ho tab bhi 
interface User {
    name: string 
    age?: number
}


let user : Required< User> = {
    name : 'haseeb',
    age : 12
}



// Pick
Yeh type hum tab use karte hain jab humein kisi object type ki sirf kuch specific properties chahiyein hoti hain, aur baqi properties ko ignore karna ho.



interface User {
    name: string
    age: number
    email: string
    number: number
}

type UserDeatil = Pick<User , 'name' | 'email' >

let user: UserDeatil = {
    name: 'haseeb',
    email : 'haseebhgedc'
}




Omit

Omit ka kaam Pick ka opposite hai — ye selected properties ko remove kar deta hai   aur baaki value ko add kar data hai.

interface User {
    name: string
    age: number
    email: string
    number: number
}

type UserDeatil = Omit<User ,'age' >

let user: UserDeatil = {
    name: 'haseeb',
    email : 'haseebhgedc',
    number : 12324
}


<!-- Assertion type -->

type asertion mean huma type script sa zyada pta hai ka variable ki type kya hai last mai semicolen lagana zarori hai 
let a : any = 12;

(a as string).lastIndexOf


let a : any = 12;

(<string>a).concat


<!-- type casting -->

type change hota hai agar string hoga tab bhi 
let number : any = Number('12')
console.log(number);  
ok 

