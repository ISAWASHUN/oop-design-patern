class Employee {
    private id: number
    private name: string
    private salary: number

    work(): void {
        console.log("働きます")
    }

    protected getSalary(): number {
        return this.salary
    }

    protected getId(salary: number): void {
        this.salary = salary
    }
}
