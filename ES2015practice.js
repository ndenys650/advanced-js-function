// forEach

function halfValues(arr){
    var newArr = []
    arr.forEach(function(val){
        newArr.push(val/2)
    })
    return newArr
}

function doubleValues(arr){
    var newArr = []
    arr.forEach(function(val){
        newArr.push(val*2)
    })
    return newArr
}

function onlyEvenValues(arr){
    var newArr = []
    arr.forEach(function(val){
        if(val % 2 === 0){
            newArr.push(val)
        }
    })
    return newArr
}

function showFirstAndLast(arr){
    var newArr = []
    arr.forEach(function(val){
        newArr.push(val[0]+val[val.length-1])
    })
    return newArr
}

function addKeyAndValue(arr,key,value){
    arr.forEach(function(val){
        val[key] = value
    })
    return arr
}

function vowelCount(str){
    var splitArr = str.split("")
    var obj = {}
    var vowels = 'aeiou'
    splitArr.forEach(function(letter){
        if(vowels.indexOf(letter.toLowerCase()) !== -1){
            if(letter in obj){
                obj[letter]++
            } else {
                obj[letter] = 1
            }
        }
    })
    return obj
 }



//  map

function tripleValues(arr){
    return arr.map(function(value){
        return value * 3
    })
}

function doubleValues(arr){
    return arr.map(function(val){
        return val * 2
    })
}

function valTimesIndex(arr){
    return arr.map(function(val, idx){
        return val * idx
    })
}

function extractKey(arr, key){
    return arr.map(function(value){
        return value[key]
    })
}

function extractFullName(arr){
    return arr.map(function(value){
        return value.first + " " + value.last
    })
}

// filter returns a boolean - iterates through an array and will return value if it returns true

function onlyFourLetterNames(arr){
    return arr.filter(function(value){
        return value.length === 4
    })
}

function filterByValue(arr, key){
    return arr.filter(function(val){
        return val[key] !== undefined
    })
}

function find(arr, searchValue){
    return arr.filter(function(val){
        return val === searchValue;
    })[0]
}

function findInObj(arr, key, searchValue){
    return arr.filter(function(val){
        return val[key] === searchValue
    })[0]
}

function removeVowels(str){
    var vowels = 'aeiou'
    return str.toLowerCase().split('').filter(function(value){
        return vowels.indexOf(value) === -1
    }).join('')
}

function doubleOddNumbers(arr){
    return arr.filter(function(val){
        return val % 2 !== 0
    }).map(function(val){
        return val*2
    })
}

// some - if callback to function returns true for any value in the arr, the function returns true

function hasEvenNumber(arr){
    return arr.some(function(value){
        return value % 2 === 0
    })
}

function hasComma(str){
    return str.split('').some(function(value){
        return value === ','
    })
}

// every - if callback to function returns true for all values, the  function returns true

function allLowerCase(str){
    return str.split('').every(function(value){
        return value === value.toLowerCase()
    })
}

function allArrays(arr){
    return arr.every(Array.isArray)
}

// 

function hasOddNumber(arr){
    return arr.some(function(value){
        return value % 2 !== 0
    })
}

function hasAZero(num){
    return num.toString().split().some(function(value){
        return value === '0'
    })
}

function hasOnlyOddNumbers(arr){
    return arr.every(function(value){
        return value % 2 !== 0
    })
}

function hasNoDuplicates(arr){
    return arr.every(function(value){
        return arr.indexOf(value) === arr.lastIndexOf(value)
    })
}

function hasCertainKey(arr, key){
    return arr.every(function(value){
        return key in value
    })
}

function hasCertainValue(arr, key, searchValue){
    return arr.every(function(value){
        return value[key] === searchValue
    })
}

// reduce - turn an array into another data structure, 

function sumOddNumbers(arr){
    return arr.reduce(function(acc, nxtval){
        if(nxtval % 2 !== 0){
            acc += nxtval
        }
        return acc
    }, 0)
}

//

function extractValue(arr, key){
    return arr.reduce(function(acc, next){
        acc.push(next[key])
        return acc
    }, [])
}

function vowelCount(str){
    var vowels = 'aeiou'
    return str.split('').reduce(function(acc, next){
        if(vowels.indexOf(next.toLowerCase()) !== -1){
            if(next in acc){
                acc[next]++
            } else {
                acc[next] = 1
            }
        }
        return acc
    }, {})
}

