const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://Earl:123@cluster0.hv4xatx.mongodb.net/")
.then(()=>{
    console.log(`mongo is connectedddd`);
}).catch((e)=>{
    console.error(e);
    console.log("not connected");
})