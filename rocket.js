// 'use strict';

class Rocket {
    name = null;
    weigth = null;
    speed = null;
    actualSpeed = null;
    indexOverWeight = null;
    distance = null;
    direction = null;
    passWay = null;

    get notPassWay() {
        return this.distance - this.passWay;
    }
    set actualWeigth(value) {
        if (
            (value / this.weigth) * 100 - 100 < -10 ||
            (value / this.weigth) * 100 - 100 > 20
        ) {
            console.log('Отклонение');
        } else {
            this._actualWeigth = value;
        }
    }

    get actualWeigth() {
        return this._actualWeigth;
    }

    getOverWeight() {
        return (this.indexOverWeight = +(this.actualWeigth / this.weigth).toFixed(
            2
        ));
    }
    getRealSpeed() {
        return (this.actualSpeed = +(this.speed / this.indexOverWeight).toFixed(2));
    }

    init = function (name, weigth, speed) {
        this.name = name;
        this.weigth = weigth;
        this.speed = speed;
        this.actualWeigth = weigth;
        this.actualSpeed = speed;
        this.getOverWeight();
        this.getRealSpeed();
    };

    setLoad = function (value) {
        this.actualWeigth = value;
        this.indexOverWeight = this.getOverWeight();
        this.actualSpeed = this.getRealSpeed();
    };

    setRoute = function (direction, distance) {
        this.distance = distance;
        this.direction = direction;
    };

    show = function () {
        console.log('name is ' + this.name);
        console.log('weigth is ' + this.weigth);
        console.log('speed is ' + this.speed);
        console.log('actualWeigth is ' + this.actualWeigth);
        console.log('actualSpeed is ' + this.actualSpeed);
        console.log('indexOverWeight is ' + this.indexOverWeight);
        console.log('distance is ' + this.distance);
        console.log('direction is ' + this.direction);
        console.log('passWay is ' + this.passWay);
    };
}

let firstRocket = new Rocket();
firstRocket.init('Восток1', 201, 56880);
firstRocket.setLoad(202);
firstRocket.setRoute('Луна', 384400);
firstRocket.show();
console.log('---------');
let secondRocket = new Rocket();
secondRocket.init('Исследователь', 500, 85320);
secondRocket.setLoad(800);
secondRocket.setRoute('Марс', 79243000);
secondRocket.show();
console.log('---------');
let thirdRocket = new Rocket();
thirdRocket.init('Почта России', 300, 480000);
thirdRocket.setLoad(280);
thirdRocket.setRoute('Нептун', 4331900000);
thirdRocket.show();
console.log('---------');

Rocket.prototype.toString = function () {
    if (this.passWay < this.distance && this.passWay != null) {
        return (
            'Ракета ' +
            this.name +
            ' массой ' +
            this.actualWeigth +
            ' тонн летит на планету ' +
            this.direction +
            ' со скоростью ' +
            this.actualSpeed +
            ' км/ч. Пролетели ' +
            this.passWay +
            ' км.'
        );
    } else if (this.passWay == null) {
        return (
            'Ракета ' +
            this.name +
            ' массой ' +
            this.actualWeigth +
            ' тонн полетит на планету ' +
            this.direction +
            ' со скоростью ' +
            this.actualSpeed +
            ' км/ч. Запуск не начат. '
        );
    } else {
        return (
            'Ракета ' +
            this.name +
            ' массой ' +
            this.actualWeigth +
            ' тонн летела на планету ' +
            this.direction +
            ' со скоростью ' +
            this.actualSpeed +
            ' км/ч. Прилетела.'
        );
    }
};

console.log(firstRocket.toString());
console.log(secondRocket.toString());
// console.log(thirdRocket.toString());

let hour = 1000;
// let hour = 3600000;
Rocket.prototype.go = function () {
    let obj = this;
    let inter = setInterval(() => {
        if (obj.passWay < obj.distance) {
            obj.passWay += obj.actualSpeed;
            console.log(obj.toString());
        } else {
            clearInterval(inter);
            obj.passWay = obj.distance;
            // console.log(passWay);
        }
    }, hour);
    // console.log(this.toString());
};

thirdRocket.toString = function () {
    let leftPass = (this.distance - this.passWay).toFixed(2);
    return (
        this.name +
        ' долетим до планеты ' +
        this.direction +
        '. И не туда летали. Наша скорость ' +
        this.actualSpeed +
        ' км/ч. Осталось лететь ' +
        leftPass +
        ' км'
    );
};

console.log(thirdRocket.toString());
console.log('---------');

// setTimeout(() => {
//   firstRocket.go();
// }, hour * 0);
// setTimeout(() => {
//   secondRocket.go();
// }, hour * 5);
// setTimeout(() => {
//   thirdRocket.go();
// }, hour * 15);
