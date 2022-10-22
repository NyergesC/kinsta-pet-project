import bcrypt from 'bcryptjs'
import  jwt  from "jsonwebtoken"
import {  APP_SECRET } from "../utils"
import { PrismaClient } from "@prisma/client";


export const Mutation = {

    addBlog: async (parent: any, {input} : { input:{ title:string, body:string, small:string, name:string} }, context:any) => {

        const  { title, body, small, name } = input;

        const { userId } = context;

        const addBlog = await context.prisma.blog.create({
            data: { 
                title: title,
                body:body,
                small:small,
                name:name,
                author: { connect: { id: userId } },
            }
        })

        return addBlog
    }, 

    updateBlog: async (parent: any, { id, input } : {id:string, input:{ title:string, body:string, small:string}}, { prisma }: { prisma: PrismaClient }) => {

        const  { title, body, small } = input;

        const updateBlog = await prisma.blog.update({
            where: {
                id: id
            },
            data: { 
                title: title,
                body:body,
                small:small,

            }
        });

        return updateBlog
    },

    deleteBlog: async (parent: any, { id }:{id:string}, { prisma }: { prisma: PrismaClient }) => {
        const deleteBlog = await prisma.blog.delete({
            where: {
                id: id,
            },
        })
        return deleteBlog

    },

    
    addReview: async (parent: any, { input }:{input:{comment:string, rating:number,text:string, authorId:string, tripId:string}}, { prisma }: { prisma: PrismaClient }) => {

        const  { comment, text, rating, authorId, tripId } = input;

        const addReview = await prisma.review.create({
            data: { 
                comment: comment,
                text:text,
                rating:rating,
                authorId:authorId,
                tripId:tripId
            }
        })

        return addReview
    }, 

    deleteReview: async (parent: any, { id }:{id:string}, { prisma }: { prisma: PrismaClient }) => {
        await prisma.review.delete({
            where: {
                id: id,
            },
        })
        return true

    },

    signup: async (parent: any, args: any, { prisma }: { prisma: PrismaClient }, info:any) => {
        // 1 jelszo titkositasa 
        
        const password = await bcrypt.hash(args.password, 10)

        // 2 store the new user
        const user = await prisma.user.create({ data: { ...args, password } })

        // 3
        const token = jwt.sign({ userId: user.id }, APP_SECRET)

        // 4
        return {
            token,
            user,
        }
    },

    login: async(parent: any, args: any, { prisma }: { prisma: PrismaClient }, info:any) => {
            // 1
        const user = await prisma.user.findUnique({ where: { email: args.email } })
        if (!user) {
            throw new Error('No such user found')
        }

        // 2
        const valid = await bcrypt.compare(args.password, user.password)
        if (!valid) {
            throw new Error('Invalid password')
        }

        const token = jwt.sign({ userId: user.id }, APP_SECRET)

        // 3
        return {
            token,
            user,
        }
      }
    

}