// 类本身只是一个定义了行为和属性的抽象存在，无法直接调用其方法或访问其属性
// 类本身并不提供功能，只有通过实例化后，才能使用类中的方法和属性
// 泛型 <> 后跟 extends 表类型约束
class Calculator<T extends number | bigint> {
    // 默认的构造函数，实例被创建时使用
    constructor() {
        console.log(`Calculator has been created.`);
    }

    add(a: T, b: T): T {
        // 直接用 return (a + b) as T 不行
        // 加法运算还有 string 的存在
        if (typeof a === "bigint" && typeof b === "bigint") {
            return (a + b) as T;
        } else if (typeof a === "number" && typeof b === "number") {
            return (a + b) as T;
        } else { 
            throw new Error(`Incompatible type`);
        }
    }

    abstract(a: T, b: T): T {
        return (a - b) as T;
    }

    multiply(a: T, b: T): T {
        return (a * b) as T;
    }

    divide(a: T, b: T): T {
        // bigint 不能被直接整除
        if (typeof b === 'bigint')
            throw new Error(`'b' can not be bigint type`);

        return (a / b) as T;
    }
}

const computed = new Calculator<number>();
console.log(
    computed.add(2, 3), computed.abstract(2, 3), computed.multiply(2, 3), computed.divide(2, 3)
);