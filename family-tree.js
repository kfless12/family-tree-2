class FamilyTree {
  constructor (name) {
    if(typeof name === 'string'){
    this.value = name
    } else {throw 'error'};
    this.children = []
  }
  familySize(){
    return this.children.length + 1
  }
  findMember(name){
    for (let i = 0; i < this.children.length; i++){
      if (this.children[i].value === name){
        return this.children[i]
      }
    }
      return undefined
    }
   
  log(){
    let list = [`-- ${this.value}`]
    this.children.map(function (x){
      list.push(`---- ${x.value}`)
      x.children.map(function(x){
      list.push(`------ ${x.value}`)
      })})    
let tot = [list.join('\n')]
    return tot
  }
  insert(name){
    return this.children.push(new FamilyTree(name))
  }

}
const szwajkowskis = new FamilyTree('Pop');

szwajkowskis.insert('Mike');
szwajkowskis.insert('Amy');
szwajkowskis.insert('Todd');

const mikesFamily = szwajkowskis.findMember('Mike');

mikesFamily.insert('Eliot');
mikesFamily.insert('Elise');
mikesFamily.insert('Cas');
mikesFamily.insert('George');
mikesFamily.insert('Lear');

const amysFamily = szwajkowskis.findMember('Amy');

amysFamily.insert('Henry');
amysFamily.insert('Vivian');

const log = szwajkowskis.log();

console.log(log)

module.exports = FamilyTree;
