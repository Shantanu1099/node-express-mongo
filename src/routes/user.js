import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        Message: "WorkingS Successfully"
    });    
});

router.get('/api/1', (req, res) => {
    res.json({
        Message: "WorkingS Successfully",
        api: 1
    });    
});

router.get('/api/2', (req, res) => {
    res.json({
        Message: "WorkingS Successfully",
        api: 2
    });    
});

router.get('/api/3', (req, res) => {
    res.json({
        Message: "WorkingS Successfully",
        api: 3
    });    
});

router.get('/api/info', (req, res) => {
    res.send("<h1>HELLOOO!! from backend</h1><h4>Tag: 1.0.0</h4>")  
});

export default router;