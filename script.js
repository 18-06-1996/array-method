
//Get all the countries from the Asia continent /region using the Filter function
// Get all the countries with a population of less than 2 lakhs using Filter function
// Print the following details name, capital, flag using forEach function
// Print the total population of countries using reduce function
// Print the country which uses US Dollars as currency.




   // 1.Get all the countries from the Asia continent /region using the Filter function

    async function api(){

        v= fetch('https://restcountries.com/v3.1/all')
        out=await v
        prom=out.json()
        res=await prom
        console.log(res)

          let countries =res.filter(function(value){
            return value.region=='Asia'
          })
          console.log(countries)
     }
     api()


        // output -   Array(50)

//------------------------------------------------------------------------------------


// 2.Get all the countries with a population of less than 2 lakhs using Filter function

async function api(){

    v= fetch('https://restcountries.com/v3.1/all')
    out=await v
    prom=out.json()
    res=await prom
   
try{
    let pop=res.filter((value)=> value.population<200000)

    pop.forEach((value)=>{
       console.log( value.name.common)
    })
}
catch{
    //
}
           
        }
        api()
 

//         //output - 62 countries name


//------------------------------------------------------------------------------------


// 3. Print the following details name, capital, flag using forEach function


async function api(){

    v= fetch('https://restcountries.com/v3.1/all')
    out=await v
    prom=out.json()
    res=await prom
    console.log(res)

            let data= res
            data.forEach((value)=>{
                console.log(`name -${value.name.common} & capital - ${value.capital} & flag - ${value.flags.png}`)
            })
        }
        api()

        // output- 

//------------------------------------------------------------------------------------

// 4.Print the total population of countries using reduce function  

async function api(){

    v= fetch('https://restcountries.com/v3.1/all')
    out=await v
    prom=out.json()
    res=await prom
    console.log(res)

        //     let array=[];
        //     res.forEach((value)=> {
        //         array.push(value.population)
        //     }) ; 
        //     //console.log(array) 

        //    let answer= array.reduce((a,b)=>a+b)

        //     console.log(answer);

        // function (accumulator,currentVal){
        //     return accumulator+currentVal.population;
        // }
    let mass=res.reduce(function (accumulator,currentVal){
        return accumulator+currentVal.population
    },0)
    console.log(mass)

    }
    api()

                //output- 7777721563

//------------------------------------------------------------------------------------


// 5.  Print the country which uses US Dollars as currency. 


async function api(){

    v= fetch('https://restcountries.com/v3.1/all')
    out=await v
    prom=out.json()
    res=await prom
    let mn=[];
try{
    res.forEach((value)=>{
        if(value.currencies.USD){
    mn.push(value.name.common)
}
     });
}
 catch{
    //
}
console.log(mn);
         
 }
 api()

   //output - 11 countries