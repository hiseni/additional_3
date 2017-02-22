module.exports = function getBase(n) {
    if (n.length > 13) {
        return '9'.repeat(n.length - 1);
    }

    for (var base = 2, minimalBase = ''; base <= n; base++) {
        for (var tmpN = +n; tmpN; tmpN = Math.floor(tmpN / base)) {
            minimalBase = (tmpN % base === 1)
                ? minimalBase + '1'
                : '';

            if (!minimalBase.length) {
                break;
            }
        }

        if (minimalBase.length) {
            return base.toString();
        }
    }
}
