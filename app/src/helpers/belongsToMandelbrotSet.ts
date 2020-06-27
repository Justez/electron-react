export default function(x: number, y: number): boolean {
    let realComponentOfResult = x;
    let imaginaryComponentOfResult = y;

    for (let i = 0; i < 10; i++) {
        const tempRealComponent = realComponentOfResult * realComponentOfResult
            - imaginaryComponentOfResult * imaginaryComponentOfResult
            + x;

        const tempImaginaryComponent = 2 * realComponentOfResult * imaginaryComponentOfResult
            + y;

        realComponentOfResult = tempRealComponent;
        imaginaryComponentOfResult = tempImaginaryComponent;
    }

    if (realComponentOfResult * imaginaryComponentOfResult < 5)
        return true;

    return false;
}