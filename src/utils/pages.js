export const  getPageCount = (totalCount,limit)=>{
    return Math.ceil(totalCount/limit)
}

export const getPagesArray = (totalPage)=>{
    let pageArr = []
    for(let i = 0; i<totalPage;i++){
        pageArr.push(i+1);
    }
    return pageArr
}