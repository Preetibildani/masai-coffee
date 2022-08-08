function conf(event){
    event.preventDefault();
    let confirm=document.getElementById("confirm")

    setTimeout(() => {
        alert("Your Order is accepted")

        setTimeout(() => {
            alert("Your Order is being Prepared")
    
            setTimeout(() => {
                alert("Your Order is being Packed")

                setTimeout(() => {
                    alert("Your Order is out of delivery")

                    setTimeout(() => {
                        alert("Your Order delivered")
           },12000);
            },10000);
            },8000);
           },3000);
            },000)
}