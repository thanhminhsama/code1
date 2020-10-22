
/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.microbit.org/blocks/custom
 */
/**
 * hàm lựa chọn mục được liệt kê trong hàm MyEnum
 */
enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace custom {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    /**
     * TODO: mô tả chức năng của bạn ở đây
     * @param n mô tả tham số ở đây, eg: 1
     * @param s mô tả tham số ở đây, eg: "Hello"
     * @param e mô tả tham số ở đây
     */
    //% block="do stuff with $n and $s and $e" 
    export function doStuff(n: number, s: string, e: MyEnum): void {
        // Add code here
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block="computer fib with $value"
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value -1) + fib(value - 2);
    }
}
