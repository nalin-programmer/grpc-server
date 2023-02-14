import { Injectable } from '@nestjs/common';

@Injectable()
export class MathService {
    public accumulate(data: number[]): number {
        return (data || []).reduce((a, b) => Number(a) + Number(b));
    }

    public getInfoById(id: string): any {
        console.log("math service id: "+id);
        return {
            id: id,
            name: "nalin",
            mis: 77
        }
    }

    public getHealth(): any{
        return {status : "Healthy"}
    }
}