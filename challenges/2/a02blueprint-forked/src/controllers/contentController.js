import express from "express"

export const home = (req, res) => res.send("<h1>Home</h1>");
export const about = (req, res) => res.send("<h1>About</h1>");
export const contact = (req, res) => res.send("<h1>Contact</h1>");