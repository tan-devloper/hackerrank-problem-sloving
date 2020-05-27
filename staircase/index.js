function main(n) {
    var space = ' ', pound = '#';
    for (i = 1; i <= n; i++) {
        console.log(space.repeat(n-i) + pound.repeat(i));
    }
}

main(4)