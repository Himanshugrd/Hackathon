#!/usr/bin/env node

const request = require("request");

const cheerio = require("cheerio");

request('https://www.moneycontrol.com/', cb);

function cb (error , response , html){

    if(error){

        console.error(error)

    }
    else{
    
        handleHtml(html);
    
    }
}

function handleHtml(html){

    let setTool = cheerio.load(html);

    let array = setTool("span#nifty_block_cp");

    let array1 = setTool("span#sensex_block_cp");

    let array2 = setTool("#keymactb1 td:nth-child(2)")

    let array3 = setTool("#keymactb1 tr:nth-child(2) td:nth-child(2)");

    let array4 = setTool("div.bxcom:nth-child(2) tbody tr td:nth-child(2)");

    let array5 = setTool("div.bxcom:nth-child(2) tbody tr:nth-child(2) td:nth-child(2)");

    let array6 = setTool("#keymactb1 tr:nth-child(3) td:nth-child(2)");


    var total =   setTool(array[0]).text();

    var total1 =   setTool(array1[0]).text()

    var total2 =   setTool(array2[0]).text().trim()

    var total3 =   setTool(array3[0]).text().trim()

    var total4 =   setTool(array4[0]).text().trim()

    var total5 =   setTool(array5[0]).text().trim()

    var total6 =   setTool(array6[0]).text().trim()
    
    

    console.log("\n");

    console.log('\033[31m',"  Markets Data :-")
    
    console.log("\n");
    
    console.log('\033[32m',"    Today's NIFTY --> ", total);
    
    console.log("\n");
    
    console.log('\033[32m',"    Today's Sensex --> ", total1);
    
    console.log("\n");
    
    console.log('\033[31m',"  Commodities :- ")
    
    console.log("\n");
    
    console.log('\033[32m',"    Today's Gold Price --> ", total2 + "/10gr");
    
    console.log("\n");
    
    console.log('\033[32m',"    Today's Silver Price -->", total3 + "/kg");
    
    console.log("\n");
    
    console.log('\033[32m',"    Today's CrudeOil Price -->", total6);
    
    console.log("\n");
    
    console.log('\033[31m',"  Currencies :- ")
    
    console.log("\n");
    
    console.log('\033[32m',"    USD to INR value --> ", total4);
    
    console.log("\n");
    
    console.log('\033[32m',"    EUR to INR value -->", total5);
    
    console.log("\n");
}