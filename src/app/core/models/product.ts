export class Product {
    public id:number;
    public imgUrl: string;
    public title:string;
    public price: number;
    public category: string;
    public description: string;
      

    constructor(id:number,
        imgUrl: string,
        title:string,
        price: number,
        category: string,
        description: string,
        
        ){
            this.id = id;
            this.imgUrl = imgUrl;
            this.title = title;
            this.price = price;
            this.category = category;
            this.description = description;
    }
}