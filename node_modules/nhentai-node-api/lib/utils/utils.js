module.exports = {

    getRawTag (tag) {
        return tag.split(' (').slice(0, -1).join(' ')
    },


    findObject (obj, key, value) {

        const found = Object.entries(obj).filter(object => object[1][key] === value)[0]
        if (!found) return null
        return found[1]
    }
}