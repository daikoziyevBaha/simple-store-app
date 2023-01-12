/**
 * Function gets several funcs, which return new comps with props
 * @param  {...any} funcs 
 * @returns 
 */
const compose = (...funcs) => (comp) => {
    return funcs.reduceRight((wrapper, f) => f(wrapper), comp)
}

export default compose;