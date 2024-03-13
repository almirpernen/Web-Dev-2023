export class Album {
    userId: number;
    id: number;
    title: string;
    
    constructor(userId: number=0, id: number=0, title: string='') {
        this.userId = userId;
        this.id = id;
        this.title = title;
    }
}