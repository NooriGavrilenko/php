const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    
    

    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Ольга",
            "id_2": "Анастасия",
            "id_3": "Ирина",
            "id_4": "Арина",
            "id_5": "Мария",
            "id_6": "Гуля",
            "id_7": "Ксения",
            "id_8": "Алефтина",
            "id_9": "Евгения",
            "id_10": "Валентина"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function(pol) {
        if (pol == 0) {
            return this.randomValue(this.firstNameFemaleJson);
        }
        else {
            return this.randomValue(this.firstNameMaleJson);
        }
    },


     randomSurname: function() {

        return this.randomValue(this.surnameJson);

    },

    randomGender: function() {
        const pol = this.randomIntNumber(1, 0);
        return pol;
    },

    getPerson: function () {

        monthArray = {                
            1: "Январь",
            2: "Февраль",
            3: "Март",
            4: "Апрель",
            5: "Май",
            6: "Июнь",
            7: "Июль",
            8: "Август",
            9: "Сентябрь",
            10: "Октябрь",
            11: "Ноябрь",
            12: "Декабрь"
        };


        const pol = this.randomGender();
        var gender = (pol == 0)? this.GENDER_FEMALE : this.GENDER_MALE;

        var familiya = this.randomSurname();
        var oconcanie =  (pol == 0)? 'а' : '';

        var godRojdeniya = this.randomIntNumber(1962, 2010).toString();
        var month = this.randomIntNumber(1, 12);

        
        var strMonth = monthArray[month];
        
        var posDayMonth = 31;
        if (month == 2) {
            posDayMonth = 28;
        }
        else if (month == 4 || month == 6 || month == 9 || month == 11) {
            posDayMonth = 30;
        }
        var denRojdeniya = this.randomIntNumber(1, posDayMonth).toString();
        var dataRojdeniya = (denRojdeniya + " " + strMonth + " " + godRojdeniya);

        this.person = {};
        this.person.familiya = (familiya + oconcanie);
        this.person.firstName = this.randomFirstName(pol);
        this.person.gender = gender;
        this.person.dataRojdeniya = dataRojdeniya;
        return this.person;
    }
};
