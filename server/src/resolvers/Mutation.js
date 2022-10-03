import bcrypt from 'bcryptjs'
import  jwt  from "jsonwebtoken"
import {  APP_SECRET, getUserId } from "../utils.js"
/* const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken"); */
/* import pkg from 'bcryptjs';
import {pgk as pgkjwt} from 'jsonwebtoken';

const { jwt } = pgkjwt;

const { bcrypt } = pkg; */

export const Mutation = {

    addBlog: async (parent, { input }, { prisma }) => {

        const  { title, body, small } = input;

        const { userId } = prisma;

        const addBlog = await prisma.blog.create({
/*             include:{author:true}, */
            data: { 
                title: title,
                body:body,
                small:small,
                // authorId:authorId
                author: { connect: { id: userId } },
            }
        })

        return addBlog
    }, 

    updateBlog: async (parent, { id, input }, { prisma }) => {

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

    deleteBlog: async (parent, { id }, { prisma }) => {
        await prisma.blog.delete({
            where: {
                id: id,
            },
        })
        return true

    },

    
    addReview: async (parent, { input }, { prisma }) => {

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

    deleteReview: async (parent, { id }, { prisma }) => {
        await prisma.review.delete({
            where: {
                id: id,
            },
        })
        return true

    },

    signup: async (parent, args, {prisma}, info) => {
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

    login: async (parent, args, {prisma}, info) => {
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