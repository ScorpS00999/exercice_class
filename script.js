"use script";

class Pokemon{
    constructor(name, attack, defense, hp, luck){
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.hp = hp;
        this.luck = luck;
    }

    isLucky(){
        return this.luck > Math.random();
    }

    attackpokemon(pokemon){
        if (this.isLucky()) {
            let dammage = this.attack - pokemon.defense;
            pokemon.hp -= dammage;
            console.log(`${this.name} a attaqué ${pokemon.name} de ${dammage} points de degats, il reste à ${pokemon.name} ${pokemon.hp} points de vie`);
        } else {
            console.log(`${this.name} a raté son attaque`);
        }
    }
}


let Gardevoir = new Pokemon('Gardevoir', 90, 65, 68, 0.8);
let Leviator = new Pokemon('Leviator', 100, 79, 95, 0.2);

while (Gardevoir.hp > 0 && Leviator.hp > 0) {
    Gardevoir.attackpokemon(Leviator);
    if (Leviator.hp < 0 ) {
        console.log("Leviator est mort");
        break;
    }
    Leviator.attackpokemon(Gardevoir);
    if (Gardevoir.hp < 0 ) {
        console.log("Gardevoir est mort");
        break;
    }
}
