function Orders() {
  const Orders = [
    {
      id: "NEGEC0097439103",
      status: "Delivered",
      date: "12/2/2022",
      total: "₦ 10,000",
      items: [
        {
          id: "NEGEC0097439103",
          name: "Gray comfortable chair",
          image: "./images/products/product1.jpg",
          price: "₦ 10,000",
          quantity: 1,
          total: "₦ 10,000",
        },
        {
          id: "NEGEC0097439103",
          name: "Gray comfortable sofa",
          image: "./images/products/product2.jpg",
          price: "₦ 10,000",
          quantity: 2,
          total: "₦ 20,000",
        },
        {
          id: "NEGEC0097439103",
          name: "Gray comfortable sofa",
          image: "./images/products/product3.jpg",
          price: "₦ 10,000",
          quantity: 1,
          total: "₦ 10,000",
        },
        {
          id: "NEGEC0097439103",
          name: "Gray comfortable sofa",
          image: "./images/products/product3.jpg",
          price: "₦ 10,000",
          quantity: 1,
          total: "₦ 10,000",
        },
        {
          id: "NEGEC0097439103",
          name: "Gray comfortable sofa",
          image: "./images/products/product3.jpg",
          price: "₦ 10,000",
          quantity: 1,
          total: "₦ 10,000",
        },
      ],
    },

    {
      id: "NEGEC0097439103",
      status: "Pending",
      date: "12/12/2021",
      total: "₦ 10,000",
      items: [
    
        {
          id: "NEGEC0097439103",
          name: "Gray comfortable sofa",
          image: "./images/products/product2.jpg",
          price: "₦ 10,000",
          quantity: 2,
          total: "₦ 20,000",
        },
        {
          id: "NEGEC0097439103",
          name: "Gray comfortable sofa",
          image: "./images/products/product3.jpg",
          price: "₦ 10,000",
          quantity: 1,
          total: "₦ 10,000",
        },
      ],
    },

    {
      id: "NEGEC0097439103",
      status: "Cancaled",
      date: "12/12/2021",
      total: "₦ 10,000",
      items: [
        {
          id: "NEGEC0097439103",
          name: "Gray comfortable chair",
          image: "./images/products/product1.jpg",
          price: "₦ 10,000",
          quantity: 1,
          total: "₦ 10,000",
        },
        {
          id: "NEGEC0097439103",
          name: "Gray comfortable sofa",
          image: "./images/products/product2.jpg",
          price: "₦ 10,000",
          quantity: 2,
          total: "₦ 20,000",
        },
        {
          id: "NEGEC0097439103",
          name: "Gray comfortable sofa",
          image: "./images/products/product3.jpg",
          price: "₦ 10,000",
          quantity: 1,
          total: "₦ 10,000",
        },
      ],
    },


  ];
  return (
    <div className="flex flex-col gap-9 content-center">
      <div className="">
        <h1 className="text-primary mb-2">Orders</h1>
        <p className="text-dark">
          View your order history and check the delivery status for items
        </p>
      </div>

      {Orders.map((order,ind) => (
        <div className="flex  flex-col lg:flex-row gap-4 bg-bgColor px-5 w-full lg:px-10 py-10 rounded-[16px] shadow-gray " key={ind}>
          <div className="w-full">
            <div className="flex flex-col gap-4">
              <div className="w-full flex flex-row items-center  gap-1 ">
                <p className="text-primary font-bold "> {order.id} </p>
                <p className={`${order.status === 'Delivered'?'bg-green-600/60 ': (order.status === 'Pending')? 'bg-secondary':'bg-error' } text-sm text-white text-bold px-4 py-1 rounded-[6px]`}> {order.status} </p>
              </div>

              <div className="w-full mt-[-10px]">
                <p className="text-dark text-bold flex items-center align-top"> <img src="./icons/date.svg" alt="date" className="mr-1 invert-[0.4] inline-block"/> placed on {new Date(order.date).toUTCString().slice(0,17)} </p>
              </div>
              <div className="w-full flex flex-col lg:flex-row gap-6 divide-y-2 lg:divide-x-2 lg:divide-y-0 divide-gray-300 ">
                {
                  order.items.map((item,ind) => (
                    ind < 3 &&
                    <div className="flex  first:pt-0 pt-7 lg:pt-0 lg:first:ps-0 lg:ps-8 flex-row gap-2 flex-wrap" key={ind}>
                      <img src={`${item.image}`} alt="product" className="w-20 h-20 rounded-[8px]"/>
                      <div className="flex flex-col gap-1 text-[14px]">
                        <p className="text-black font-light"> {item.name} </p>
                        <p className="text-dark" > Quantity: <span className="text-black">
                        {item.quantity} 
                          </span> </p>
                          <button className="text-primary font-semibold lg:hidden xl:flex  border-2 border-gray-300 px-2 py-1 transition duration-500 rounded-[8px] hover:bg-primary hover:text-white hover:border-primary "> Review Product </button>
                      </div>
                      <button className="text-primary font-semibold hidden lg:flex xl:hidden  border-2 border-gray-300 px-2 py-1 transition duration-500 rounded-[8px] hover:bg-primary hover:text-white hover:border-primary "> Review Product </button>

                    </div>
                  ))


                }

              </div>

          {
            order.items.length > 3 &&
            <p className="text-black font-semibold text-md"> +{order.items.length - 3} more items </p>

          }

            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Orders;
