const { Order } = require('../models')
const OrderController = {
    create(req, res) {
        Order.create(req.body)
            .then(order => {
                res.status(200).send(order);
            })
            .catch( error => {
                console.log(error)
                res.status(500).send({ 
                    message : 'Ha habido un problema creando el pedido'});
            });
    }
}
module.exports = OrderController

// const { Order } = require('../models');
// const OrderController = {
//   async addOrder(req,res){
//     try {
//       await Order.create(req.body.order);
//       res.status(201).send({ 
//         message : 'Your order is ready'
//       });
//     } catch (error) {
//       res.status(500).send({ 
//         message : 'There was a problem' 
//       });
//     }
//   },
//   async deleteOrder(req,res){
//     try{
//       await Order.delete(req.body.order);
//     }
//   }
// }