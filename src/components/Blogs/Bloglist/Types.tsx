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