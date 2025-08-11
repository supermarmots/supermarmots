process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ")[0];
    const m = data.split(" ")[1];
    
    for(let i =0 ; i < Number(m); i++){
        let row = ""
        for (let j = 0; j < Number(n); j++) {
            row += "*"
        }
        console.log(row);
    }
});