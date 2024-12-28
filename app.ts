let inp=document.getElementById('inp') as HTMLInputElement

function clickBtn<T>(num:number|string):void{
    inp.value+=num
    console.log(num)
}

function delInp():void{
    inp.value=''
}

function outputValue():void{
    const result=eval(inp.value)
    inp.value=result
    console.log(result)
}

function delLast():void{
    inp.value=inp.value.slice(0,-1)
}