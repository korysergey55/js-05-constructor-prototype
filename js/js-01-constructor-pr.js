const randomInt = (max, min) => parseInt(Math.random() * (max - min) + min);
const Char = function (name, type, HP, MP) {
  this.name = name;
  this.type = type;
  this.HP = HP;
  this.MP = MP;
  this.isLife = true;
  this.getDmg = function () {
    if (this.manaCost > this.MP) return 0;
    this.MP -= this.manaCost;
    return this.dmg;
  };
  this.setDmg = function (dmg) {
    if (!this.isLife) return false;
    this.HP -= dmg;
    if (this.HP <= 0) this.isLife = false;
  };
};
const Orc = function (name) {
  Char.call(this, name, "orc", 2000, 500);
  this.dmg = 10;
  this.manaCost = 15;
};
const Elf = function (name) {
  Char.call(this, name, "elf", 1000, 1500);
  this.dmg = 15;
  this.manaCost = 15;
};
const Human = function (name) {
  Char.call(this, name, "human", 1500, 1000);
  this.dmg = 8;
  this.manaCost = 15;
};
const countChar = randomInt(10, 20);
const lestCharType = [Orc, Elf, Human];
const listName = [
  "Bill",
  "Sem",
  "Michle",
  "Gena",
  "Daria",
  "Pavel",
  "Ivan",
  "Vitaly",
  "Vova",
  "Emma",
  "Amelia",
];
const server = [];
for (let i = 0; i < countChar; i++)
  server.push(
    new lestCharType[randomInt(0, lestCharType.length)](
      listName[randomInt(0, listName.length)]
    )
  );
server[1].setDmg(server[0].getDmg());
console.log(server);
