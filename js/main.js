var t_case = document.getElementsByClassName("case");
var dis = document.getElementById('dis');
let move = ["x", "o"];
let turn = 0;
let map = 
        [
            ["_", "_", "_"],
            ["_", "_", "_"],
            ["_", "_", "_"],
        ];


console.table(map);

/**
 * We check every click on the tic tac toe grid
 */
document.addEventListener("click", (e) => {
    let el = e.target;
    if (el.classList.contains("case") && caseUsed(el)) {
        playerMove(e.target, move[turn++ % 2]);
        displayMap(getMap());
    }
}, false);


/**
 * A simple function to alternate between 'x' player and 'o' player
 * @param {*} e 
 * @param {*} l 
 */
let playerMove = (e, l) => {
    e.innerText = l;
}


/**
 * Check the game's stat to see if one the player as won
 */
let gameStat = () => {
    console.log("won ?");
}


/**
 * Get the tic tac toe map
 * @returns the tic tac toe map
 */
let getMap = () => {
    let ret = [];
    ret.length = t_case.length;
    console.log(ret.length)
    for (const c in t_case) {
        const el = t_case[c];
        // if c is not a number we continue
        if (!isNaN(c)) {
            ret[c] = el.innerText ? el.innerText : "_";
        }
    }
    return ret;
}


/**
 * Display the tic tac toe map
 * @param {*} m the map to display
 */
let displayMap = (m) => {
    console.log(m);
}



/**
 * check if the case is used
 * @param {*} c 
 * @returns true if the case is empty else false
 */
let caseUsed = (c) => {
    let ret = false;
    if (c.innerText.length == 0) {
        ret = !ret;
    }
    return ret;
}


/**
 * check if one of the neighbor is the same, and if it's the case, we check if the neighbor's neighbor is also the same
 * maximum three iterations
 * @param {*} c the case we check
 */
let checkMyNeighbor = (c) => {
    // for () {

    // }
}


// let getNeighbor = (c) => {
//     let n = [];
//     for () {
//         n.push()
//     }
    
//     return n;
// }


/**
 * Reset the grid
 */
let reset = () => {
    for (const c in t_case) {
        t_case[c].innerText = "";
    }
}