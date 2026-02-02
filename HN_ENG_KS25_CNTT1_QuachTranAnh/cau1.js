let n;
n =+prompt("Nhap n: ");
if(n%2==0){
    console.log(`so ${n} la so chan`);
    
}else{
    console.log("so ${n} la so le");
    
}
if(n>0){
    console.log(`so ${n} la so duong`);
    for(let i=1; i<=n; i++){
        console.log(i);
        
    }
    
}else if(n<0){
    console.log(`so ${n} la so am`);
    console.log('Gia tri khong hop le de tao day so');
    
}else{
    console.log(`so ${n} la so 0`);
    
}