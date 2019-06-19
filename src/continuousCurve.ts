export interface Point {
    x: number;
    y: number;
    index?: number;
}

interface Circle {
    r: number; // 圆的半径
    percent: number; // y的区间百分比 0 <= y <= 2r
    isCenterOnRight: boolean; // 圆心是否位于圆弧的右侧
}

export const randomNum = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);

export const xCoordinate = (r: number, y: number, isCenterOnRight: boolean) => {
    return (isCenterOnRight ? -1 : 1) * Math.sqrt(r * r - y * y);
};

interface CircleConfig {
    maxRadius: number;
    minRadius: number;
    maxPercent: number;
    minPercent: number;
    length: number;
}

export const generateCircle = (config: CircleConfig) => {
    const circles: Circle[] = [];
    for (let i = 0; i < config.length; i++) {
        circles.push({
            r: randomNum(config.minRadius, config.maxRadius),
            percent: randomNum(config.minPercent, config.maxPercent) / 100,
            isCenterOnRight: i % 2 === 0,
        });
    }
    return circles;
};

export const generatePoints = (circles: Circle[], increment: number) => {
    const len = circles.length;
    const points: Point[][] = [];
    let offsetY = 0;

    for (let i = 0; i < len; i++) {
        const circlePoint: Point[] = [];
        const minY = (1 - circles[i].percent) * circles[i].r;
        const maxY = circles[i].percent * circles[i].r + minY;
        const range = maxY - minY;
        for (let y = -range / 2; y < range / 2; y += increment) {
            const x = xCoordinate(circles[i].r / 2, y, circles[i].isCenterOnRight);
            circlePoint.push({ x, y: y + offsetY + (maxY - minY) / 2 });
        }
        offsetY = circlePoint[circlePoint.length - 1].y;
        points.push(circlePoint);
    }

    const p: Point[] = [];
    let lastCircleEndPoint = null;
    for (let i = 0; i < points.length; i++) {
        const point = points[i];
        if (i === 0) {
            lastCircleEndPoint = points[0][points[0].length - 1];
            p.push(...point);
            continue;
        }

        if (lastCircleEndPoint) {
            const currentCircleFirstPoint = point[0];
            const offsetX = currentCircleFirstPoint.x - lastCircleEndPoint.x;
            const formatedPoint = point.map(v => ({
                x: v.x - offsetX,
                y: v.y,
            }));
            p.push(...formatedPoint);
            lastCircleEndPoint = formatedPoint[point.length - 1];
        }
    }
    return p.map((v, index) => ({ ...v, index }));
};
