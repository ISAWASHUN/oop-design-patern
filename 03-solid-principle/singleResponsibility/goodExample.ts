class EmployeeData {
    constructor(public name: string, public department: string) {}
}

class PayCalculator {
    private getRegularHours() {
        console.log("給与計算用の労働時間計算ロジック")
    }

    calculatePay(employee: EmployeeData) {
        this.getRegularHours();
        console.log(`${employee.name}の給与を計算しました`);
    }
}

class HourReporter {
    private getRegularHours() {
        console.log("労働時間レポート用の労働時間計算ロジック")
    }

    reportHours(employee: EmployeeData) {
        this.getRegularHours();
        console.log(`${employee.name}の労働時間をレポートしました`);
    }
}

class EmployeeRepository {
    save(employee: EmployeeData) {
        console.log(`${employee.name}を保存しました`);
    }
}

function run() {
    const employeeData = new EmployeeData('山田', '開発');
    const payCalculator = new PayCalculator();
    const hourReporter = new HourReporter();

    console.log('経理部門');
    payCalculator.calculatePay(employeeData);
    
    console.log('');
    console.log('人事部門');
    hourReporter.reportHours(employeeData);
}

run();
