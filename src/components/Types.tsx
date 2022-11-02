
export type Trips = {
    trips: Trip[]
}

export type Trip = {
    destination: string,
    description: string,
    distance: string,
    duration:string, 
    src:string,
    alt:string,
    id:string,
    tripCategory:{
      name:string,

    },
    reviews:{
      rating:number,
      comment:string,
      text:string,
      tripId:string,
      author:{
        name:string
      }

    }
}

export type Reviews = {
  reviews: Review[]
}

export type Review = {
  comment:string,
  text:string,
  rating:number,
  tripId:string,
  author:{
    name:string
  }
}


export type Blogs = {
    blogs: Blog[]
}

export type Blog = {
    id:string,
    title: string,
    name:string,
    createdAt: string,
    updatedAt: string,
    small:string,
    body:string, 
    author:{
      name:String
    }
  
}



export enum SortBlogs {
  ASC = 'Author A-Z',
  DESC = 'Author Z-A'
};