var a=parseInt(prompt("main array length"));
var main=[a];
for(i=0 ;i<a;i++){
	main[i]=parseInt(prompt(" array value"));
}
document.write(main); 

var newindex=parseInt(prompt("main array index value"));
main[newindex]=parseInt(prompt(" array new value"));
document.write("<br>"+  main +"<br>"); 

var b=parseInt(prompt("delete"));
for (i=b; i<a; i++){
    main[i]=main[i+1]
}
document.write(main)

