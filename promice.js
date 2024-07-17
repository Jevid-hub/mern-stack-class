const goDate = new Promise((accept,reject) => {
    const dating = true
    if (dating) {
        accept("Date is confirmed")
    } else {
        reject("data is not confirmed")
    }
})
goDate
.then((data)=> {
    console.log(data)
})
.catch((rejected_data)=> {
    console.log(rejected_data)
})



