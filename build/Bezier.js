export var multiPointBezier = function (points, t) {
    var len = points.length;
    var x = 0;
    var y = 0;
    var func = function (start, end) {
        var cs = 1;
        var bcs = 1;
        var s = start;
        var e = end;
        while (e > 0) {
            cs *= s;
            bcs *= e;
            s--;
            e--;
        }
        return (cs / bcs);
    };
    for (var i = 0; i < len; i++) {
        var ponit = points[i];
        x += ponit.x * Math.pow((1 - t), (len - 1 - i)) * Math.pow(t, i) * func(len - 1, i);
        y += ponit.y * Math.pow((1 - t), (len - 1 - i)) * Math.pow(t, i) * func(len - 1, i);
    }
    return ({ x: x, y: y });
};
export var bezier = function (anchorpoints, amount) {
    var points = [];
    for (var i = 0; i < amount; i++) {
        var point = multiPointBezier(anchorpoints, i / amount);
        points.push(point);
    }
    return points;
};
