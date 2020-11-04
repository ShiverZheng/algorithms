var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
export var randomNum = function (min, max) { return Math.floor(Math.random() * (max - min + 1) + min); };
export var xCoordinate = function (r, y, isCenterOnRight) {
    return (isCenterOnRight ? -1 : 1) * Math.sqrt(r * r - y * y);
};
export var generateCircle = function (config) {
    var circles = [];
    for (var i = 0; i < config.length; i++) {
        circles.push({
            r: randomNum(config.minRadius, config.maxRadius),
            percent: randomNum(config.minPercent, config.maxPercent) / 100,
            isCenterOnRight: i % 2 === 0,
        });
    }
    return circles;
};
export var generatePoints = function (circles, increment) {
    var len = circles.length;
    var points = [];
    var offsetY = 0;
    for (var i = 0; i < len; i++) {
        var circlePoint = [];
        var minY = (1 - circles[i].percent) * circles[i].r;
        var maxY = circles[i].percent * circles[i].r + minY;
        var range = maxY - minY;
        for (var y = -range / 2; y < range / 2; y += increment) {
            var x = xCoordinate(circles[i].r / 2, y, circles[i].isCenterOnRight);
            circlePoint.push({ x: x, y: y + offsetY + (maxY - minY) / 2 });
        }
        offsetY = circlePoint[circlePoint.length - 1].y;
        points.push(circlePoint);
    }
    var p = [];
    var lastCircleEndPoint = null;
    var _loop_1 = function (i) {
        var point = points[i];
        if (i === 0) {
            lastCircleEndPoint = points[0][points[0].length - 1];
            p.push.apply(p, point);
            return "continue";
        }
        if (lastCircleEndPoint) {
            var currentCircleFirstPoint = point[0];
            var offsetX_1 = currentCircleFirstPoint.x - lastCircleEndPoint.x;
            var formatedPoint = point.map(function (v) { return ({
                x: v.x - offsetX_1,
                y: v.y,
            }); });
            p.push.apply(p, formatedPoint);
            lastCircleEndPoint = formatedPoint[point.length - 1];
        }
    };
    for (var i = 0; i < points.length; i++) {
        _loop_1(i);
    }
    return p.map(function (v, index) { return (__assign({}, v, { index: index })); });
};
