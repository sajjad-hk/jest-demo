import _ from "lodash"
import {sum}  from './sum.js'

export function plus4lodash(a) {
    return _.sum(a, 4)
}

export function plus4sum(a) {
    return sum(a, 4)
}