function addKeyAndValue(arr, key, value){
    return arr.reduce(function(acc, next, idx){
        acc[idx][key] = value
        return acc
    }, arr)
}

function partition(arr, cb){
    return arr.reduce(function(acc, next){
        if(cb(next)){
            acc[0].push(next)
        } else {
            acc[1].push(next)
        }
        return acc
    }, [[], []])
}

// closures

function specialMultiply(a,b){
    if(arguments.length === 1){
        return function(b){
            return a*b
        }
    }
    return a*b
}

function guessingGame(amount){
    var answer = Math.floor(Math.random()*11)
    var guesses = 0
    var completed = false
    return function(guess){
        if(!completed){
            guesses++
            if(guess === answer){
                completed = true
                return "You got it!"
            }
            else if(guess > answer) return "Your guess is to high"
            else if(guess < answer) return "Your guess is to low"
            else if(guesses === amount){
                completed = true
                return "no more guesses the answer was" + answer
            }
        }
        return "all don!"
    }
}

// call, apply, bind

function arrayFrom(arrayLikeObject){
    return [].slice.call(arrayLikeObject)
}

function sumEvenArguments(){
    var newArgs = [].slice.call(arguments)
    return newArgs.reduce(function(acc, next){
        if(next % 2 === 0){
            return acc+next
        }
        return acc
    }, 0)
}

function invokeMax(fn, num){
    var max = 0
    return function(){
        if(max >= num){
            return "Maxed Out!"
        }
        max++
        return fn.apply(this, arguments)
    }
}

function once(fn, thisArg){
    var hasBeenCalled = false
    return function(){
        if(!hasBeenCalled){
            hasBeenCalled = true
            return fn.apply(thisArg, arguments)
        }
    }
}

function bind(fn, thisArg){
    var outerArgs = [].slice.call(arguments,2)
    return function(){
        var innerArgs = [].slice.call(arguments)
        var allArgs = outerArgs.concat(innerArgs)
        return fn.apply(thisArg, allArgs)
    }
}

function flip(fn, thisArg){
    var outerArgs = [].slice.call(arguments,2)
    return function(){
        var innerArgs= [].slice.call(arguments)
        var allArgs = outerArgs.concat(innerArgs).slice(0, fn.length)
        return fn.apply(thisArg, allArgs.reverse())
    }
}

// constructor functions

function Person(firstName, lastName, favoriteColor, favoriteNumber){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;
    this.multiplyFavoriteNumber = function(num){
        return num * this.favoriteNumber
    }
}

function Parent(firstName, lastName, favoriteColor, favoriteFood){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteFood = favoriteFood;
}

function Child(firstName, lastName, favoriteColor, favoriteFood){
    Parent.apply(this, arguments)
}

// prototypes

function Person(firstName, lastName, favoriteColor, favoriteNumber){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;
    this.family = []
}

Person.prototype.fullName = function(){
    return this.firstName + ' ' + this.lastName
}

Person.prototype.addToFamily = function(person){
    if(this.family.indexOf(person) === -1 && person instanceof Person){
        this.family.push(person)
    }
    return this.family.length
}

Array.prototype.map = function(callback){
    var newArr = []
    for(var i = 0; i<this.length; i++){
        newArr.push(callback(this[i], i, this))
    }
    return newArr
}

String.prototype.reverse = function(){
    var newStr = ''
    for(var i = this.length -1; i >= 0; i--){
        newStr += this[i]
    }
    return newStr
}

// inheritance

function Vehicle(make, model, year){
    this.make = make
    this.model = model
    this.year = year
}

Vehicle.prototype.start = function(){
    return "VROOM!"
}

Vehicle.prototype.toString = function(){
    return "The make, model, and year are " + this.make + " " + this.model + " " + this.year
}

function Car(make, model, year){
    Vehicle.apply(this,arguments)
    this.numWheels = 4
}

Car.prototype = Object.create(Vehicle.prototype)
Car.prototype.constructor = Car

function Motorcycle(make, model, year){
    Vehicle.apply(this,arguments)
    this.numWheels = 2
}

Motorcycle.prototype = Object.create(Vehicle.prototype)
Motorcycle.prototype.constructor = Motorcycle