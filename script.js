let levels = [
    // const LEVEL_1 =
    [
        ["*","*","*","*","*","*","*","*","*","*","*",".","*"],
        ["*","S",".",".",".",".",".","*","*",".","*",".","T"],
        ["*","*","*","*","*",".",".",".",".",".","*",".","*"],
        ["*","*","*","*","*",".","*","*","*",".","*",".","*"],
        ["*","*","*","*","*",".","*","*","*","*","*",".","*"],
        ["*","*","*","*","*",".","*","*","*","*","*",".","*"],
        ["*","*","*","*","*",".",".",".",".",".",".",".","*"],
        ["*","*","*","*","*",".","*","*","*","*","*","*","*"],
        ["*",".",".",".",".",".",".",".",".",".","*","*","*"],
        ["*",".","*","*","*","*","*","*",".",".",".","*","*"],
        ["*",".",".",".",".","*","*","*","*","*","*","*","*"],
        ["*","*","*","*","*","*","*","*","*","*","*","*","*"]
      ],
    
    // const LEVEL_2 =
    [
        ["*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*"],
        ["*",".",".","S",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","*"],
        ["*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*",".","*"],
        ["*",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","*"],
        ["*",".","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*"],
        ["*",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","T"],
        ["*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*"]
      ],
    
    // const LEVEL_3 = 
    [
        ["*","*","*","*","*","*","*","*"],
        ["*","*","*","*","S","*","*","*"],
        ["*","*","*","*",".","*","*","*"],
        ["*","*","*","*",".","*","*","*"],
        ["*","*","*","*",".","*","*","*"],
        ["*",".",".",".",".",".",".","*"],
        ["*",".","*","*","*","*",".","*"],
        ["*",".",".","*","*","*",".","*"],
        ["*",".",".","*","*","*",".","*"],
        ["*","*",".","*","*","*","*","*"],
        ["*","T",".","*","*","*","*","*"],
        ["*","*","*","*","*","*","*","*"]
    ]

]

const displayMaze = (level) =>{
    // document.body.getElementById(main).style.display = "grid"
    let container = document.querySelector("main")
    container.style.display = "grid"
    container.style.gridTemplateColumns = `repeat(${level[0].length},50px)`
    while (container.firstChild){
        container.removeChild(container.firstChild)
    }

    for (let i = 0 ; i < level.length ; i++){
        for (let j = 0 ; j < level[i].length ; j++){
            let div = document.createElement("div")
            if (level[i][j] === "*"){
                div.id = `case${i}_${j}`
                div.className = "case wall"
            }
            if (level[i][j] === "S"){
                div.id = `case${i}_${j}`
                div.className = "case perso"
            }
            if (level[i][j] === "."){
                div.id = `case${i}_${j}`
                div.className = "case path"
            }
            if (level[i][j] === "T"){
                div.id = `case${i}_${j}`
                div.className = "case treasure"
            }
            container.appendChild(div)
        }
    }
}
let numberOfLevel = 0
displayMaze(levels[numberOfLevel])
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight"){
        for (let i = 0 ; i < levels[numberOfLevel].length ; i++){
            for (let j = 0 ; j < levels[numberOfLevel][i].length ; j++){
                if(levels[numberOfLevel][i][j] === "S"){
                    console.log("S")
                    console.log(levels[numberOfLevel][i][j+1])
                    if (levels[numberOfLevel][i][j+1] != "*" && levels[numberOfLevel][i][j+1] != "T" ) { // Here j+1 bc when we go to the right, it's to the nex column
                        levels[numberOfLevel][i][j] = "."
                        levels[numberOfLevel][i][j+1] = "S"
                        i+=1
                        j+=1
                        displayMaze(levels[numberOfLevel])
                    }
                    if (levels[numberOfLevel][i][j+1] === "T"){
                        alert("You got the cristal !")
                        numberOfLevel += 1
                        displayMaze(levels[numberOfLevel])
                    }
                }
            }
        }
    }
    if (e.key === "ArrowLeft"){
        for (let i = 0 ; i < levels[numberOfLevel].length ; i++){
            for (let j = 0 ; j < levels[numberOfLevel][i].length ; j++){
                if(levels[numberOfLevel][i][j] === "S"){
                    if (levels[numberOfLevel][i][j-1] != "*" && levels[numberOfLevel][i][j-1] != "T") {
                        levels[numberOfLevel][i][j] = "."
                        levels[numberOfLevel][i][j-1] = "S"
                        i+=1
                        j+=1
                        displayMaze(levels[numberOfLevel])
                    }
                    if (levels[numberOfLevel][i][j-1] === "T"){
                        alert("You got the cristal !")
                        numberOfLevel += 1
                        displayMaze(levels[numberOfLevel])
                    }
                }
            }
        }
    }
    if (e.key === "ArrowDown"){
        for (let i = 0 ; i < levels[numberOfLevel].length ; i++){
            for (let j = 0 ; j < levels[numberOfLevel][i].length ; j++){
                if(levels[numberOfLevel][i][j] === "S"){
                    if (levels[numberOfLevel][i+1][j] != "*" && levels[numberOfLevel][i+1][j] != "T") { 
                        levels[numberOfLevel][i][j] = "."
                        levels[numberOfLevel][i+1][j] = "S"
                        i+=1
                        j+=1
                        displayMaze(levels[numberOfLevel])
                    }
                    if (levels[numberOfLevel][i+1][j] === "T"){
                        alert("You got the cristal !")
                        numberOfLevel += 1
                        displayMaze(levels[numberOfLevel])
                    }
                }
            }
        }
    }
    if (e.key === "ArrowUp"){
        for (let i = 0 ; i < levels[numberOfLevel].length ; i++){
            for (let j = 0 ; j < levels[numberOfLevel][i].length ; j++){
                if(levels[numberOfLevel][i][j] === "S"){
                    if (levels[numberOfLevel][i-1][j] != "*" && levels[numberOfLevel][i-1][j] != "T") {
                        levels[numberOfLevel][i][j] = "."
                        levels[numberOfLevel][i-1][j] = "S"
                        i+=1
                        j+=1
                        displayMaze(levels[numberOfLevel])
                    }
                    if (levels[numberOfLevel][i-1][j] === "T"){
                        alert("You got the cristal !")
                        numberOfLevel += 1
                        displayMaze(levels[numberOfLevel])
                    }
                }
            }
        }
    }
})

/*  */