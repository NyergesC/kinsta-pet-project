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
    value:number,
    id:number 
}

export enum SortBlogs {
  ASC = 'Author A-Z',
  DESC = 'Author Z-A'
};