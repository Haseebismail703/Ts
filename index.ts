// let arr : [string,number] = ['haseeb',12]
// arr.push('Haseeb2')
// console.log(arr);


// let a : any = 'haseb'

// a = 12


// enum human {
//     x = 0,
//     y = 10,
// }

// console.log(human.x);



// function abc(): void {
//   console.log('Haseeb');

// }

// abc()



// type Car = {
//     name : string ,
//     age : number
// }

// type brand = {
//     brand : string,
//     plate : number
// }





// type full = Car | brand 


// let abc : full =  {
//     name : 'Haseeb',
//     age : 12,
//     brand : 'kl',
//     plate : 12
// }

// console.log(abc);

// let arr : [full] = [{
//     name : 'Haseeb',
//     age : 12,
// }]

// console.log(arr);


// interface human {
//     name : string,
//     age : number
// }

// interface m extends human {
//     id : number
// }


// function abc(b:m){
// console.log(b.id);

// }


//  /// public
// class Auth {
//     // public email: string
//     // public pass: number
//     constructor(public email: string, public pass: number) {
//         this.email = email
//         this.pass = pass

//     }
// }

// let user1 = new Auth('user1@gmail.com', 1234)
// let user2 = new Auth('user2@gmail.com', 1234)
// console.log(user2);



//// private 
// class Auth {
//     private email: string
//     private pass: number
//     constructor(email: string, pass: number) {
//         this.email = email
//         this.pass = pass
//     }
//     getAuth() {
//         console.log(this.email);

//     }
// }

// let user1 = new Auth('user1@gmail.com', 1234)
// user1.email = 'dvfvdfv'
// // console.log(user1.getAuth());


// protected


// class Auth1 {
// constructor( public readonly name : string){
//     this.name = name 
// }
// getName(){
//     console.log(this.name);
// //    this.name = 'fsdfsdf'  eror 
// }

// }

// let get  = new Auth1('Haseeb')


// geteers and setters 

// class Auth{
//     constructor( public pass : number){
//       this.pass = pass
//     }
//     get gpass(){
//         return this.pass
//     }
//     set cpass( pass : number){
//         this.pass = pass
//     }
// }

// let user1 = new Auth(1234)
// console.log(user1.cpass = 786);


//  function abc(a:string, b?:number){
//     console.log(a,b);

//  }
//  abc('haseeb',12)

// function abc(a:string = 'haseeb'){
//     console.log(a);

//  }
//  abc()


// let num : number = 12
//  let n : string = num.toString()
//  console.log(n);


// let fun =<T> (data : T): T =>{
//     return data
// }


// let num = fun<Number>(12)
// let strin = fun<String>('12')
// console.log(num,strin);


function abc <T>(a :T) {
    console.log(a);
    
}
  
abc<String>('Haseb')