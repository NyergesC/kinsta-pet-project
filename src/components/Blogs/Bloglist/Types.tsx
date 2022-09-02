export type Blogs = {
    blogs: Blog[]
}

export type Blog = {
    title: string,
    date: string,
    small: string,
    author:string, 
    body:string, 
    read:string,
    id:number 
}

export enum SortBlogs {
  ASC = 'Sort ascending',
  DESC = 'Sort descending'
};