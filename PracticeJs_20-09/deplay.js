function deplay(ms){
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

deplay(2000).then(() => {
    console.log("after 2 second");
});