
async function apiTest(){
    try {

        const response = await fetch("https://api.coindek.com/v1/bpi/currentprice.json");

        const data = await response.json();
    
    } catch (err) {
        console.log(err)
    }
}

apiTest();
