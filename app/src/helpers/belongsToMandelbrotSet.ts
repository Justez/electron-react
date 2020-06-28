export default function(x: number, y: number, levels: number): string {
    var realComponentOfResult = x;
    var imaginaryComponentOfResult = y;
    for(var i = 0; i < levels; i++) {
         var tempRealComponent = realComponentOfResult * realComponentOfResult
                                 - imaginaryComponentOfResult * imaginaryComponentOfResult
                                 + x;
         var tempImaginaryComponent = 2 * realComponentOfResult * imaginaryComponentOfResult
                                 + y;
         realComponentOfResult = tempRealComponent;
         imaginaryComponentOfResult = tempImaginaryComponent;

         if(realComponentOfResult * imaginaryComponentOfResult > 5) 
            return ''+(i/levels * 100);
    }
    return '';     
}          