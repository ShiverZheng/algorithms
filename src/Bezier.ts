export interface Point {
    x: number;
    y: number;
}

export const multiPointBezier = (points: Point[], t: number) => {
    const len = points.length;
    let x = 0;
    let y = 0;
    const func = (start: number, end: number) => {
        let cs = 1;
        let bcs = 1;
        let s = start;
        let e = end;
        while (e > 0) {
            cs *= s;
            bcs *= e;
            s--;
            e--;
        }
        return (cs / bcs);
    };
    for (let i = 0; i < len; i++) {
        const ponit = points[i];
        x += ponit.x * Math.pow((1 - t), (len - 1 - i)) * Math.pow(t, i) * func(len - 1, i);
        y += ponit.y * Math.pow((1 - t), (len - 1 - i)) * Math.pow(t, i) * func(len - 1, i);
    }
    return ({ x, y });
};

export const bezier = (anchorpoints: Point[], amount: number) => {
    const points = [];
    for (let i = 0; i < amount; i++) {
        const point = multiPointBezier(anchorpoints, i / amount);
        points.push(point);
    }
    return points;
};
