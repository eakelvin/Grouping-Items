let fruit = ['pawpaw', "apple", 'pawpaw', "orange", 'pawpaw', 'strawberry', 'strawberry', "apple", 'pawpaw', "apple", 'pawpaw', "orange", 'strawberry', 'strawberry', 'pawpaw', 'mango', 'banana', 'mango', 
'banana', 'mango', 'banana']

let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")
let bananaShelf = document.getElementById("banana-shelf")
let mangoShelf = document.getElementById("mango-shelf")
let pawpawShelf = document.getElementById("pawpaw-shelf")
let strawberryShelf = document.getElementById("strawberry-shelf")

function put() {
    for (let i=0; i<fruit.length; i++){
        if (fruit[i] === "apple") {
             appleShelf.textContent += " apple "
        }
        else if (fruit[i] === "orange") {
             orangeShelf.textContent += " orange "
        }
        else if (fruit[i] === "mango") {
            mangoShelf.textContent += " mango "
        }
        else if (fruit[i] === "banana") {
            bananaShelf.textContent += " banana "            
        }
        else if (fruit[i] === "pawpaw") {
            pawpawShelf.textContent += " pawpaw "
        }
        else if (fruit[i] === "strawberry") {
            strawberryShelf.textContent += " strawberry "
        }
    }
}

put()
