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
    author:string, 
    body:string, 
   
}



export enum SortBlogs {
  ASC = 'Author A-Z',
  DESC = 'Author Z-A'
};