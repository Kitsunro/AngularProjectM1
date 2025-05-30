export class Assignment {
    _id!: string;
    nom!: string;
    dateDeRendu!: Date;
    rendu!: boolean;
    eleve!: string; 
    matiere!: string; 
    imageMatiere?: string; 
    professeur!: string; 
    imageProfesseur?: string; 
    note?: number; 
    remarques?: string;
}