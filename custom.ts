
/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.microbit.org/blocks/custom
 */
/**
 * hàm lựa chọn mục được liệt kê trong hàm MyEnum
 */
enum MyEnum1 {
    //% block="1"
    One,
    //% block="2"
    Two,
    //% block="3"
    Three,
    //% block="4"
    Four,
    //% block="5"
    Five
}
enum MyEnum2 {
    //% block="1"
    One,
    //% block="2"
    Two,
    //% block="3"
    Three,
    //% block="4"
    Four,
    //% block="5"
    Five
}
/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace animations {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    /**
     * TODO: mô tả chức năng của bạn ở đây
     * @param x tọa độ LED theo hàng
     * @param y tọa độ LED theo cột
     * @param intervalt thời gian trễ
     */
    //% block="blink x $x y $y every $interval ms" 
    export function blink(x:MyEnum1, y:MyEnum2, interval: number): void {
        // Add code here
        let sprite = game.createSprite(x, y)
        sprite.setBlink(interval)
        sprite.blink()
    }
}
