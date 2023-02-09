class SmallestIntegerFinder {
    findSmallestInt(args) {
        const newArr = args.sort((a, b) => a - b )
        return newArr[0]
    }
}