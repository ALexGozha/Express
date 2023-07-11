export function cons(req,res,next){
    res.cons = console.log('gggggggg')
    next()
}