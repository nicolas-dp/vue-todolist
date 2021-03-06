/* Rifare l'esercizio della to do list. Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
text, una stringa che indica il testo del todo
done, un booleano (true/false) che indica se il todo è stato fatto oppure no

BONUS:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista

2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa) */

/******** End description *******/

//ogni todo sarà un oggetto, formato da due proprietà:text, una stringa che indica il testo del todo done, un booleano (true/false) che indica se il todo è stato fatto oppure no


const app = new Vue({

    el: "#app",

    data: {

        newTask: '',

        tasks: [
            {
                text: 'Fare la spesa',
                done: true

            },

            {
                text: 'Passegiata con il cane',
                done: false

            },

            {
                text: 'Fare l esercizio to do list',
                done: false

            },

            {
                text: 'Venerdì bere con gli amici',
                done: true

            },

            {
                text: 'Andare al mare',
                done: true

            }
        ]
    },

    /* MILESTONE 2
     Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
      */
    methods: {
        removeTask(index) {
            //console.log(this.tasks);
            this.tasks.splice(index, 1)

        },
        /* MILESTONE 3
         Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti. */
        addTask() {
            //console.log(this.tasks);
            if (this.newTask == "") {
                alert("devi inserire almeno un carattere")
            } else {
                this.tasks.unshift({ text: this.newTask, done: false })
                console.log(this.newTask);
                this.newTask = ''
            }

        },
        /* BONUS
        2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa) */

        crossText(index) {
            //console.log(this.tasks[index].done);
            if (this.tasks[index].done == true) {
                this.tasks[index].done = false
            } else if (this.tasks[index].done == false) {
                this.tasks[index].done = true
            }
        }
    }



})