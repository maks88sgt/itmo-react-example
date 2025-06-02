class Context {
    private strategy: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    public setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    public mapDataToNecessaryFormat(products: any[]): Product[] {
        const result = this.strategy.adaptProducts(products);
        console.log(result.join(','));
        return result
    }
}

interface Product {
    name: string
    price: number
}

interface Strategy {
    adaptProducts(data: any[]): Product[];
}

class ConcreteStrategyA implements Strategy {
    public adaptProducts(data: Product[]): Product[] {
        return data.sort();
    }
}

class ConcreteStrategyB implements Strategy {
    public adaptProducts(data: Product[]): Product[] {
        return data.reverse();
    }
}

const context = new Context(new ConcreteStrategyA());
const data = [{name: "Test", price: 123}]
console.log('Client: Strategy is set to normal sorting.');
context.mapDataToNecessaryFormat(data);

console.log('');

console.log('Client: Strategy is set to reverse sorting.');
context.setStrategy(new ConcreteStrategyB());
context.mapDataToNecessaryFormat(data);