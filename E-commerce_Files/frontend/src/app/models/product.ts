export class Product {
    id: number;
    product: string;
    description: string;
    slug:string;
    details:string;
    price: number;
    imageUrl: string;
    featured: boolean;
    category_id:number;
    active: boolean;
    views:number ;
    likes:number;
    comment_id: number;
    path:string;
  
    constructor(id, product, description = '', slug = '', details = '', price = 0, imageUrl = '', 
    featured = false, category_id = 1, active= true, views = 1, likes = 1, comment_id = 1, path = '' ) {
      this.id = id
      this.product = product
      this.description = description
      this.slug = slug
      this.details = details
      this.price = price
      this.imageUrl = imageUrl
      this.featured = featured
      this.category_id = category_id
      this.active = active
      this.views = views
      this.likes = likes
      this.comment_id = comment_id
      this.path = path



    }
  }