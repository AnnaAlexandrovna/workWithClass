class Human {

    name = null;
    weight = null;
    height = null;
    language = null;
    job = null;
    age = 0;
    alive = false;
    born = false;
    dead = false;
    _sex = null;
    #religion = null;

    constructor() {
        let myself = this;
        this.born = true;
        this.alive = true;
        this.tId = setInterval(function () {
            myself.aging();
        }, 10);
    }
    set religion(value) {
        this.#religion = value;
    }

    get religion() {
        return this.#religion;
    }

    setReligion(value) {
        this.#religion = value;
    }

    set sex(value) {
        if (value !== 'женщина' && value !== 'мужчина') {
            console.log('Значение не верно');
        } else {
            this._sex = value;
        }
    }

    get sex() {
        return this._sex;
    }
    aging() {
        this.about();
        this.age++;
        if (this.age == 80) {
            this.alive = false;
            this.dead = true;
            console.log('прибраля!');
            clearInterval(this.tId);
            this.about();
        }
    }
    go() {
        console.log('иду');
    }
    run() {
        console.log('бегу');
    }
    lieDown() {
        console.log('лежу');
    }
    speak() {
        console.log('говорю');
    }
    screaming() {
        console.log('кричу');
    }
    сrying() {
        console.log('плачу');
    }
    playing() {
        console.log('играю');
    }
    about() {
        console.log(
            'Жив: ' + this.alive + ' Мертв: ' + this.dead + ' Возраст - ' + this.age
        );
    }
}

class Male extends Human {
    constructor(){
        super();
        this.sex = "мужчина";
        this.setReligion("православный");
    }
}

let man = new Male();
console.log(man);

