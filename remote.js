function remoteUrl(resp,pathname){
    resp.write('you are going to '+ pathname);
}
exports.remote =remoteUrl;