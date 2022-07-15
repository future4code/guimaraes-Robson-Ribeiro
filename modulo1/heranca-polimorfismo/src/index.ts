import express, { Request, Response } from 'express'
import User from './Class/User';

import app from "./app";
import Customer from './Class/Customer';

//execicio 2
const user = new User(Math.random().toString(), "projetos.r@hotmail.com", "Robson Rodrigues Ribeiro", "123mudar")
console.log(user.getPassword())


//exercicio 3
const customer = new Customer(Math.random().toString(), "projetos.r@hotmail.com", "Robson Rodrigues Ribeiro", "123mudar", "1234-1334-2123-2243")
console.log(customer.introduceYourself())