export class Assignment {
    _id!: string; // Pour la data table angula
    id!: number;
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