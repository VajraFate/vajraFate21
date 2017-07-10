'use strict';

const express = require('express');
let router = express.Router();

let userController = require('../controllers/userController.js');

router.get('/',userController.indexGet);
router.get('/allGoods',userController.allGoods);
router.get('/shopCar',userController.shopCar);
router.get('/user',userController.user);
router.get('/detail/:id',userController.detail);
router.get('/buy/:id',userController.buy);
router.post('/buy',userController.buyPost);
router.get('/orderList',userController.orderlist);
router.get('/orderListPayment',userController.orderlistPayment);
router.get('/orderListConfrimRec',userController.orderlistConfirmRec);
router.get('/delOrder',userController.delOrder);
router.get('/payment',userController.payment);
router.get('/confirmRec',userController.confirmRec);

module.exports = router;
