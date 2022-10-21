var pronoun = ['the','our'];
var adj = ['great', 'big' ];
var noun = ['jogger','racoon'];
var extension =[".com", ".us", ".io"]




  for (let i=0; i<pronoun.length; i++) {
    for(let j=0; j<adj.length; j++){
        for(k=0; k<noun.length; k++){
            for(n=0; n<extension.length; n++){
        console.log(pronoun[i],adj[j],noun[k],extension[n]);
            }
        }
    }
 }
