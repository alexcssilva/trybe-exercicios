/* PARTE 1 - 1 - Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
Note que o parâmetro da função já está sendo passado na chamada da função.
2 - Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
Modifique o nome da pessoa compradora.
Modifique o valor total da compra para R$ 50,00.
 */

const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  
  const nameBuyer = order.order.delivery.deliveryPerson;
  const recipient = order.name;
  const phoneNumber = order.phoneNumber;
  const streetAddress = order.address.street;
  const numberAddress = order.address.number;
  const apartAddress = order.address.apartment;

  console.log(`Olá ${nameBuyer}, entrega para: ${recipient}, Telefone: ${phoneNumber}, R. ${streetAddress}, Nº: ${numberAddress}, AP: ${apartAddress}.`);
}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const nameBuyer = order.name = 'Luiz Silva';
  const priceDrink = order.order.drinks.coke.price = 50;

  console.log(`Olá ${nameBuyer}, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ ${priceDrink},00.`);
}

orderModifier(order);
