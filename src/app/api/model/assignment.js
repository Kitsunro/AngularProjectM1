let mongoose = require('mongoose');
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");

let Schema = mongoose.Schema;

let AssignmentSchema = Schema({
    _id: string,
    nom: string,
    dateDeRendu: Date,
    rendu: boolean,
    eleve: string,
    matiere: string, 
    imageMatiere: string, 
    professeur: string,
    imageProfesseur: string, 
    note: number, 
    remarques: string
});
AssignmentSchema.plugin(aggregatePaginate);
// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('Assignment', AssignmentSchema);
