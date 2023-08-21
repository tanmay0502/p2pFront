"use server"

  const addContainer = async (FormData) => {
    "use server";
    const timestamp = new Date().getTime();
    const randomId = `${timestamp}${Math.floor(Math.random() * 1000)}`;
    // const router = useRouter();
    // const name = FormData.get("name")
    let cItems = {
    }
    console.log({cartItems})
    console.log(quantity)
    for (let i = 0; i < cartItems.length; i++) {
      const item = cartItems[i];
      const itemQuantity = quantity[i];
      cItems[item.id] = itemQuantity;
    }

    // alert(randomId);
    // const randomId= getId();
    console.log({randomId})
    const rev = {
        id: randomId,
        product_list: cItems,
    }
  
    const response = await fetch('http://127.0.0.1:8000/container/', {
      method: "POST",
      body: JSON.stringify(rev),
      headers:{
        "Content-Type": "application/json",
      }

    })
    const data = await response.json();
    console.log({data})
    // window.location.reload();
    // cartItems[0].id = 1;
    // router.push("/container"+id)
  }